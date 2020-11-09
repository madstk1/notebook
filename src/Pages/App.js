import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Icon from 'Components/Icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import 'katex/dist/katex.min.css';
import 'Static/Markdown.css';
import 'Static/Style.css';

const mdRenderers = {
    math       : ({value})     => <BlockMath  math={value} />,
    inlineMath : ({value})     => <InlineMath math={value} />,
    code       : ({lang, val}) => <SyntaxHighlighter language={lang} children={val} style={dark} />
};

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
            markdown: target.value,
        });
        target.rows = target.value.split('\n').length + 1;
    }

    render() {
        return (
            <div className="md-body">
                <textarea
                    className="markdown-src textbox"
                    onChange={e => this.OnTextChange(e.target)}
                    defaultValue="# Markdown"
                    placeholder="Here goes the Markdown..."
                >
                </textarea>

                <div className="markdown-dst textbox">
                    <ReactMarkdown
                        plugins={[math]}
                        renderers={mdRenderers}
                        children={this.state.markdown}
                    />
                </div>
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
