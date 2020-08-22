import React, { Component } from 'react';
import * as d3 from 'd3';

export class Demo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            sequences: [
                {
                    distance: 300,
                    radius: 20,
                    count: 8,
                    repetitions: 15,
                    direction: 1
                }
            ],
            generated: [],
            results: [],
            currentSequenceIndex: 0,
        }
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
                        return {
                            x: center.x + Math.cos(i * (rev / s.count)) * s.distance / 2,
                            y: center.y + Math.sin(i * (rev / s.count)) * s.distance / 2,
                            r: s.radius,
                            c: 'crimson'
                        }
                    })
                }
            })
        }, () => {

        let svgContainer = d3
            .select("#demoContainer")
            .append("svg")
            .attr("width", this.container.clientWidth)
            .attr("height", this.container.clientHeight);

        let circles = svgContainer
            .selectAll("circle")
            .data(this.state.generated[this.state.currentSequenceIndex].circles)
            .enter()
            .append("circle");

        let circleAttributes = circles
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.r)
            .attr("fill", d => d.c)

        });
    }
    
    componentDidMount() {
        this.generateCircleData();
    }

    render() {

        const containerStyle = {
            width: '350px',
            height: '350px',
            position: 'absolute',
            right: 0, left: 0, top: 0, bottom: 0,
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'visible'
        }

        return (
            <React.Fragment>
                <div id="demoContainer" ref={ container => this.container = container } style={containerStyle}></div>
            </React.Fragment>
        )
    }
}

export default Demo
