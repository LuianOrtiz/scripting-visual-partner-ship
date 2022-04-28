const ExplorerService = require('./../../lib/services/ExplorerService')

describe(`Tests ExplorerService function`, () => {

    test(`1. Filter explorers by mission`, () => {
        const explorers = [ { mission: "node" }]
        const explorerInNode = ExplorerService.filterByMission(explorers, "node") 

        expect(explorerInNode.length).toBe(1)
    })

    test(`2. get Amount of explorers by mission`, () => {
        const explorers = [ { mission: "node"}, {mission: "java"}, { mission: "node"}]
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node")

        expect(explorersAmount).toBe(2)
    })

    test(`3. get Explorer's username by mission`, () => {
        const explorer = [ { githubUsername: "Juan", mission: "node"}, {githubUsername: "pedro", mission: "node"}] 
        const explorerUsername = ExplorerService.getExplorersUsernamesByMission(explorer, "node")
        
        expect(explorerUsername[0]).toBe("Juan")
    })

})