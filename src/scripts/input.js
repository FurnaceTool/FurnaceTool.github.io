
export class Inputs{
    /**
     * Constructor for the Inputs class
     * @param {HTMLElement} place_element - The element in which to place the input elements
     */
    constructor(place_element) {
        this.place_element = place_element
        this.elements = []
    }

    /**
     * Creates an input element with the given parameters and appends it to the place_element
     * @param {string} id - The id of the element
     * @param {string} type - The type of the element, defaults to "text"
     * @param {string} placeholder - The placeholder text, defaults to ""
     * @param {string} default_vaule - The default value of the element, defaults to ""
     */
    create_input_element(id, type = "text", placeholder = "", default_vaule = "", select_values = [], suggestion_values = []) {
        if (type.toLowerCase() == "text") {
            const element = document.createElement("input")
            element.id = id
            element.type = type
            element.placeholder = placeholder
            element.value = default_vaule
            if (suggestion_values.length > 0) {
                const suggestion_div = document.createElement("div")
                const suggestion_div_values = document.createElement("div")
                suggestion_div.classList.add("basis-48/100", "grow", "shrink")
                suggestion_div_values.classList.add("hidden", "suggestion")
                element.classList.value = "bg-[#222630] w-full h-10 px-3 m-0.5 outline-none w-[280px] text-gray-600 placeholder:text-gray-600 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                suggestion_div.appendChild(element)
                suggestion_div.appendChild(suggestion_div_values)
                this.add_suggest(element, suggestion_div_values, suggestion_values)
                this.place_element.appendChild(suggestion_div)
            } else {
                element.classList.value = "bg-[#222630] grow shrink basis-48/100 h-10 px-3 m-0.5 outline-none w-[280px] text-gray-600 placeholder:text-gray-600 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                this.place_element.appendChild(element)
            }
            this.elements.push(element)
        } else if (type.toLowerCase() == "select") {
            const element = document.createElement("select")
            element.id = id
            element.classList.value = "bg-[#222630] grow shrink basis-48/100 h-10 px-3 m-0.5 outline-none w-[280px] text-gray-600 placeholder:text-gray-600 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            for (const value of select_values) {
                const option = document.createElement("option")
                option.value = value[0]
                option.text = `${placeholder}: ${value[1]}`
                element.appendChild(option)
            }
            this.place_element.appendChild(element)
            this.elements.push(element)
        }
    }

    /**
     * Attaches event listeners to an input element to provide suggestion functionality.
     * 
     * The function filters a list of suggestions based on the user's input and displays 
     * matching suggestions. It allows users to click on suggestions to autofill the input 
     * field or press 'Enter' to select the first suggestion. The suggestion list hides 
     * when clicking outside the input or suggestion elements.
     * 
     * @param {HTMLInputElement} input - The input element to attach the suggestion functionality.
     * @param {HTMLElement} suggestionsDiv - The div element where suggestions will be displayed.
     * @param {Array<string>} suggestionsList - The list of suggestions to filter and display.
     */

    add_suggest(input, suggestionsDiv, suggestionsList) {
        input.addEventListener('input', () => {
            const value = input.value.toLowerCase()
            suggestionsDiv.innerHTML = ''
            if (value) {
                const filteredSuggestions = suggestionsList.filter(item => item.toLowerCase().startsWith(value))
                if (filteredSuggestions.length > 0) {
                    filteredSuggestions.forEach(suggestion => {
                        const div = document.createElement('div')
                        div.textContent = suggestion
                        div.addEventListener('click', () => {
                            input.value = suggestion
                            suggestionsDiv.classList.add('hidden')
                        })
                        suggestionsDiv.appendChild(div)
                    })
                    suggestionsDiv.classList.remove('hidden')
                } else {
                    suggestionsDiv.classList.add('hidden')
                }
            } else {
                suggestionsDiv.classList.add('hidden')
            }
        })

        input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                const firstSuggestion = suggestionsDiv.querySelector('div')
                if (firstSuggestion) {
                    input.value = firstSuggestion.textContent
                    suggestionsDiv.classList.add('hidden')
                }
            }
        })
    
        document.addEventListener('click', event => {
            if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
                suggestionsDiv.classList.add('hidden')
            }
        })
    }
}