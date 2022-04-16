import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // First test - verify that the component is rendering
  test("renders", () => {
    render(<About />);
  });

  // Second test - test case - comparing snapshots
  test("matches snapshot DOM node structure", () => {
    // Render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
