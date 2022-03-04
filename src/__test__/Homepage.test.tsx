import Homepage from "../pages/Homepage/Homepage";
import * as ReactDom from "react-dom";

describe("Testing input fields", ()=>{
    let container : HTMLDivElement

    beforeEach(()=>{
        container = document.createElement("div");
        document.body.appendChild(container);
        ReactDom.render(<Homepage />, container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it("Render correctly homepage document", ()=>{
        expect(container.querySelector("[data-test='input-form']")).toBeInTheDocument;
        expect(container.querySelector("[data-test='countryLabel']")).toBeInTheDocument;
        expect(container.querySelector("[data-test='country-input']")?.getAttribute("name")).toBe("country");
        expect(container.querySelector("[data-test='submit-button']")?.getAttribute("value")).toBe("Submit");
    })
})