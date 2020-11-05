import React from 'react';
import {AnswerObject} from '../App';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type prop = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
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
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map((ans: any) => (
        <ButtonWrapper 
        key={ans}
        correct={userAnswer?.correctAnswer === ans}
        userClicked={userAnswer?.answer === ans}
        >
          <button disabled={userAnswer ? true : false} value={ans} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: ans}} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
)

export default QuestionCard;
