import React from 'react';

type prop = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<prop> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map((ans: any) => (
        <div key={ans}>
          <button disabled={userAnswer} value={ans} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: ans}} />
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default QuestionCard;
