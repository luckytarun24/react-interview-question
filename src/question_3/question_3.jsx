import * as React from 'react';

//Which option wrapper will hide child component for four second?

export default function Question_3() {
  const [state, setState] = React.useState();
  return (
    <div className="question-3">
      <div>Question 3</div>
      <Option_1>{'HELLO-1'}</Option_1>
      <br />
      <Option_2>{'HELLO-2'}</Option_2>
      <br />
      <Option_3>{'HELLO-3'}</Option_3>
      <br />
      <Option_4>{'HELLO-4'}</Option_4>
    </div>
  );
}

const Option_1 = (props) => {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 4000);
  }, []);
  if (state) return props.children;
  else null;
};

const Option_2 = (props) => {
  return setTimeout(() => {
    return props.children;
  }, 4000);
};

const Option_3 = (props) => {
  // wait(4);
  return <></>;
};
const Option_4 = (props) => {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => {
      setState(true);
    }, 4000);
  }, []);
  if (state) return props.body;
  else null;
};
