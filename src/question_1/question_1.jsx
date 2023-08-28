import * as React from 'react';

//How many time hello will display ?

//option
// 1 - 1
// 2 - 0
// 3 - 3
// 4 - 2

export default function Question_1({ visible }) {
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    console.log('hello');
    setState(1);
  }, [visible]);
  return (
    <div className="question-1">
      <div>Question 1</div>
      <h1>{state}</h1>
    </div>
  );
}
