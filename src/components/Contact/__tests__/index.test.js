/* eslint-disable testing-library/prefer-screen-queries */
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact", () => {
  test("render", () => {
    render(<Contact />);
  });

  test("match snapshot to render", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("inserts text into links", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    expect(getByTestId("btn")).toHaveTextContent("Submit");
  });
});
