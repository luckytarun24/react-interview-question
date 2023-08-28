import * as React from 'react';

//What happened after button click ?

// option
// 1 - : The variable state will equal to this [1,2], but thenumber inside button will not change.

// 2 - : The variable state will equal to this [1,2] and number 2 displayed isnide button.

// 3 - : The variable state will equal to this [2] but thenumber inside button will not change.

// 4 - : The variable state will equal to this [1] but thenumber inside button will not change.

const reducer = (state, action) => {
  switch (action.type) {
    case 'append': {
      console.log(state);
      state[state.length] = 2;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default function Question_5() {
  const [state, dispatch] = React.useReducer(reducer, [1, 2]);
  const append = () => {
    dispatch({ type: 'append', value: 2 });
  };
  return (
    <div className="question-5">
      <div>Question 5</div>
      <button onClick={append}>{state.length}</button>
    </div>
  );
}
