const ExplorerController = require("./controllers/ExplorerController");
const FizzbuzzService = require("./services/FizzbuzzService");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

/**
 * endpoint to get explorers filtering by mission
 */
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    
    response.json({
        mission: request.params.mission, 
        quantity: explorersAmountInMission
    });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernameByMission = ExplorerController.getExplorersUsernameByMission(mission);

    response.json(explorersUsernameByMission);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzz = FizzbuzzService.applyValidationInNumber(score);

    response.json({
        score: request.params.score,
        trick: fizzbuzz
    })
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});