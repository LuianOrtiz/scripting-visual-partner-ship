class ExplorerService{
    
    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const explorerUsernameByMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        return explorerUsernameByMission; 
    }
    
}
module.exports = ExplorerService;
