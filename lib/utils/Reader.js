const fs = require("fs");
class Reader{

    /**
     * Read a json file
     * @param {JSON} filePath 
     * @returns explorers array object
     * 
     */    
    static readJsonFile(filePath){
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}
module.exports =  Reader;