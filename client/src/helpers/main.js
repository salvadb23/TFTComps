let json = require('./champions');
let traitfile = require('./traits');
const Combinatorics = require('js-combinatorics');

let createObj = arr => {
  let res = {};
  for (let champ of json) {
    for (let trait of champ.traits) {
      if (res[trait]) {
        res[trait].push(champ.champion);
      } else {
        res[trait] = [champ.champion];
      }
    }
  }
  return res;
};

const createCombination = obj => {
  let traits = createObj(json);
  let arr = [];
  let index = 0;
  for (let key of Object.keys(obj)) {
    arr.push([]);
    let cmb = Combinatorics.combination(traits[key], obj[key]);
    while ((a = cmb.next())) arr[index].push(a);
    index += 1;
  }
  return arr;
};

const createComposition = arr => {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let temp = [];
    for (let comp of arr[i]) {
      for (let y = 0; y < arr[i + 1].length; y++) {
        let temp2 = [...comp, ...arr[i + 1][y]];
        let uniq = [...new Set(temp2)];
        temp.push(uniq);
      }
      arr[i + 1] = temp;
    }
    arr[i + 1] = temp;
  }
  return arr[arr.length - 1];
};

let test = { Blademaster: 4, Desert: 4, Assassin: 3 };

let example = createCombination(test);
let teams = createComposition(example);
console.log(traitJSON(traitfile));
console.log(traitCheck(teams)[1]);
