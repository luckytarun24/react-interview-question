# Question 11 Component Readme

The `Question_11` component explores a scenario where a button's content is determined by the `MyComponent` component's state and the `Button` component's `msg` prop. The goal is to identify the value that will be displayed inside the button when the button is clicked for the first time.

## Question

The `Question_11` component presents the following question:

"Which value will be displayed inside the button when the button is clicked for the first time?"

### Options

- **Option 1**: No value will be displayed inside the button.
- **Option 2**: `good morning`
- **Option 3**: `undefined`
- **Option 4**: `morning good`

## Explanation

The `Question_11` component includes a `MyComponent` that accepts a `render` prop and a `Button` component that displays a button with a given message (`msg`) and click event handler (`onClick`).

The `MyComponent` component's state is managed using the `useState` hook. When the `onClick` event handler is triggered, the `value` state is updated by appending the string `'good'` to it.

## Expected Outcome

Based on the provided code, the correct answer is **Option 4**: `morning good`.

When the `Button` component is rendered inside the `MyComponent` component, the initial value of `msg` is `'morning'`. Upon clicking the button, the `onClick` event handler is triggered, and the `value` state is updated by appending `'good'` to it. Thus, the button will display `morning good` as its content when clicked for the first time.

## Contribution

Contributions to the `Question_11` component are welcome. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
