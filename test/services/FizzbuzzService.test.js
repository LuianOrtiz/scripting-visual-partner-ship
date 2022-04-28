const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe(`Test FizzbuzzService`, () => {

    test(`1. Explorer trick equals to a number`, () => {
        const explorer = {name: "Explorer1", score: 1}
        const fbSerive = FizzbuzzService.applyValidationInExplorer(explorer)

        expect(fbSerive.trick).toBe(1)
    })

    test(`2. Explorer trick equals to "Fizz"`, () => {
        const explorer = {name: "Explorer3", score: 3}
        const fbSerive = FizzbuzzService.applyValidationInExplorer(explorer)

        expect(fbSerive.trick).toBe("FIZZ")
    })

    test(`3. Explorer trick equals to "Buzz"`, () => {
        const explorer = {name: "Explorer5", score: 5}
        const fbSerive = FizzbuzzService.applyValidationInExplorer(explorer)

        expect(fbSerive.trick).toBe("BUZZ")
    })

    test(`4. Explorer trick equals to "FizzBuzz"`, () => {
        const explorer = {name: "Explorer15", score: 15}
        const fbSerive = FizzbuzzService.applyValidationInExplorer(explorer)

        expect(fbSerive.trick).toBe("FIZZBUZZ")
    })
})