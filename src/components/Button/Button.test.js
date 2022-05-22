import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Test rendering the <Button/> Comp.", () => {
  it("button should be rendered", () => {
    render(<Button />);
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
  });
  it("button should be enabled", () => {
    render(<Button />);
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeEnabled();
  });
  it("button should not be empty", () => {
    const title = "Get Info";
    render(<Button title={title} />);
    const btnElement = screen.getByRole("button");
    expect(btnElement).not.toBeEmptyDOMElement();
  });
  it("button should have title from given props", () => {
    const title = "Get Info";
    render(<Button title={title} />);
    const btnElement = screen.getByRole("button");
    expect(btnElement).toContainHTML(title);
  });
  it("button should have customClass from given props", () => {
    const custom = "newStyle";
    render(<Button customStyle={custom} />);
    const btnElement = screen.getByRole("button");
    expect(btnElement).toHaveClass(custom);
  });
});
