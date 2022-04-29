class FizzbuzzService {

    /**
     * validate explorer using fizzbuzz
     * @param {explorerObject} explorer 
     * @returns explorer
     */
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if(explorer.score%3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        }
        else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    /**
     * validation a number to return fizzbuzz
     * @param {number} number 
     * @returns number or fizz or buzz or fizzbuzz
     */
    static applyValidationInNumber(number){
        if(number % 3 === 0  && number % 5 === 0){
            return "FIZZBUZZ";
        } else if(number % 3 === 0) {
            return "FIZZ";
        } else if(number % 5 === 0) {
            return "BUZZ";
        }else{
            return number;
        } 
    }
}
module.exports = FizzbuzzService;