
export default class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answer = data.incorrect_answer
    }

    get Template() {

        return /*html*/`
            <div class="row d-flex justify-content-center align-items-center my-5">
                <div class="col-6">
                    <div class="card text-center py-4">
                        <span>${this.question}</span>
                    </div>
                </div>
            </div>
            `
    }
}

            // <div class="row d-flex justify-content-center my-5 text-center">
            //     <div class="col-3">
            //         <button>SUBMIT</button>
            //     </div>
            // </div>