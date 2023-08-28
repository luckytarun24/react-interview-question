import * as React from 'react';

//Which useffect render one time?

export default function Question_4() {
  const [state, setState] = React.useState(0);

  //Option 1
  React.useEffect(() => {
    console.log('EFFECT - 1');
  }, []);

  // Option 2
  React.useEffect((index) => {
    if (index) {
      console.log('EFFECT - 2');
    }
  });

  //Option 3
  React.useEffect(() => {
    console.log('EFFECT - 1');
  });

  // Option 3
  React.useEffect(() => {
    console.log('EFFECT - 1');
  }, 1);

  return (
    <div className="question-4">
      <div>Question 4</div>
    </div>
  );
}
