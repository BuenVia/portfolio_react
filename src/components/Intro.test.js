import { render, screen } from "@testing-library/react"
import Intro from "./Intro"
import React from "react"

test("input field ok", () => {
    render(<Intro />)
    const header = screen.getByText('About')
})