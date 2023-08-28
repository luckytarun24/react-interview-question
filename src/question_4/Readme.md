# Question 4 Component Readme

The `Question_4` component is designed to demonstrate the behavior of the `useEffect` hook in React and to identify the `useEffect` invocation that will render only once during the component's lifecycle. The component provides several options for consideration.

## Question

The `Question_4` component presents the following question:

"Which `useEffect` invocation will cause rendering to occur only once?"

### Options

- Option 4: `React.useEffect(() => { console.log('EFFECT - 4'); }, []);`
- Option 2: `React.useEffect((index) => { if (index) { console.log('EFFECT - 2'); } });`
- Option 3: `React.useEffect(() => { console.log('EFFECT - 4'); });`
- Option 4: `React.useEffect(() => { console.log('EFFECT - 4'); }, 4);`

## Explanation

The `useEffect` hook is used for managing side effects in a React component. One common use case is to perform tasks that need to run after the component renders, such as fetching data or interacting with the DOM.

- **Option 4**: This `useEffect` invocation includes an empty dependency array (`[]`). This means that the effect will run only once, after the initial rendering. It is the correct option for rendering only once.

- **Option 2**: This `useEffect` invocation lacks a dependency array. Without dependencies, the effect runs after every render, which is not what we're looking for to achieve rendering only once.

- **Option 3**: This `useEffect` invocation lacks a dependency array, causing the effect to run after every render, not just once.

- **Option 4**: This `useEffect` invocation includes a dependency value of `4`. Dependency values are used to watch for changes in specific values and rerun the effect when they change. The value `4` is not a dependency in this context and doesn't achieve the goal of rendering only once.

## Correct Answer

Based on the provided code, the correct option is **Option 4**: `React.useEffect(() => { console.log('EFFECT - 4'); }, []);`

This option uses an empty dependency array, causing the `useEffect` to run only once after the initial rendering of the component.

## Contribution

Contributions to the component are encouraged. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
