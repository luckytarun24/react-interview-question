# Question 8 Component Readme

The `Question_8` component focuses on understanding the behavior of a checkbox's `ref` and its checked status when accessing it within an event handler. The component presents a scenario where a checkbox is rendered along with a button, and the goal is to identify the value that will be displayed upon clicking the "Click me" button.

## Question

The `Question_8` component presents the following question:

"Which value will be displayed upon clicking the 'Click me' button?"

### Options

- **Option 1**: `undefined`
- **Option 2**: `on`
- **Option 3**: `false`
- **Option 4**: `true`

## Explanation

The `Question_8` component includes an input checkbox and a button. The checkbox is associated with the `ref` named `ref` using the `useRef` hook. The checkbox's `defaultChecked` attribute is set to `true`.

The `onSubmit` function is an event handler for the button's `onClick` event. When the button is clicked, the `onSubmit` function logs the `ref.current.checked` value to the console.

## Expected Outcome

Based on the provided code, the correct answer is **Option 4**: `true`.

This is because the `defaultChecked` attribute is set to `true` for the checkbox. When the component renders, the checkbox is initially checked. Clicking the "Click me" button will trigger the `onSubmit` event handler, which accesses the checkbox's `checked` property using the `ref`. Since the checkbox is initially checked, the value `true` will be displayed in the console.

## Contribution

Contributions to the `Question_8` component are encouraged. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
