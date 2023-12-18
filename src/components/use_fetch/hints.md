## Hints for if you get stuck

## useTodo

- Have you created a new file for your custom hook?

- Custom hooks must begin with the word "use" e.g. `useFetchData`

- A custom hook is basically just a function... beginning with `use`! Check you have created a function to wrap the `fetch` functionality with from `todo.tsx`

- Your custom hook will need `data` and `isFetching` state in it

- Does your custom hook contain a `useEffect` wrapping the `fetchData` function?

- Are you returning `data` and is `isFetching` from the hook?

- Think about what your hook is returning... it _could_ return an array with `isFetching` and `data`. But perhaps returning an object would be a little neater?

- Have you imported your fancy new hook into `todo.tsx` and replaced all the old code?

## Reusable Hook

-       When making the hook reusable, what do you need to parameterise..?

- You'll need to pass in the URL, right?

- But you also need to _change the type of response_? Is there a way in TypeScript to make the _type itself_ a parameter...?

- Use generics to make a parameter a type:

```TypeScript
// now T can change each time we call this - EXACTLY the same way that "url" can change each time we call this!
function useFetch<T>(url: string){

}

// e.g.
const todoResult = useFetch<Todo>('/todos');
```
