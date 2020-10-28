import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import rkatex from 'remarkable-katex';
import hljs from 'highlight.js';

import 'highlight.js/styles/github-gist.css';
import 'Static/Markdown.css';

let MD = new Remarkable({
    html:        true,
    xhtmlOut:    true,
    breaks:      true,
    typographer: true,

    highlight: (str, lang) => {
        if(lang) {
            try {
                return hljs.highlight(lang, str).value;
            } catch(e) {}
        } else {
            try {
                return hljs.highlightAuto(str).value;
            } catch(e) {}
        }
        return '';
    }
});

MD.use(linkify, {});
MD.use(rkatex, {});

export default function RenderMD(str) {
    return MD.render(str);
}

export function Source(props) {
    return (
        <textarea
            className="markdown-src textbox"
            onChange={props.onChange}
            defaultValue="# Markdown"
            placeholder="Here goes the Markdown..."
        >
        </textarea>
    );
}

export function Destination(props) {
    return (
        <div
            className="markdown-dst textbox"
            dangerouslySetInnerHTML={props.html}
        />
    );
}
