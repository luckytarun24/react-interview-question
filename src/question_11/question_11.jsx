import * as React from 'react';

// Considering the code below, which value will be displayed inside the button when the button is clicked for the first time?

// SELECT ONLY ONE OPTION
// OPTION 1 - No value will be displayed inside the button.
// OPTION 2 - good morning
// OPTION 3 - undefined
// OPTION 4 - morning good

const MyComponent = ({ render }) => {
  const [value, setValue] = React.useState('morning');
  return (
    <div>
      {' '}
      {render({
        onClick: () => setValue((v) => v + 'good'),
        msg: value,
      })}{' '}
    </div>
  );
};
const Button = ({ msg = '', onClick }) => {
  return <button onClick={onClick}>{msg}</button>;
};

export default function Question_11() {
  return (
    <div className="question-11">
      <div>Question 11</div>
      <MyComponent render={Button} />
    </div>
  );
}
