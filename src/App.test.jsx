import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import { describe, expect, vi } from "vitest";
import App from "./App";

vi.mock("axios");

describe("<App/>", () => {
  it("fetch and display of movies on initial load", async () => {
    const mockMovies = [
      { episode_id: 1, title: "A New Hope" },
      { episode_id: 2, title: "The Empire Strikes Back" },
      { episode_id: 3, title: "Return of the Jedi" },
    ];

    axios.get.mockResolvedValue({ data: { results: mockMovies } });
    const { getByText } = render(<App />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://swapi.dev/api/films/?format=json"
      );
      expect(
        getByText(new RegExp(mockMovies[0].title, "i"))
      ).toBeInTheDocument();
      expect(
        getByText(new RegExp(mockMovies[1].title, "i"))
      ).toBeInTheDocument();
    });
  });
});
