import React, { Component } from 'react';
import * as d3 from 'd3';

export class Demo extends Component {

    state = {
        circles: [
            {
                x: 100,
                y: 100,
                radius: 20,
                color: 'crimson'
            },
            {
                x: 200,
                y: 200,
                radius: 20,
                color: 'blue'
            }
        ]
    }

    componentDidMount() {
        
        let svgContainer = d3
            .select("#demoContainer")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300);

        let circles = svgContainer
            .selectAll("circle")
            .data(this.state.circles)
            .enter()
            .append("circle");

        let circleAttributes = circles
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.radius)
            .attr("fill", d => d.color)
                                                    

    }

    render() {
        return (
            <div>
                Demo page
                <div className="container" id="demoContainer"></div>
            </div>
        )
    }
}

export default Demo
