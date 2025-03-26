import {Markdown} from "./markdown.js"

class SideBar {
    constructor(element) {
        this.element = document.getElementById(element)
        this.pages = {}
    }

    /**
     * Adds a page to the sidebar
     * @param {Page} page - The page to add
     */
    add_page(page) {
        page.element_text.classList.value = "text-base/8 text-nowrap cursor-pointer text-gray-300 hover:text-white hover:font-bold peer-checked:text-white peer-checked:font-bold"
        this.pages[page.content] = page
        this.element.appendChild(page.element)
    }

    /**
     * Adds multiple pages to the sidebar
     * @param {Page[]} pages - The pages to add
     */
    add_pages(pages) {
        pages.forEach(page => this.add_page(page))
    }

    /**
     * Adds a group to the sidebar
     * @param {Group} group - The group to add
     */
    add_group(group) {
        group.pages.forEach(page => {this.pages[page.content] = page})
        this.element.appendChild(group.element)
    }

    /**
     * Adds multiple groups to the sidebar
     * @param {Group[]} groups - The groups to add
     */
    add_groups(groups) {
        groups.forEach(group => this.add_group(group))
    }
}

class Page {
    constructor(title, content_path) {
        this.title = title
        this.content = content_path
        this.element = document.createElement("label")
        this.element.classList.value = "flex flex-row flex-nowarp"

        this.element_radio = document.createElement("input")
        this.element_radio.type = "radio"
        this.element_radio.classList.value = "hidden peer"
        this.element_radio.name = "sidebar-radio"

        this.element_text = document.createElement("span")
        this.element_text.innerHTML = title

        this.element.appendChild(this.element_radio)
        this.element.appendChild(this.element_text)

        this.element.onclick = () => this.open_page()
    }

    async open_page() {
        const doc_content = document.getElementById("content")
        const markdown = new Markdown()
        doc_content.innerHTML = await markdown.to_html(`/src/docs/${this.content}.md`)
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set("page", this.content)
        const url = new URL(window.location)
        url.search = urlParams.toString()

        if (url.hash != "") {
            const element = document.getElementById(url.hash.replace("#", ""))
            if (element != null) element.scrollIntoView({behavior: "smooth"})
        }

        window.history.replaceState({}, '', url.toString())
        new Table_of_Content().load(markdown.table_of_content, "content", "tabel_of_content", "tabel_of_content_items")
    }
}

class Group {
    /**
     * Creates a new Group
     * @param {string} title - The title of the group
     * @param {Page[]} pages - The pages to add to the group
     */
    constructor(title, pages) {
        this.title = title
        this.pages = pages
        this.element = document.createElement("div")
        this.element.classList.value = "my-3"
        this.element_title = document.createElement("h3")
        this.element_title.innerHTML = title
        this.element_title.classList.value = "text-sm/6 font-medium tracking-widest text-gray-200 uppercase"

        this.element.appendChild(this.element_title)
        pages.forEach(page => {
            page.element_text.classList.value = "text-base/8 text-nowrap cursor-pointer text-gray-300 ml-1.5 pl-5 border-l-2 border-gray-500 peer-checked:border-gray-300 peer-checked:text-white peer-checked:font-bold hover:border-gray-300 hover:text-white hover:font-bold"
            this.element.appendChild(page.element)
        })
    }
}

class Table_of_Content {
    constructor() {}

    /**
     * Loads the table of content
     * @param {Object} data - The data that the table of content should be loaded with
     * @param {string} table_of_content_id - The id of the element that the table of content should be loaded into
     */
    load(data, content_id, table_of_content_id, table_of_content_items_id) {
        const content = document.getElementById(content_id)
        const table_of_content = document.getElementById(table_of_content_items_id)
        const tabel_of_content_div = document.getElementById(table_of_content_id)

        while (table_of_content.firstChild) table_of_content.removeChild(table_of_content.firstChild)
        
        if (Object.keys(data).length == 1 && Object.values(data)[0][1] == 1) {
            tabel_of_content_div.hidden = true
            content.classList.replace("md:w-[calc(100%-288px)]", "md:w-full")
            return
        }

        tabel_of_content_div.hidden = false
        content.classList.replace("md:w-full", "md:w-[calc(100%-288px)]")

        Object.entries(data).forEach(([id, values]) => {
            if (values[1] == 1) return
            const element = document.createElement("a")
            element.href = `#${id}`
            element.innerText = values[0]
            if (values[1] == 2) element.classList.add("block", "font-semibold", "text-gray-300", "hover:text-white")
            else element.classList.add("block", "border-l-2", "border-gray-600", "pl-6", "hover:text-white", "hover:border-gray-300")
            element.style.marginLeft = `${values[1] == 2? 5 : 10}px`
            table_of_content.appendChild(element)
        })
    }
}

const sidebar = new SideBar("sidebar")

//Pages
const home = new Page('<i class="fa-solid fa-house"></i> Home', "home")
const showcase = new Page('<i class="fa-solid fa-image"></i> Showcase', "")
sidebar.add_pages([home, showcase])

//Groups
const usage = new Page('<i class="fa-solid fa-file-circle-question"></i> Usage', "")
const furnacejson = new Page('<i class="fa-solid fa-code"></i> File furnace.json', "convert/furnacejson")
const getting_started = new Group("GETTING STARTED", [usage, furnacejson])

const ia_protect_unzip = new Page('<i class="fa-solid fa-shield"></i> IA protect unzip', "convert/bugs/ia_protect_unzip")
const commonbugs = new Group("COMMON BUGS", [ia_protect_unzip])

const armor = new Page('<i class="fa-solid fa-hat-wizard"></i> Armor', "convert/items/armor")
const items = new Group("ITEMS", [armor])

const fonts = new Page('<i class="fa-solid fa-font"></i> Fonts', "convert/fonts/font")
const gui = new Page('<i class="fa-solid fa-layer-group"></i> Gui', "convert/fonts/gui")
const font_and_gui = new Group("FONT & GUI", [fonts, gui])

sidebar.add_groups([getting_started, commonbugs, items, font_and_gui])

const url_params = new URLSearchParams(window.location.search)
const opened_page = sidebar.pages[url_params.get("page") || "home"]
opened_page.open_page()
opened_page.element_radio.checked = true