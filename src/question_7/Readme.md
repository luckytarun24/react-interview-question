# Question 7 Component Readme

The `Question_7` component is designed to explore different ways of using the `useEffect` hook to display the result of a fetched list of fruits using the `fetchFruits` function. Each option (`Option_1`, `Option_2`, and `Option_3`) demonstrates a different approach to achieve this. The goal is to identify the correct implementation that displays the fetched fruits.

ready present in your project.

## Question

The `Question_7` component presents the following question:

"What should you write inside the `useEffect` in order to display the `fetchFruits` function's result?"

### Options

- **Option 1**:

  ```jsx
  React.useEffect(() => {
    fetchFruits().then((result) => {
      dispatch({ type: 'fetch_fruits', data: result });
    });
  }, []);
  ```

- **Option 2**:

  ```jsx
  React.useEffect(() => {
    dispatch({ type: 'fetch_fruits', data: fetchFruits() });
  }, []);
  ```

- **Option 3**:
  ```jsx
  React.useEffect(() => {
    dispatch(
      fetchFruits().then((result) => {
        return { type: 'fetch_fruits', data: result };
      })
    );
  }, []);
  ```

## Explanation

The `Question_7` component showcases three different options to display the result of the `fetchFruits` function using the `useEffect` hook. Each option uses the `useReducer` hook to manage state updates.

- **Option 1**: This option correctly uses `fetchFruits()` within the `then` callback of the `fetchFruits` promise to dispatch the fetched data using the `'fetch_fruits'` action type.

- **Option 2**: This option uses `fetchFruits()` directly as the `data` value for the dispatch. However, this approach will not work because `fetchFruits()` returns a promise, not the actual data.

- **Option 3**: This option attempts to dispatch the result of `fetchFruits()` using a `then` callback. However, the dispatch itself is expected to be an action object, not a promise.

## Correct Answer

The correct implementation is **Option 1**:

```jsx
React.useEffect(() => {
  fetchFruits().then((result) => {
    dispatch({ type: 'fetch_fruits', data: result });
  });
}, []);
```

This option correctly fetches the fruits using `fetchFruits()` and dispatches the fetched data using the `'fetch_fruits'` action type.

## Contribution

Contributions to the `Question_7` component are encouraged. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
