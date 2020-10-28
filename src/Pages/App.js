import React, { Component } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Icon from 'Components/Icons';
import RenderMD, { Source, Destination } from 'Components/Markdown';

import 'Static/Style.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Simple Markdown editor</h1>

                <div className="icons">
                    <Icon href="http://github.com/madstk1/notebook" size="2x" icon={faGithub} />
                </div>
            </div>
        );
    }
}

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdown: "",
        };
    }

    OnTextChange(target) {
        this.setState({
            markdown: RenderMD(target.value),
        });

        target.rows = target.value.split('\n').length + 1;
    }

    render() {
        return (
            <div className="md-body">
                <Source
                    onChange={e => this.OnTextChange(e.target)}
                />

                <Destination 
                    html={{__html: this.state.markdown}}
                />
            </div>
        );
    }
}

class Markdown extends Component {
    render() {
        return (
            <div className="main-body">
                <Header />
                <Body />
            </div>
        );
    }
}

export default Markdown;
