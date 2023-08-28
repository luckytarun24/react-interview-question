import * as React from 'react';

//Which value will display on clicking on clcik me?

//option
// 1 - undefined
// 2 - on
// 3 - false
// 4 - true

export default function Question_8() {
  const ref = React.useRef();
  const onSubmit = () => {
    console.log(ref.current.checked);
  };

  return (
    <div className="question-8">
      <div>Question 8</div>
      <input type="checkbox" ref={ref} defaultChecked />
      <button onClick={onSubmit}>Click me</button>
    </div>
  );
}
