import Quiz from './quiz.js'
import Auxiliary from "./auxiliary.js"

const quiz = new Quiz()
const auxiliary = new Auxiliary()

let page = auxiliary.queryParams.page || 1

quiz.loadPageStructure(page)