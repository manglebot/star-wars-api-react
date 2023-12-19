import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { FetchCharacter } from "./fetchCharacter";

const server = setupServer(
  rest.get("https://swapi.dev/api/people/1/", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "Luke Skywalker",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders Star Wars character name fetched from API", async () => {
  render(<FetchCharacter />);
  const characterName = await screen.findByText("Luke Skywalker");
  expect(characterName).toBeInTheDocument();
});
