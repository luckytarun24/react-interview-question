# Question 6 Component Readme

The `Question_6` component focuses on understanding the behavior of child components when a parent component is re-rendered. It presents a scenario where a parent component re-renders and explores what happens to its child component. The component also provides different outcome options for consideration.

## Question

The `Question_6` component presents the following question:

"What will happen when the parent component is re-rendered?"

### Options

- Option 1: The `onButtonCLick` function will be updated, and the child component will re-render.
- Option 2: The `onButtonCLick` function will remain the same, and the child component will stay intact.
- Option 3: The `onButtonCLick` function will remain the same, and the child component will re-render.
- Option 4: The `onButtonCLick` function will be updated, but the child component's memorization will stay intact.

## Explanation

The `Question_6` component involves a parent component `Parent` and a child component `Child`. The `Parent` component has an `onButtonCLick` function created using the `useCallback` hook. The `Child` component is wrapped in `React.memo` for performance optimization.

The `Question_6` component renders the `Parent` component and a button that changes the value of the `term` state.

## Expected Outcome

Based on the provided code and the scenario described, the correct answer is **Option 3**: The `onButtonCLick` function will remain the same, and the child component will re-render.

This is because the `Parent` component re-renders when the `term` state changes due to the button click. However, the `onButtonCLick` function's reference remains unchanged since it is created using `useCallback` with the `terms` dependency. The `Child` component, wrapped in `React.memo`, will re-render when its parent re-renders, even if the function reference doesn't change.

## Contribution

Contributions to the `Question_6` component are welcome. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
