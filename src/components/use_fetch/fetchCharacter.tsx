import { useFetch, SWAPIResponse } from "./use_fetch";

interface FetchCharacterResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const FetchCharacter = () => {
  const url = "https://swapi.dev/api/people/1";
  const { data, isFetching } = useFetch<SWAPIResponse>(url);

  return (
    <>
      <h2>Star Wars Character</h2>
      {isFetching ? <p>Fetching...</p> : <p>{data?.name}</p>}{" "}
    </>
  );
};
