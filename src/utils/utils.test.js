import { searchMovies, sortMovies } from "./filterMovies";
import { convertToRoman } from "./roman";

describe("searchMovies", () => {
  const movies = [
    { episode_id: 1, title: "A New Hope", director: "Richard Marquand" },
    { episode_id: 2, title: "The Empire Strikes Back", director: "Richard" },
    { episode_id: 3, title: "Return of the Jedi", director: "Marquand" },
  ];

  it("returns all movies when search query is empty", () => {
    const result = searchMovies("", movies);
    expect(result).toEqual(movies);
  });

  it("returns only matching movies when search query is not empty", () => {
    const result = searchMovies("New", movies);
    expect(result).toEqual([
      { episode_id: 1, title: "A New Hope", director: "Richard Marquand" },
    ]);
  });

  it("is case insensetive to search query", () => {
    const result = searchMovies("jedi", movies);
    expect(result).toEqual([
      {
        episode_id: 3,
        title: "Return of the Jedi",
        director: "Marquand",
      },
    ]);
  });
});

describe("sortMovies", () => {
  const movies = [
    {
      episode_id: 5,
      title: "A New Hope",
      director: "Richard Marquand",
      release_date: "1977-05-25",
    },
    {
      episode_id: 2,
      title: "The Empire Strikes Back",
      director: "Richard",
      release_date: "1988-02-25",
    },
    {
      episode_id: 3,
      title: "Return of the Jedi",
      director: "Marquand",
      release_date: "2000-07-25",
    },
  ];

  it("sorts movies by episode number when sortType is episode", () => {
    const actualResult = [
      {
        episode_id: 2,
        title: "The Empire Strikes Back",
        director: "Richard",
        release_date: "1988-02-25",
      },
      {
        episode_id: 3,
        title: "Return of the Jedi",
        director: "Marquand",
        release_date: "2000-07-25",
      },
      {
        episode_id: 5,
        title: "A New Hope",
        director: "Richard Marquand",
        release_date: "1977-05-25",
      },
    ];
    const result = sortMovies("episode", movies);
    expect(result).toEqual(actualResult);
  });

  it("sorts movies by episode number when sortType is episode", () => {
    const actualResult = [
      {
        episode_id: 5,
        title: "A New Hope",
        director: "Richard Marquand",
        release_date: "1977-05-25",
      },
      {
        episode_id: 2,
        title: "The Empire Strikes Back",
        director: "Richard",
        release_date: "1988-02-25",
      },
      {
        episode_id: 3,
        title: "Return of the Jedi",
        director: "Marquand",
        release_date: "2000-07-25",
      },
    ];
    const result = sortMovies("year", movies);
    expect(result).toEqual(actualResult);
  });
});

describe("convertToRoman", () => {
  it("should return an empty sting if input is not a number", () => {
    const result = convertToRoman("My test");
    expect(result, "");
  });

  it("should return correct roman number", () => {
    const result = convertToRoman(2);
    expect(result).toBe("II");
  });
});
