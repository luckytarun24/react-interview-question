# Question 10 Component Readme

The `Question_10` component explores different ways of rendering the `SayHello` component multiple times using the `Repeater` component. The goal is to identify the correct approach to render the `SayHello` component three times.

## Question

The `Question_10` component presents the following question:

"What is the correct way to call the `Repeater` component in order to render the `SayHello` component three times?"

### Options

- **Option 1**:

  ```jsx
  <Repeater children={{ count: 3, SayHello }} />
  ```

- **Option 2**:

  ```jsx
  <Repeater count={3}>{SayHello}</Repeater>
  ```

- **Option 3**:

  ```jsx
  <Repeater count={3}>{() => SayHello}</Repeater>
  ```

- **Option 4**:
  ```jsx
  <Repeater children={() => SayHello} count={3} />
  ```

## Explanation

The `Question_10` component includes a custom `Repeater` component and four different options to render the `SayHello` component three times using the `Repeater` component.

- **Option 1**: This option is not the correct way to call the `Repeater` component. The `children` prop is expected to be a function that returns the children to be rendered. The provided `{ count: 3, SayHello }` object is not a function.

- **Option 2**: This option correctly calls the `Repeater` component. The `count` prop is provided as `3`, and the `SayHello` component is passed as a child to the `Repeater` component.

- **Option 3**: This option also correctly calls the `Repeater` component. The `count` prop is provided as `3`, and the `() => SayHello` function is passed as a child to the `Repeater` component.

- **Option 4**: This option is not the correct way to call the `Repeater` component. The `children` prop should be a function that returns the children components. In this case, the function `() => SayHello` is provided as the children prop, which is not how it should be used.

## Correct Answer

The correct way to call the `Repeater` component to render the `SayHello` component three times is **Option 3**:

```jsx
<Repeater count={3}>{() => SayHello}</Repeater>
```

In this option, a function that returns the `SayHello` component is passed as the children prop to the `Repeater` component.

## Contribution

Contributions to the `Question_10` component are encouraged. If you encounter issues, have suggestions for improvements, or would like to propose new features, please consider creating a pull request or raising an issue in the project repository.
