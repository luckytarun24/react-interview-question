# Question 5 Component Readme

The `Question_5` component features a React application that employs a reducer to manage state updates. The component presents a button and different outcome options that may occur after clicking the button.

## Question

The `Question_5` component presents the following question:

"What will happen after the button is clicked?"

### Options

- Option 1: The variable `state` will be equal to `[1, 2]`, but the number inside the button will not change.
- Option 2: The variable `state` will be equal to `[1, 2]`, and the number 2 will be displayed inside the button.
- Option 3: The variable `state` will be equal to `[2]`, but the number inside the button will not change.
- Option 4: The variable `state` will be equal to `[1]`, but the number inside the button will not change.

## Explanation

The `Question_5` component demonstrates the use of a reducer with a `dispatch` function to update the state. The reducer function is implemented to handle the `'append'` action type, which appends the value `2` to the `state` array.

The `append` function is triggered when the button is clicked, calling the `dispatch` function with the `'append'` action type.

## Expected Outcome

Based on the provided code, the correct answer is **Option 1**: The variable `state` will be equal to `[1, 2]`, but the number inside the button will not change.

This is because the `append` action mutates the existing array, and React's state updates are not triggered. Although the `state` array is updated to `[1, 2]`, the rendering of the button's content is not re-rendered based on this update.

## Contribution

Contributions to the `Question_5` component are encouraged. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
