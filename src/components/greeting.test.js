import Greeting from "./Greeting";
import { render } from "@testing-library/react";

describe("greeting", ()=>{
    test("greeting component render correctly",()=>{
        const { asFragment} = render(<Greeting name="Lisa"/>);
        expect(asFragment()).toMatchSnapshot();
    })
 
    test("throws error when name is not provided",()=>{
     expect(()=> render(<Greeting/>)).toThrow("Name is required")
    })
})