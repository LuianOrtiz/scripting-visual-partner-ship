const Reader = require('./../../lib/utils/Reader')

describe(`Testint Reader to get json`, () => {

    test(`1. Get json object`, () => {
        const explorer = {"name": "Woopa1", "mission": "node"}
        const explorers = "explorers.json"
        const explorersList = Reader.readJsonFile(explorers);

        expect(explorersList[0].name).toBe(explorer.name)
        expect(explorersList[0].mission).toBe(explorer.mission)
    });
});