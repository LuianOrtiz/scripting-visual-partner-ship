const fs = require("fs")
class Reader{

    /**
     * 
     * @param {JSON} filePath 
     * @returns explorerList
     * 
     */    
    static readJsonFile(filePath){
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers
    }
}
module.exports =  Reader