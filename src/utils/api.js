import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA'


export const GetIntialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions

    }))
}

export const SaveQuestion = (question) => {
    return _saveQuestion(question);
}
export const SaveQuestionAnswer = (answer) => {
    console.log(answer);
    return _saveQuestionAnswer(answer);
}