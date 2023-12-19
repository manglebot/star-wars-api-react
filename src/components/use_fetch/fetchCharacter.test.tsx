import { render, screen } from "@testing-library/react";
import { rest, http, HttpResponse } from "msw";
import { setupServer } from "msw/lib/node";
import { FetchCharacter } from "./fetchCharacter";

const validResponse = http.get("https://swapi.dev/api/people", () =>
  HttpResponse.json({
    results: [
      {
        name: "Luke Skywalker",
      },
    ],
  })
);

describe("Fetch Character", () => {
  test("renders correctly", async () => {
    render(<FetchCharacter />);
    const textElement = await screen.getByText("Luke Skywalker");
    expect(textElement).toBeInTheDocument();
  });
  //   test("Get that kid with jedi powers", async () => {
  //     // arrange
  //     render(<FetchCharacter />);
  //     const character = await screen.findAllByText("Luke Skywalker");
  //   });
});
