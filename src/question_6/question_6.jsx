import * as React from 'react';

//What will happen when my parent component re-rendered?

//Option

// 1 - The onButtonCLick function will updated and the child component will re-render.

// 2 - The onButtonCLick function will remain the same and the child component will stay intact.

// 3 - The onButtonCLick function will remain the same and the child component will re-render.

// 4 - The onButtonCLick function will updated but the child component memorization will stay intact.

const Parent = ({ terms }) => {
  console.log('render');
  const onButtonCLick = React.useCallback(
    (event) => {
      console.log('you clicked me', event.currentTarget);
    },
    [terms]
  );
  return (
    <>
      <div>Parent</div>
      <Child term={terms} handleClick={onButtonCLick} />
    </>
  );
};

const Child = React.memo(({ term, handleClick }) => {
  console.log('I am re render');
  return (
    <>
      <div>Child</div>
      {/* <button onClick={handleClick}>{'Click Me'}</button> */}
    </>
  );
});

export default function Question_6({ visible }) {
  const [term, setTerm] = React.useState('Hello');

  return (
    <div className="question-6">
      <div>Question 6</div>
      <Parent terms={'term'} />
      <button onClick={() => setTerm('BYY')}>{'change term- ' + term}</button>
    </div>
  );
}
