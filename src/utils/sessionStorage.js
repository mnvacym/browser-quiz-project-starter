export const getQuizData = () =>
  JSON.parse(sessionStorage.getItem('quizDataSaved'));

export const setQuizData = (data) =>
  sessionStorage.setItem('quizDataSaved', JSON.stringify(data));
