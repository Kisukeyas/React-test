import { render, screen } from "@testing-library/react";
import Login from "../Login";

describe("Test Login Component", () => {
    test("render form with 1 button", async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");
        // console.log(buttonList)
        expect(buttonList).toHaveLength(1);
    });
});