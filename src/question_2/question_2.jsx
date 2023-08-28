import * as React from 'react';

//What will display on browser correct or not correct?

//option
// 1 - A "correct" message will be displayed
// 2 - setState never called
// 3 - A 'not correct' message will be displayed.
// 4 - The code results in a memory leak.

const fetchData = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(Date.now()), 100));

export default function Question_2() {
  const [state, setState] = React.useState();
  const data = fetchData().then((result) => setState(result));
  return (
    <div className="question-2">
      <div>Question 2</div>
      {data.toString() === state ? <div>correct</div> : <div>not correct</div>}
    </div>
  );
}
