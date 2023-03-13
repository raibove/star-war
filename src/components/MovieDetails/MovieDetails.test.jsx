import { render } from "@testing-library/react";
import MovieDetails from "./index";

describe("<MovieDetails/>", () => {
  it("displays the correct movie title", () => {
    const movie = {
      episode_id: 1,
      title: "Return of the Jedi",
      opening_crawl: "Luke Skywalker has returned to...",
      director: "Richard Marquand",
    };
    const { getByText } = render(<MovieDetails selectedMovie={movie} />);
    expect(getByText(new RegExp(movie.title, "i"))).toBeInTheDocument();
  });

  it("displays appropriate message if no movie is selected", () => {
    const { getByText } = render(<MovieDetails selectedMovie={null} />);
    expect(getByText("No movie selected")).toBeInTheDocument();
  });
});
