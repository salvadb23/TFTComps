let json = require("./champions");
const { combinations } = require("mathjs");
const Combinatorics = require('js-combinatorics');

let champArr = [
    { champion: 'Brand', cost: 4, traits: [ 'Inferno', 'Mage' ] },
    { champion: 'Braum', cost: 2, traits: [ 'Glacial', 'Warden' ] },
    { champion: 'Diana', cost: 1, traits: [ 'Inferno', 'Assassin' ] },
]
let traitCheck = (arr) => {
    let res = {};
    for(let champ of arr){
        for(let trait of champ.traits){
            res[trait] = res[trait] + 1 || 1
        }
    }
    return res
};

let createObj = (arr) => {
    let res = {}
    for(let champ of json){
        for(let trait of champ.traits){
            if(res[trait]){
                res[trait].push(champ.champion)
            } else {
                res[trait] = [champ.champion]
            }
        }
    }
    return res
};

let test = {"Inferno": 3, "Warden": 4}
let createCombination = (obj) => {
    let traits = createObj(json);
    let arr = []
    let index = 0
    for(let key of Object.keys(obj)){
        arr.push([])
        let cmb = Combinatorics.combination(traits[key],obj[key])
        while(a = cmb.next()) arr[index].push(a);
        index += 1
    };
    return arr
};

let createComposition = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        let temp = []
        for(let comp of arr[i]){
            for(let y = 0; y < arr[i+1].length - 1; y++){
                let temp2 = [...comp, ...arr[i+1][y]]
                temp.push(temp2)
            }

        }
        arr[i+1] = temp
    }
    return arr[arr.length - 1]
}

let champNames = (arr) => {
    let res = []
    for(let champ of arr){
        res.push(champ.champion)
    }
    return res
}

let example = createCombination(test)
console.log(createComposition(example))