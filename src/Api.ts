export enum Difficulty {
  EASY = "easy",
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const QuizUrl = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await fetch(QuizUrl);
  const jsonData = await data.json();
  console.log(jsonData);
}