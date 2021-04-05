export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple',
    timeout: 10000
})