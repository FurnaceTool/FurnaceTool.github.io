
export class Input{
    /**
     * Create an Input class
     * @param {HTMLElement} place_element - The element where the input element will be appended
     * @param {string} [type=text] - The type of the input element
     * @param {string} [placeholder=""] - The placeholder of the input element
     */
    constructor(place_element, type = "text", placeholder = "", default_vaule = "") {
        this.place_element = place_element
        this.type = type
        this.placeholder = placeholder
        this.default_vaule = default_vaule
        this.element = undefined
    }

    /**
     * Create an input element and append it to the specified element
     * @return {HTMLInputElement} The created element
     */
    create_input_element() {
        const element = document.createElement("input")
        element.type = this.type
        element.placeholder = this.placeholder
        element.value = this.default_vaule
        element.classList.value = ("bg-[#222630] grow shrink basis-48/100 h-10 px-3 m-0.5 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]")
        this.place_element.appendChild(element)
        this.element = element
        return element
    }

    /**
     * Get the value of the input element
     * @return {string} The value of the input element
     */
    get_vaule() {
        return this.element.value
    }


    /**
     * Set the value of the input element
     * @param {string} value - The value to set
     */
    set_vaule(value) {
        this.element.value = value
    }
    
    /**
     * Reset the input element to its default value
     */
    reset() {
        this.element.vaule = this.default_vaule
    }
}