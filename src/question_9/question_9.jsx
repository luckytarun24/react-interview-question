import * as React from 'react';

//What will the value of variable meesage when component first rendered?

//option
// 1 - undefined
// 2 - An empty string
// 3 - "hello"
// 4 - "e.target.value"

export default function Question_9() {
  const [message, setMessage] = React.useState();
  console.log('message value', message);
  return (
    <div className="question-9">
      <div>Question 9</div>
      <input
        defaultValue="hello"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
