import { Input } from "./input.js"
import { CodePreview } from "./codepreview.js"

// DropDown Close
window.onclick = (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu")
        for (const dropdown of dropdowns) {
            if (!dropdown.classList.contains('hidden')) dropdown.classList.add('hidden')
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    //Input Content
    //Settings
    const mode_settings_div = document.getElementById("mode-settings")
    new Input(mode_settings_div, "text", "Item Type").create_input_element()
    new Input(mode_settings_div, "text", "Custom Model Data").create_input_element()
    new Input(mode_settings_div, "text", "Damage Predicate").create_input_element()

    //CodePreview
    const codepreview = new CodePreview("jsonview", "divview")
    codepreview.setup()
})
