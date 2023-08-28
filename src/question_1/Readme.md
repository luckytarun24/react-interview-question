# Question 1 Component Readme

The `Question_1` component is a React component designed to demonstrate the behavior of the `useEffect` hook when combined with the `useState` hook. The primary purpose of this component is to showcase how the rendering and state management in React work, particularly with regard to the effect of changes in the `visible` prop on the rendering of the component and the associated state updates.

## Question

In the above example, the `visible` prop determines whether the `Question_1` component is visible or not. When `visible` is changed, the component's `useEffect` hook will be triggered, and it will log 'hello' to the console and update the state value.

## Options

The component poses a question about how many times 'hello' will be displayed based on the provided options:

- Option 1: Display 'hello' 1 time.
- Option 2: Display 'hello' 0 times.
- Option 3: Display 'hello' 3 times.
- Option 4: Display 'hello' 2 times.

## Behavior Explanation

The component utilizes the `useState` hook to manage the `state` variable, which is initially set to 0. The `useEffect` hook is employed to trigger a side effect when the `visible` prop changes. Whenever the `visible` prop changes, the effect logs 'hello' to the console and updates the `state` value to 1.

As a result, the displayed output will correspond to the value of the `state` variable, and the number of times 'hello' is logged depends on the provided options and whether the `visible` prop is being changed in your application.

## Contribution

Feel free to contribute to the component by addressing any issues, making improvements, or suggesting new features. Create a pull request or raise an issue in the project repository.
