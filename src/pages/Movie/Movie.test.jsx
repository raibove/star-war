import { render, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import Movie from "./index";

describe("<Movie/>", () => {
  it("displays director name for selected movie on click", () => {
    const movies = [
      { episode_id: 1, title: "A New Hope", director: "Richard Marquand" },
      { episode_id: 2, title: "The Empire Strikes Back", director: "Richard" },
      { episode_id: 3, title: "Return of the Jedi", director: "Marquand" },
    ];

    const { getByText } = render(<Movie movies={movies} />);

    const filmTitles = getByText(new RegExp(movies[0].title, "i"));
    fireEvent.click(filmTitles);
    expect(getByText(new RegExp(movies[0].director, "i"))).toBeInTheDocument();
  });

  it("should filter the movie list when the user types into the search input", () => {
    const movies = [
      { episode_id: 1, title: "A New Hope", director: "Richard Marquand" },
      { episode_id: 2, title: "The Empire Strikes Back", director: "Richard" },
      { episode_id: 3, title: "Return of the Jedi", director: "Marquand" },
    ];

    const { queryByText, getByPlaceholderText } = render(
      <Movie movies={movies} />
    );

    expect(queryByText(new RegExp(movies[0].title, "i"))).toBeInTheDocument();
    expect(queryByText(new RegExp(movies[1].title, "i"))).toBeInTheDocument();
    expect(queryByText(new RegExp(movies[2].title, "i"))).toBeInTheDocument();

    // search for New Hope
    fireEvent.change(getByPlaceholderText("Type to search..."), {
      target: { value: "new hope" },
    });

    expect(queryByText(new RegExp(movies[0].title, "i"))).toBeInTheDocument();
    expect(
      queryByText(new RegExp(movies[1].title, "i"))
    ).not.toBeInTheDocument();
    expect(
      queryByText(new RegExp(movies[2].title, "i"))
    ).not.toBeInTheDocument();
  });
});
