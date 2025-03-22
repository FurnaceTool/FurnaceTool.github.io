
export class CodePreview {
    /**
     * Initializes a new instance of the CodePreview class.
     * @param {string} jsonview - The ID of the JSON view element.
     * @param {string} divview - The ID of the div view element to append the preview to.
     */

    constructor(jsonview, divview) {
        this.jsonview = jsonview
        this.divview = document.getElementById(divview)

        this.code = undefined
        this.contents = []
    }

    setup() {
        this.code = ace.edit(this.jsonview, {
            theme: "ace/theme/one_dark",
            mode: "ace/mode/json",
            value: localStorage.getItem("code") || "{}"
        })
        this.code.setShowPrintMargin(false)

        // this.code.setValue(localStorage.getItem("code") || "{}")
        // this.load_preview_items()
        
        // this.code.session.on('change', (delta) => {
        //     localStorage.setItem("code", this.code.getValue())
        //     this.load_preview_items()
        // })

    }

    load_preview_items() {
        const furnacedata = JSON.parse(this.code.getValue())
        Object.entries(furnacedata.items).forEach(([javaitem, datas]) => {
            Object.entries(datas).forEach(([datatype, datas2]) => {
                Object.entries(datas2).forEach(([datavalue, item]) => {
                    const preview = document.createElement("div")
                    preview.classList.add("bg-arsenic", "basis-32/99", "grow", "shrink", "h-24", "rounded", "shadow", "p-3", "m-0.5")
                    const edit_button = document.createElement("button")
                    edit_button.classList.add("float-right", "hover:text-gray-600", "text-2xl", "cursor-pointer")
                    edit_button.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
                    const item_type = document.createElement("p")
                    item_type.innerText = `ITEM TYPE: ${javaitem}`
                    const datatext = document.createElement("p")
                    datatext.innerText = `${datatype.replace('_', ' ').toUpperCase()}: ${datavalue}`
                    preview.appendChild(edit_button)
                    preview.appendChild(item_type)
                    preview.appendChild(datatext)
                    this.divview.appendChild(preview)
                })
            })
        })
    }
}