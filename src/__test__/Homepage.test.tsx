import * as ReactDom from "react-dom";
import {
    BrowserRouter
} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

describe("Testing input fields", ()=>{
    let container : HTMLDivElement
    const setup = () => ReactDom.render(<BrowserRouter><Homepage /></BrowserRouter>, container);
    beforeEach(()=>{
        container = document.createElement("div");
        document.body.appendChild(container);
        
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it("Render correctly homepage document", ()=>{
        setup()
        expect(container.querySelector("[data-testid='country-input']")?.getAttribute("name")).toBe("country");
    })
})