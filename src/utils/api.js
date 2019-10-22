import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA'

export const GetUsers = () => {
    return _getUsers();
}
export const GetQuestions = () => {
    return _getQuestions();
}
export const SaveQuestion = (question) => {
    return _saveQuestion(question);
}
export const SaveQuestionAnswer = (answer) => {
    return _saveQuestionAnswer(answer);
}