(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e){e.exports=JSON.parse('[{"name":"Alchemist","innate":"Alchemists move through other units and never stop moving.","sets":[1]},{"name":"Assassin","innate":"Assassins sneak across the battlefield at the start of combat, placing themselves opposite from where they started.","description":"Deploying multiple Assassins grant them critical strike chance and increased critical strike damage, increasing with more Assassins.","sets":[3,6]},{"name":"Avatar","description":"An Avatar\'s element is counted twice for trait bonuses.","sets":[1]},{"name":"Berserker","innate":"At the start of combat, Berserkers leap to the nearest enemy.","description":"Deploying multiple Berserkers grants their attacks a chance to deal damage in a cone behind the target. The chance increases with more Berserkers.","sets":[3,6]},{"name":"Blademaster","description":"Deploying multiple Blademasters grants their attacks a chance to hit extra times, increasing with more Blademasters.","sets":[2,4,6]},{"name":"Cloud","description":"Deploying multiple Cloud champions grants your team dodge change. The dodge chance increases if more Cloud champions are deployed.","sets":[2,3,4]},{"name":"Crystal","description":"Deploying multiple Crystal champions grants them a maximum amount of damage they can take from a single attack or ability hit.","sets":[2,4]},{"name":"Desert","description":"Deploying multiple Desert champions reduces the enemy team\'s armor. The reduction increases if more Desert champions are deployed.","sets":[2,4]},{"name":"Druid","description":"Deploying two Druids grants all Druids health regeneration.","sets":[2]},{"name":"Electric","description":"Deploying multiple Electric champions causes them to damage adjacent enemies whenever they critically strike or are critically struck.","sets":[2,3,4]},{"name":"Glacial","description":"Deploying multiple Glacial champions grants their attacks a chance to stun their target, increasing with more Glacials.","sets":[2,4,6]},{"name":"Inferno","description":"Deploying multiple Inferno champions causes their abilities to temporarily ignite the ground beneath their targets, damaging enemies standing in the fire. Damage increases with more Inferno champions.","sets":[3,6,9]},{"name":"Light","description":"Deploying multiple Light champions causes them to, on death, heal other Light champions for a percentage of their max health and grant them attack speed for the remainer of the round (stacking with multiple Light champion deaths). Heal and attack speed increse with more Light champions.","sets":[3,6,9]},{"name":"Mage","description":"Deploying multiple Mages grants them a chance after casting an ability to cast it again. This chance increases with more Mages.","sets":[3,6]},{"name":"Mountain","description":"Deploying multiple Mountain champions grants a massive shield to a random ally at the start of combat.","sets":[2]},{"name":"Mystic","description":"Deploying multiple Mystics grants all allies magic resist, increasing with more Mystics.","sets":[2,4]},{"name":"Ocean","description":"Deploying multiple Ocean champions periodically grants allies mana. The amount increases with more Ocean champions.","sets":[2,4,6]},{"name":"Poison","description":"Deploying mutliple Poison champions causes their damaging attacks and abilities to increase the mana costs of their targets\' abilities.","sets":[3]},{"name":"Predator","description":"Deploying multiple Predators causes their attacks and abilities to immediately kill low-health enemies.","sets":[3]},{"name":"Ranger","description":"Deploying multiple Rangers periodically grants them a chance to gain a burst of attack speed, increasing with more Rangers.","sets":[2,4,6]},{"name":"Shadow","description":"Deploying multiple Shadow champions causes them to deal increased damage for the first few seconds of combat, as well as for a few seconds when they score a takedown. Deploying more Shadow champions causes all of them to deal increased damage when any of them score a takedown.","sets":[2,4]},{"name":"Steel","description":"Deploying multiple Steel champions causes them to briefly become immune to damage when they drop below 50% health.","sets":[2,3,4]},{"name":"Summoner","description":"Deploying multiple Summoners increases the health and duration of their spawned allies, increasing with more Summoners. Summoners\' pets benefit from Element and Class bonuses, but don\'t count as additional units toward activiating higher levels of those bonuses.","sets":[3,6]},{"name":"Warden","description":"Deploying multiple Wardens grants them armor, increasing with more Wardens.","sets":[2,4,6]},{"name":"Woodland","description":"Deploying multiple Woodland champions causes one of them to randomly create a clone of themselves (including items) at the start of combat.","sets":[3]}]')},function(e,t,a){"use strict";a.r(t),function(e){var t=a(3),i=a(20),n=a(21),s=a(22),r=function(e){var t={},a=!0,i=!1,n=void 0;try{for(var s,r=e[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var o=s.value;t[o.champion]={cost:o.cost,traits:o.traits}}}catch(c){i=!0,n=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}return t};e.exports={createCombination:function(e){for(var t=function(e){var t={},a=!0,n=!1,s=void 0;try{for(var r,o=i[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var c=r.value,l=!0,m=!1,h=void 0;try{for(var p,d=c.traits[Symbol.iterator]();!(l=(p=d.next()).done);l=!0){var u=p.value;t[u]?t[u].push(c.champion):t[u]=[c.champion]}}catch(g){m=!0,h=g}finally{try{l||null==d.return||d.return()}finally{if(m)throw h}}}}catch(g){n=!0,s=g}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}return t}(),a=[],n=0,r=0,o=Object.keys(e);r<o.length;r++){var c=o[r];a.push([]);for(var l=s.combination(t[c],e[c]),m=l;m=l.next();)a[n].push(m);n+=1}return a},createComposition:function(e){for(var a=e.length,i=0;i<a-1;i++){var n=[],s=!0,r=!1,o=void 0;try{for(var c,l=e[i][Symbol.iterator]();!(s=(c=l.next()).done);s=!0){for(var m=c.value,h=0;h<e[i+1].length;h++){var p=[].concat(Object(t.a)(m),Object(t.a)(e[i+1][h])),d=Object(t.a)(new Set(p));n.push(d)}e[i+1]=n}}catch(u){r=!0,o=u}finally{try{s||null==l.return||l.return()}finally{if(r)throw o}}e[i+1]=n}return e[e.length-1]},traitCheck:function(e){var t={},a=[],s=r(i),o=function(e){var t={},a=!0,i=!1,n=void 0;try{for(var s,r=e[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var o=s.value;t[o.name]={};var c=!0,l=!1,m=void 0;try{for(var h,p=o.sets[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value;t[o.name][d]=1}}catch(u){l=!0,m=u}finally{try{c||null==p.return||p.return()}finally{if(l)throw m}}}}catch(u){i=!0,n=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}return t}(n),c=!0,l=!1,m=void 0;try{for(var h,p=e[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value,u=0,g=!0,y=!1,f=void 0;try{for(var v,w=d[Symbol.iterator]();!(g=(v=w.next()).done);g=!0){var b=v.value,D=!0,k=!1,S=void 0;try{for(var A,M=s[b].traits[Symbol.iterator]();!(D=(A=M.next()).done);D=!0){var O=A.value;t[O]=t[O]+1||1}}catch(C){k=!0,S=C}finally{try{D||null==M.return||M.return()}finally{if(k)throw S}}}}catch(C){y=!0,f=C}finally{try{g||null==w.return||w.return()}finally{if(y)throw f}}for(var B in t){var x=Object.keys(o[B]);t[B]>=x[0]&&(u+=1)}a.push([{team:d,traits:t,synergies:u}]),t={}}}catch(C){l=!0,m=C}finally{try{c||null==p.return||p.return()}finally{if(l)throw m}}return a.sort((function(e,t){return t[0].synergies-e[0].synergies}))}}}.call(this,a(19)(e))},,function(e){e.exports=JSON.parse('[{"champion":"Aatrox","cost":3,"traits":["Light","Blademaster"]},{"champion":"Annie","cost":4,"traits":["Inferno","Summoner"]},{"champion":"Ashe","cost":4,"traits":["Crystal","Ranger"]},{"champion":"Azir","cost":3,"traits":["Desert","Summoner"]},{"champion":"Ammumu","cost":5,"traits":["Inferno","Warden"]},{"champion":"Brand","cost":4,"traits":["Inferno","Mage"]},{"champion":"Braum","cost":2,"traits":["Glacial","Warden"]},{"champion":"Diana","cost":1,"traits":["Inferno","Assassin"]},{"champion":"DrMundo","cost":3,"traits":["Poison","Berserker"]},{"champion":"Ezreal","cost":3,"traits":["Glacial","Ranger"]},{"champion":"Ivern","cost":1,"traits":["Woodland","Druid"]},{"champion":"Janna","cost":4,"traits":["Cloud","Mystic"]},{"champion":"Jax","cost":2,"traits":["Light","Berserker"]},{"champion":"KhaZix","cost":4,"traits":["Desert","Assassin"]},{"champion":"Kindred","cost":3,"traits":["Shadow","Inferno"]},{"champion":"KogMaw","cost":1,"traits":["Poison","Predator"]},{"champion":"LeBlanc","cost":2,"traits":["Woodland","Assassin"]},{"champion":"Malphite","cost":4,"traits":["Mountain","Warden"]},{"champion":"Malzahar","cost":2,"traits":["Shadow","Summoner"]},{"champion":"Maokai","cost":1,"traits":["Woodland","Druid"]},{"champion":"MasterYi","cost":5,"traits":["Shadow","Mystic","Blademaster"]},{"champion":"Nami","cost":5,"traits":["Ocean","Mystic"]},{"champion":"Nasus","cost":1,"traits":["Light","Warden"]},{"champion":"Nautilus","cost":3,"traits":["Ocean","Warden"]},{"champion":"Neeko","cost":2,"traits":["Woodland","Druid"]},{"champion":"Nocturne","cost":3,"traits":["Steel","Assassin"]},{"champion":"Olaf","cost":4,"traits":["Glacial","Berserker"]},{"champion":"Ornn","cost":1,"traits":["Electric","Warden"]},{"champion":"RekSai","cost":2,"traits":["Steel","Predator"]},{"champion":"Renekton","cost":1,"traits":["Desert","Berserker"]},{"champion":"Singed","cost":5,"traits":["Poison","Alchemist"]},{"champion":"Sion","cost":3,"traits":["Shadow","Berserker"]},{"champion":"Sivir","cost":3,"traits":["Desert","Blademaster"]},{"champion":"Skarner","cost":2,"traits":["Crystal","Predator"]},{"champion":"Soraka","cost":3,"traits":["Light","Mystic"]},{"champion":"Syndra","cost":2,"traits":["Ocean","Mage"]},{"champion":"Taliyah","cost":1,"traits":["Mountain","Mage"]},{"champion":"Taric","cost":5,"traits":["Crystal","Warden"]},{"champion":"Thresh","cost":2,"traits":["Ocean","Warden"]},{"champion":"Twitch","cost":4,"traits":["Poison","Ranger"]},{"champion":"Varus","cost":2,"traits":["Inferno","Ranger"]},{"champion":"Vayne","cost":1,"traits":["Light","Ranger"]},{"champion":"Veigar","cost":3,"traits":["Shadow","Mage"]},{"champion":"Vladimir","cost":1,"traits":["Ocean","Mage"]},{"champion":"Volibear","cost":2,"traits":["Glacial","Electric"]},{"champion":"Warwick","cost":1,"traits":["Glacial","Predator"]},{"champion":"Yasuo","cost":2,"traits":["Cloud","Blademaster"]},{"champion":"Yorick","cost":4,"traits":["Light","Summoner"]},{"champion":"Zed","cost":5,"traits":["Electric","Summoner","Assassin"]},{"champion":"Zyra","cost":1,"traits":["Inferno","Summoner"]}]')},function(e){e.exports=JSON.parse('[{"name":"Alchemist","innate":"Alchemists move through other units and never stop moving.","sets":[1]},{"name":"Assassin","innate":"Assassins sneak across the battlefield at the start of combat, placing themselves opposite from where they started.","description":"Deploying multiple Assassins grant them critical strike chance and increased critical strike damage, increasing with more Assassins.","sets":[3,6]},{"name":"Avatar","description":"An Avatar\'s element is counted twice for trait bonuses.","sets":[1]},{"name":"Berserker","innate":"At the start of combat, Berserkers leap to the nearest enemy.","description":"Deploying multiple Berserkers grants their attacks a chance to deal damage in a cone behind the target. The chance increases with more Berserkers.","sets":[3,6]},{"name":"Blademaster","description":"Deploying multiple Blademasters grants their attacks a chance to hit extra times, increasing with more Blademasters.","sets":[2,4,6]},{"name":"Cloud","description":"Deploying multiple Cloud champions grants your team dodge change. The dodge chance increases if more Cloud champions are deployed.","sets":[2,3,4]},{"name":"Crystal","description":"Deploying multiple Crystal champions grants them a maximum amount of damage they can take from a single attack or ability hit.","sets":[2,4]},{"name":"Desert","description":"Deploying multiple Desert champions reduces the enemy team\'s armor. The reduction increases if more Desert champions are deployed.","sets":[2,4]},{"name":"Druid","description":"Deploying two Druids grants all Druids health regeneration.","sets":[2]},{"name":"Electric","description":"Deploying multiple Electric champions causes them to damage adjacent enemies whenever they critically strike or are critically struck.","sets":[2,3,4]},{"name":"Glacial","description":"Deploying multiple Glacial champions grants their attacks a chance to stun their target, increasing with more Glacials.","sets":[2,4,6]},{"name":"Inferno","description":"Deploying multiple Inferno champions causes their abilities to temporarily ignite the ground beneath their targets, damaging enemies standing in the fire. Damage increases with more Inferno champions.","sets":[3,6,9]},{"name":"Light","description":"Deploying multiple Light champions causes them to, on death, heal other Light champions for a percentage of their max health and grant them attack speed for the remainer of the round (stacking with multiple Light champion deaths). Heal and attack speed increse with more Light champions.","sets":[3,6,9]},{"name":"Mage","description":"Deploying multiple Mages grants them a chance after casting an ability to cast it again. This chance increases with more Mages.","sets":[3,6]},{"name":"Mountain","description":"Deploying multiple Mountain champions grants a massive shield to a random ally at the start of combat.","sets":[2]},{"name":"Mystic","description":"Deploying multiple Mystics grants all allies magic resist, increasing with more Mystics.","sets":[2,4]},{"name":"Ocean","description":"Deploying multiple Ocean champions periodically grants allies mana. The amount increases with more Ocean champions.","sets":[2,4,6]},{"name":"Poison","description":"Deploying mutliple Poison champions causes their damaging attacks and abilities to increase the mana costs of their targets\' abilities.","sets":[3]},{"name":"Predator","description":"Deploying multiple Predators causes their attacks and abilities to immediately kill low-health enemies.","sets":[3]},{"name":"Ranger","description":"Deploying multiple Rangers periodically grants them a chance to gain a burst of attack speed, increasing with more Rangers.","sets":[2,4,6]},{"name":"Shadow","description":"Deploying multiple Shadow champions causes them to deal increased damage for the first few seconds of combat, as well as for a few seconds when they score a takedown. Deploying more Shadow champions causes all of them to deal increased damage when any of them score a takedown.","sets":[2,4]},{"name":"Steel","description":"Deploying multiple Steel champions causes them to briefly become immune to damage when they drop below 50% health.","sets":[2,3,4]},{"name":"Summoner","description":"Deploying multiple Summoners increases the health and duration of their spawned allies, increasing with more Summoners. Summoners\' pets benefit from Element and Class bonuses, but don\'t count as additional units toward activiating higher levels of those bonuses.","sets":[3,6]},{"name":"Warden","description":"Deploying multiple Wardens grants them armor, increasing with more Wardens.","sets":[2,4,6]},{"name":"Woodland","description":"Deploying multiple Woodland champions causes one of them to randomly create a clone of themselves (including items) at the start of combat.","sets":[3]}]')},,,,,function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(2),r=a.n(s),o=a(0),c=a(8),l=a(5),m=(a(16),a(10)),h=a(17),p=a(18),d=p.createCombination,u=p.createComposition,g=p.traitCheck;var y=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(i.useState)({}),p=Object(l.a)(r,2),y=p[0],f=p[1],v=Object(i.useState)(),w=Object(l.a)(v,2),b=w[0],D=w[1];return n.a.createElement("div",{className:"App"},n.a.createElement("section",{className:"hero-section"},n.a.createElement("h1",null,"Team Fighter Tactics Composition Builder"),n.a.createElement("h3",null,"Total Synergys: ",a),n.a.createElement("section",{className:"trait-section"},h.map((function(e){var t=e.sets;return n.a.createElement("div",{className:"traitOption"},n.a.createElement("label",{htmlFor:"traitName"},e.name,n.a.createElement(m.a,{value:e.name,options:e.sets,onChange:function(t){return function(e,t){s(a+1),f((function(a){return Object(c.a)({},a,Object(o.a)({},t,e))}))}(t,e.name)},placeholder:"Please choose a number"}),n.a.createElement("option",{value:""},"Please choose a number"),t.map((function(e){return n.a.createElement("option",{value:"".concat(e)},e)}))))})))),n.a.createElement("button",{onClick:function(){return function(){var e=d(y),t=u(e),a=g(t).slice(0,10);D(a)}()}},"Get Team"),n.a.createElement("section",{className:"team-display"},n.a.createElement("h2",null,"Your Team"),b&&b.map((function(e){return e.map((function(e){return n.a.createElement("div",{style:{color:"black",textAlign:"center",marginBottom:"10px"}},e.team.join(" "))}))}))))};a(25);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9d40ec46.chunk.js.map