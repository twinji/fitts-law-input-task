import React, { Component } from 'react';
import * as d3 from 'd3';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import FileSaver from 'file-saver';

export class Demo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isActive: false,
            isComplete : false,
            username: '',
            device: '',
            sequences: [
                {
                    distance: 300,
                    radius: 20,
                    count: 9,
                    repetitions: 15,
                    direction: 1
                },
                {
                    distance: 200,
                    radius: 30,
                    count: 9,
                    repetitions: 15,
                    direction: 1
                }
            ],
            generated: [],
            results: [],
            currentSequenceIndex: 0,
            currentRepetition: 1,
            currentCircleIndex: 0
        }
    }

    resetTest = () => {
        this.setState({
            username: '',
            device: '',
            isActive: false,
            isComplete: false,
            generated: [],
            results: [],
            currentSequenceIndex: 0,
            currentRepetition: 1,
            currentCircleIndex: 0
        }, () => {
            this.generateCircleData();
        });
    }

    getResults = () => {
        this.generateCsvFromResultLogs();
    }
    
    generateCsvFromResultLogs = () => {
        const csv = Object.keys(this.state.results[0]).join(',') + '\n'
            + this.state.results.map(l => Object.values(l).join(',')).join('\n');

        const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        FileSaver.saveAs(csvData, 'fitts_law_results_' + Date.now().toString() + '.csv');
    }
    
    resumeTest = () => {
        this.setState({
            isActive: true
        });
        this.restartTimer();
    }

    pauseTest = () => {
        this.setState({
            isActive: false
        });
    }

    completeTest = () => {
        this.setState({
            isActive: false,
            isComplete: true
        });
    }

    restartTimer = () => {
        this.startTime = performance.now();
        this.timeElapsed = null;
    }

    stopTimer = () => {
        this.timeElapsed = performance.now() - this.startTime;
    }

    onLoginDetailsChange = (loginData) => {
        this.setState({
            username: loginData.username,
            device: loginData.device
        })
    }

    onClick = (d, i) => {

        if (!this.state.isActive)
            return;

        let hit = i === this.state.currentCircleIndex;

        if (hit) {
            this.stopTimer();
        }

        const s = this.state.sequences[this.state.currentSequenceIndex];

        this.appendResultLog(
            this.state.username,
            this.state.device,
            this.state.currentSequenceIndex + 1,
            this.state.currentRepetition,
            s.distance,
            s.radius,
            s.direction,
            hit,
            this.timeElapsed
        );

        if (hit) {
            let currentSequenceIndex = this.state.currentSequenceIndex;
            let s = this.state.sequences[currentSequenceIndex];
            let currentCircleIndex = (this.state.currentCircleIndex + Math.round(s.count / 2)) % s.count;
            let currentRepetition = this.state.currentRepetition + 1;
            let isComplete = false;

            if (currentRepetition > s.repetitions) {
                currentRepetition = 1;
                currentCircleIndex = 0;
                currentSequenceIndex++;

                if (currentSequenceIndex >= this.state.sequences.length) {
                    this.completeTest();
                    isComplete = true;
                } else {
                    this.pauseTest();
                }
            }

            this.setState({
                currentCircleIndex,
                currentRepetition,
                currentSequenceIndex
            }, () => {
                if (!isComplete) {
                    this.renderCircles();
                    this.restartTimer();
                }
            });
        }
    }

    appendResultLog = (username, device, sequence, rep, distance, radius, direction, hit, time) => {

        let existingLog = false;
        var modifiedResults = this.state.results.map(l => {
            if (l.username === username && l.device === device && l.sequence === sequence && l.rep === rep) {
                existingLog = true;
                l.timestamp = Date.now();
                if (!hit) {
                    l.misses++;
                } else {
                    l.hit = hit;
                    l.time = this.timeElapsed;
                }
            }
            return l;
        });

        if (existingLog) {
            this.setState({
                results: modifiedResults
            });
        } else {
            this.setState(prevState => ({
                results: [...prevState.results, {
                    username, 
                    device, 
                    sequence, 
                    rep, 
                    distance, 
                    radius, 
                    direction, 
                    hit, 
                    time, 
                    misses: hit ? 0 : 1, 
                    timestamp: Date.now()
                }]
            }));
        }
    }

    inSequence = () => {
        return this.state.currentSequenceIndex > 0 && !this.state.isComplete;
    }
    
    generateCircleData = () => {

        this.setState({
            generated: this.state.sequences.map((s) => {
                
                let rev = Math.PI * 2;
                let center = {
                    x: this.container.clientWidth / 2,
                    y: this.container.clientHeight / 2
                }

                return {
                    circles: Array(s.count).fill().map((_, i) => {
                        let rotationOffset = Math.PI * 1.5;
                        return {
                            x: center.x + Math.cos(rotationOffset + i * (rev / s.count)) * s.distance / 2,
                            y: center.y + Math.sin(rotationOffset + i * (rev / s.count)) * s.distance / 2,
                            radius: s.radius,
                            color: 'lightgray',
                            activeColor: 'crimson'
                        }
                    })
                }
            })
        }, this.renderCircles);
    }

    renderCircles = () => {

        d3.selectAll("svg > *").remove();
        
        let svgContainer = d3
            .select("#demoContainer > svg")
            .attr("width", this.container.clientWidth)
            .attr("height", this.container.clientHeight)
            .on("click", e => {
                d3.event.stopPropagation();
                this.onClick(null, -1);
            });

        let circles = svgContainer
            .selectAll("circle")
            .data(this.state.generated[this.state.currentSequenceIndex].circles)
            .enter()
            .append("circle");

        circles
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.radius)
            .attr("fill", (d, i) => i === this.state.currentCircleIndex ? d.activeColor : d.color)
            .on("click", (d, i) => {
                d3.event.stopPropagation();
                this.onClick(d, i);
            });
    }
    
    componentDidMount() {
        this.resetTest();
    }

    render() {

        const containerStyle = {
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            zIndex: -100,
            right: 0, left: 0, top: 0, bottom: 0,
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'visible'
        }

        return (
            <React.Fragment>
                <Modal centered keyboard={false} show={!this.state.isActive} onHide={this.resumeTest} backdrop="static">
                    <Modal.Header>
                        {
                            (this.inSequence() || this.state.isComplete) &&
                            <Modal.Title>
                                Sequence {this.state.currentSequenceIndex} out of {this.state.sequences.length} complete
                            </Modal.Title>
                        }
                        {              
                            !this.inSequence() && !this.state.isComplete &&
                            <Modal.Title>
                                Fitt's law demo
                            </Modal.Title>
                        }
                    </Modal.Header>
                    <Modal.Body>
                        {
                            !this.inSequence() && !this.state.isComplete && <Login onChange={this.onLoginDetailsChange}/>
                        }
                        { 
                            this.inSequence() ? 
                                'Take a break and proceed to the next sequence when you are ready.' : 
                                    (this.state.isComplete ? 'You have completed this demo, click below to view results.' : 'Select the red circles as they appear to the best of your ability.') 
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {
                            !this.state.isComplete &&
                            <Button variant="primary" onClick={this.resumeTest} disabled={!this.state.username || !this.state.device}>
                                { this.inSequence() ? 'Proceed' : 'Begin'  }
                            </Button>
                        }
                        {
                            this.state.isComplete && 
                            <React.Fragment>
                                <Button variant="secondary" onClick={this.resetTest}>
                                    Retry demo
                                </Button>
                                <Button variant="primary" onClick={this.getResults}>
                                    Get results
                                </Button>
                            </React.Fragment>
                        }
                    </Modal.Footer>
                </Modal>
                <div id="demoContainer" ref={ container => this.container = container } style={containerStyle}>
                    <svg></svg>
                </div>
            </React.Fragment>
        )
    }
}

export default Demo
