import React from 'react';
import './style.css';
import Question_1 from './question_1/question_1';
import Question_2 from './question_2/question_2';
import Question_3 from './question_3/question_3';
import Question_4 from './question_4/question_4';
import Question_5 from './question_5/question_5';
import Question_6 from './question_6/question_6';
import Question_7 from './question_7/question_7';
import Question_8 from './question_8/question_8';
import Question_9 from './question_9/question_9';
import Question_10 from './question_10/question_10';
import Question_11 from './question_11/question_11';

export default function App() {
  return (
    <div>
      <Question_1 visible={true} />
      <Question_2 />
      <Question_3 />
      <Question_4 />
      <Question_5 />
      <Question_6 />
      <Question_7 />
      <Question_8 />
      <Question_9 />
      <Question_10 />
      <Question_11 />
    </div>
  );
}
