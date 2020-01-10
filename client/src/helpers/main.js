let json = require('./champions');
let traitfile = require('./traits');
const Combinatorics = require('js-combinatorics');

let traitJSON = arr => {
  let res = {};
  for (let trait of arr) {
    res[trait.name] = {};
    for (let set of trait.sets) {
      res[trait.name][set] = 1;
    }
  }
  return res;
};

let traitCheck = arr => {
  let res = {};
  let teamArr = [];
  let champObj = rewriteJSON(json);
  let traitsets = traitJSON(traitfile);
  for (let team of arr) {
    let total = 0;
    for (let champ of team) {
      for (let trait of champObj[champ].traits) {
        res[trait] = res[trait] + 1 || 1;
      }
    }
    for (let key in res) {
      let num = Object.keys(traitsets[key]);
      if (res[key] >= num[0]) {
        total += 1;
      }
    }
    teamArr.push([{ team: team, traits: res, synergies: total }]);
    res = {};
  }
  return teamArr.sort((a, b) => b[0].synergies - a[0].synergies);
};

let rewriteJSON = arr => {
  let res = {};
  for (let champ of arr) {
    res[champ.champion] = { cost: champ.cost, traits: champ.traits };
  }
  return res;
};

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
    let a = cmb;
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

module.exports = { createCombination, createComposition, traitCheck };
