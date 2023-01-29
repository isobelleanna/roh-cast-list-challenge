import { render, screen } from '@testing-library/react';
import App from './App';

describe("initial test for react card", () => {
  it("should render headings", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading");
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
    headings.forEach((heading) => {
      expect(heading).not.toBeNull();
    });
  })
})
