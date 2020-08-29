import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div className="container py-5">
                <h1>Fitt's Law Demo</h1>
                <hr/>
                <p className="text-justify">
                    This application was created to test Fitt's law, by collecting data of user input in two dimensions. 
                    It does so by prompting the user to click or tap several sequences of circles as highlighted and logging the accuracy and time taken to select each circle. 
                    This data is then made available to the user at the end of the test via a CSV file.
                    For more information, feel free to contact me via my social accounts.
                </p>
                <hr/>
                <p>Built with React, D3, and FileShare by Vishnu Gunapathi.</p>
                <hr/>
                <div className="icon-container">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/twinji">
                        <img alt="GitHub" src="https://raw.githubusercontent.com/twinji/twinji/master/icons/github.svg"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_twinji/">
                        <img alt="Instagram" src="https://raw.githubusercontent.com/twinji/twinji/master/icons/instagram.svg"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/twinji/">
                        <img alt="LinkedIn" src="https://raw.githubusercontent.com/twinji/twinji/master/icons/linkedin.svg"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_twinji">
                        <img alt="Twitter" src="https://raw.githubusercontent.com/twinji/twinji/master/icons/twitter.svg"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default About
