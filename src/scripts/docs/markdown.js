import { marked } from "marked"
import hljs from "highlight.js"

export class Markdown {
    constructor() {
        this.renderer = new marked.Renderer()
        this.table_of_content = {}

        this.renderer.code = (code) => {
            const validLang = code.lang && hljs.getLanguage(code.lang) ? code.lang : undefined
            const highlighted = validLang ? hljs.highlight(code.text, { language: validLang }).value : hljs.highlightAuto(code.text, ["json", "plaintext"]).value
            return `<pre><code class="hljs ${validLang}">${highlighted}</code></pre>`
        }

        this.renderer.codespan = (codespan) => {
            const validLang = codespan.lang && hljs.getLanguage(codespan.lang) ? codespan.lang : undefined
            const highlighted = validLang ? hljs.highlight(codespan.text, { language: validLang }).value : hljs.highlightAuto(codespan.text, ["json", "plaintext"]).value
            return `<code class="hljs ${validLang}">${highlighted}</code>`
        }

        this.renderer.blockquote = (blockquote) => {
            const icons = {
                "note": "fa-circle-info",
                "warning": "fa-circle-exclamation",
                "error": "fa-bomb"
            }
            if (blockquote.tokens.length > 1 && blockquote.tokens[0].type == "paragraph") {
                const blockquote_type = blockquote.tokens[0].text.split(" ")[0]
                if (["note", "warning", "error"].includes(blockquote_type)) {
                    return `<blockquote class="${blockquote_type}">
                        <p class="title"><i class="fa-solid ${icons[blockquote_type]}"></i> ${blockquote.tokens[0].text.replace(blockquote_type, '')}</p>
                        ${this.marked_tokens(blockquote.tokens.slice(1))}
                    </blockquote>`
                }
            }
            return `<blockquote>${this.marked_tokens(blockquote.tokens)}</blockquote>`
        }

        this.renderer.heading = (heading) => {
            const id = heading.text.toLowerCase().replaceAll(" ", "_")
            this.table_of_content[id] = [heading.text, heading.depth]
            return `<a href="#${id}"><h${heading.depth} id="${id}">${heading.text}</h${heading.depth}></a>`
        }
    }

    async to_html(path) {
        return await fetch(path).then(async res => this.marked(await res.text()))
    }

    /**
     * Converts a markdown string to HTML
     * @param {string} markdown - The markdown string to convert
     * @returns {string} The converted HTML string
     */
    marked(markdown) {
        return marked(markdown, {renderer: this.renderer, breaks: true, gfm: true})
    }

    marked_tokens(tokens) {
        return marked.parser(tokens, {renderer: this.renderer, breaks: true, gfm: true})
    }
}