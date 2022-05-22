import { render, screen } from "@testing-library/react";
import Details from "./Details";

describe("Test rendering the <Details/> Comp.", () => {
    it("Drivring hours input should be rendered", () => {
        const summary = { totalDistance: 5000 };
        render(<Details summary={summary} />);
        const drivingHoursElement = screen.getByPlaceholderText("100");
        expect(drivingHoursElement).toBeInTheDocument();
      });
      it("Rate per Km input should be rendered", () => {
        const summary = { totalDistance: 5000 };
        render(<Details summary={summary} />);
        const RateInpElement = screen.getByPlaceholderText("0");
        expect(RateInpElement).toBeInTheDocument();
      });
});
