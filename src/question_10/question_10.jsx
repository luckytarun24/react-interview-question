import * as React from 'react';

// What is the correct way to call the component Repeater in order to render the component SayHello three times?

const Repeater = ({ count, children }) => {
  const array = Array.from(new Array(count));
  return array.map((_, i) => (
    <div key={i}> {children instanceof Function && children()} </div>
  ));
};

const SayHello = () => <div>hello</div>;

const Option_1 = () => {
  return (
    <div className="option-1">
      <div>Option 1</div>
      <Repeater children={{ count: 3, SayHello }} />
    </div>
  );
};

const Option_2 = () => {
  return (
    <div className="option-2">
      <div>Option 2</div>
      <Repeater count={3}>{SayHello}</Repeater>
    </div>
  );
};

const Option_3 = () => {
  return (
    <div className="option-3">
      <div>Option 3</div>
      <Repeater count={3}>{() => SayHello} </Repeater>
    </div>
  );
};

const Option_4 = () => {
  return (
    <div className="option-4">
      <div>Option 4</div>
      <Repeater children={() => SayHello} count={3} />
    </div>
  );
};

export default function Question_10() {
  return (
    <div className="question-10">
      <div>Question 10</div>
      <Option_1 />
      <Option_2 />
      <Option_3 />
      <Option_4 />
    </div>
  );
}
