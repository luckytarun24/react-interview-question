# Question 3 Component Readme

The `Question_3` component is a React component designed to showcase different wrapper options and their effects on displaying child components. The goal is to identify the wrapper that will hide a child component for a duration of four seconds. The component provides several options for consideration.

## Question

The `Question_3` component presents the following question:

"Which option wrapper will hide the child component for four seconds?"

### Options

- Option 1: The child component is displayed after a delay of four seconds.
- Option 2: The child component is displayed after a delay of four seconds.
- Option 3: The child component is hidden.
- Option 4: The child component is displayed after a delay of four seconds.

## Explanation

The `Question_3` component demonstrates four different options for wrapping child components. Each option showcases a different behavior regarding the visibility of the child component.

- **Option 1**: `Option_1` uses `useState` and `useEffect` to manage the state of visibility. After a delay of four seconds, the state changes, and the child component is displayed.

- **Option 2**: `Option_2` uses `setTimeout` to delay the rendering of the child component by four seconds. However, this option is not designed to be a valid React component as it returns a timeout ID rather than JSX.

- **Option 3**: `Option_3` is an empty fragment, resulting in the child component not being displayed at all.

- **Option 4**: `Option_4` employs `useState` and `useEffect` with `setInterval` to manage the state of visibility. The child component is displayed after a delay of four seconds, but the component is not correctly written to achieve the desired behavior.

## Correct Answer

Based on the provided code, the correct option is **Option 1**: The child component will be hidden for four seconds and then displayed.

## Contribution

Contributions to the component are encouraged. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
