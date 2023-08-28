import * as React from 'react';

// Considering the code below, what should you write inside useEffect in order to display the fetch Fruits function's result?

const fetchFruits = () => Promise.resolve(['Apple', 'banana']);

export default function Question_7() {
  return (
    <div className="question-7">
      <div>Question 7</div>
      <Option_1 />
      <Option_2 />
      <Option_3 />
    </div>
  );
}

const Option_1 = () => {
  const [state, dispatch] = React.useReducer((state, action) => {
    if (action.type === 'fetch_fruits') return action.data;
    return state;
  }, []);

  React.useEffect(() => {
    fetchFruits().then((result) => {
      dispatch({ type: 'fetch_fruits', data: result });
    });
  }, []);
  return (
    <div className="option-1">
      <div>{`Option 1 ===> ${state && state.join(', ')}`}</div>
    </div>
  );
};

const Option_2 = () => {
  const [state, dispatch] = React.useReducer((state, action) => {
    if (action.type === 'fetch_fruits') return action.data;
    return state;
  }, []);

  React.useEffect(() => {
    dispatch({ type: 'fetch_fruits', data: fetchFruits() });
  }, []);
  return (
    <div className="option-2">
      <div>{`Option 2 ===> ${state && "state.join(', ')"}`}</div>
    </div>
  );
};

const Option_3 = () => {
  const [state, dispatch] = React.useReducer((state, action) => {
    if (action.type === 'fetch_fruits') return action.data;
    return state;
  }, []);

  React.useEffect(() => {
    dispatch(
      fetchFruits().then((result) => {
        return { type: 'fetch_fruits', data: result };
      })
    );
  }, []);
  return (
    <div className="option-3">
      <div>{`Option 3 ===> ${state && state.join(', ')}`}</div>
    </div>
  );
};
