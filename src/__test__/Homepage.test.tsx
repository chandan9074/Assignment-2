import * as ReactDom from "react-dom";
import {
    BrowserRouter
} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

describe("Testing input fields", ()=>{
    let container : HTMLDivElement

    beforeEach(()=>{
        container = document.createElement("div");
        document.body.appendChild(container);
        ReactDom.render(<BrowserRouter><Homepage /></BrowserRouter>, container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it("Render correctly homepage document", ()=>{
        
        expect(container.querySelector("[data-testid='countryLabel']")).toBeInTheDocument;
        expect(container.querySelector("[data-testid='country-input']")?.getAttribute("name")).toBe("country");
        expect(container.querySelector("[data-testid='submit-button']")).toBeInTheDocument;
        expect(container.querySelector("[data-testid='submit-button-disable']")).toBeInTheDocument;
    })

    it("Check button disable without input value", ()=>{
        expect(container.querySelector("[data-testid='submit-button']")).toBeDisabled;
    })
})