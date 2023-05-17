
function updateDisplay(display) {
    switch (display) {
        case "points":
            if (currency < 1e12 || currency > 1e21) {
                document.getElementById("display-currency").innerHTML = `Points: ${currency}`;
            } else {
                document.getElementById("display-currency").innerHTML = `Points: ${toScientificNotation(currency, 6)} (${currency})`;
            }
        break;

        case "super_points":
            if (super_points < 1e12 || super_points > 1e21) {
                document.getElementById("display-super-points").innerHTML = `Super Points: ${super_points}`;
            } else {
                document.getElementById("display-super-points").innerHTML = `Super Points: ${toScientificNotation(super_points, 6)} (${super_points})`;
            }
        break;

        case "mega_points":
            if (mega_points < 1e12 || mega_points > 1e21) {
                document.getElementById("display-mega-points").innerHTML = `Mega Points: ${mega_points}`;
            } else {
                document.getElementById("display-mega-points").innerHTML = `Mega Points: ${toScientificNotation(mega_points, 6)} (${mega_points})`;
            }
        break;

        case "cosmic_points":
            if (cosmic_points < 1e12 || cosmic_points > 1e21) {
                document.getElementById("display-cosmic-points").innerHTML = `Cosmic Points: ${cosmic_points}`;
            } else {
                document.getElementById("display-cosmic-points").innerHTML = `Cosmic Points: ${toScientificNotation(cosmic_points, 6)} (${cosmic_points})`;
            }
        break;

        case "density":
            console.log("a");
        break;

        case "agility":
            player.agility = shop0.up2; //can change
            document.getElementById("display-agility").innerHTML = `Agility: ${player.agility}`;
        break;
        case "talent":
        case "talents":
            player.knowledge.talents.exp += player.knowledge.wisdom.level;
            while (player.knowledge.talents.exp >= player.knowledge.talents.ciel) {
                player.knowledge.talents.points++;
                player.knowledge.talents.level++;
                player.knowledge.talents.exp -= player.knowledge.talents.ciel;
                player.knowledge.talents.ciel = Math.round((player.knowledge.talents.ciel * 1.01) * ((Math.log10(Math.pow(player.knowledge.talents.ciel, 1/player.knowledge.talents.scaling))) + 1));
				if (player.knowledge.talents.level % 10 == 0) {player.knowledge.talents.ciel *= 2}
				if (player.knowledge.talents.level % 100 == 0) {player.knowledge.talents.ciel *= 5}
            }
            document.getElementById("display-talent-points").innerHTML = `| Talent Points: ${player.knowledge.talents.points}`;
            document.getElementById("display-talent-levels").innerHTML = `Talent Levels: ${player.knowledge.talents.level}`;
            let percent = Math.round((player.knowledge.talents.exp / player.knowledge.talents.ciel) * 100);
            document.getElementById("talent-bar").style.width = `${percent}%`;
            document.getElementById("talent-bar").innerHTML = `${player.knowledge.talents.exp}/${player.knowledge.talents.ciel}(${percent}%)`;
        break;
    }
}
// function updateDisplayAdvanced(id, template, variable, type, modifier, modifier2) {
//     /*
//     Type: 1 = display {points: 12321}; 
//     Type: 2 = upgrade {upgrade (123123)};
//         Modifier: {undefined} = normal;
//         Modifier: {defined} = two variables {autoclick Power [5] (13123)} modifier = 1st variable
//             Modifier2: {undefined} = normal
//             Modifier2: 1 = [x]
//     */
//     /* if (variable < 1e12 || variable > 1e21) {
//         switch (type) {
//             default:
//             case 1: //1
//                 document.getElementById(id).innerHTML = `${template}${variable}`;
//                 break;
//             case 2:
//                 if (modifier) {
//                     if (modifier2) {
//                         document.getElementById(id).innerHTML = `${template}[${modifier}${modifier2}] (${variable})`;
//                     } else {
//                         document.getElementById(id).innerHTML = `${template}[${modifier}] (${variable})`;
//                     }
//                 } else {
//                     document.getElementById(id).innerHTML = `${template}(${toScientificNotation(variable, 6)}) (${variable})`;
//                 }
//                 break;
//         }
//     } else { */
//         switch (type) {
//             default:
//             case 1: //1
//                 document.getElementById(id).innerHTML = `${template}${variable}`;
//                 break;
//             case 2:
//                 if (modifier != undefined) {
//                     if (modifier2 != undefined) {
//                         document.getElementById(id).innerHTML = `${template}[${modifier}${modifier2}] (${variable})`;
//                     } else {
//                         document.getElementById(id).innerHTML = `${template}[${modifier}] (${variable})`;
//                     }
//                 } else {
//                     document.getElementById(id).innerHTML = `${template}(${variable}) (${variable})`;
//                 }
//                 break;
//         }
//     }
//}
const display = {
    displays: [
        {
            name: "currency",
            value: (id, currencyName, currencyValue) => {
                if (typeof id == "string" ) id = document.getElementById(id);
                /*test*/console.log(`${currencyName}: ${currencyValue.format()}`);
                id.innerHTML = `${currencyName}: ${currencyValue.format()}`;
            }
        },
        {
            name: "gain",
            value: (id, currencyName, gainValue) => {
                if (typeof id == "string" ) id = document.getElementById(id);
                /*test*/console.log(`Gain: ${gainValue.format()}`);
                id.innerHTML = `${gainValue.format()}`;
            }
        }
    ],
    update: (input) => {
        for (let x of display.displays) {
            if (input == x.name) {
                return x.value;
            } else {
                continue;
            }
        }
        throw("Invalid Type");
    },
    // update: {
    //     simple: () => {

    //     },
    //     advanced: (id, template) => {
    //         if(typeof id == "string") id = document.getElementById(id);
            
    //         id.innerHTML = template;
    //     }
    // }
}
const popupHandler = {
    stats: () => {
        const popup = document.getElementById("statsPopup");
        popup.classList.toggle("show");
    },
    talents: {
        tree: {
            open: () => {
                document.getElementById("talent-tree-div").style.display = "block";
            },
            close: () => {
                document.getElementById("talent-tree-div").style.display = "none";
            },
            create: function(id, positionx, positiony, req, cost, displayTitle, title, description, maxLvl, hierarchy, purchaseHandler) {
                const element = document.createElement("button");
                document.getElementById(req).appendChild(element);
                element.id = id;
                element.className = "skillTree";

                element.style.gridRowStart = positiony;
                element.style.gridRowEnd = positiony;
                
                element.style.gridColumnStart = positionx;
                element.style.gridColumnEnd = positionx;

                element.innerHTML = displayTitle;
                
                if (hierarchy != undefined) {
                    player.knowledge.talents.tree[hierarchy] = {};
                    player.knowledge.talents.tree[hierarchy]["lvl"] = 0;
                    player.knowledge.talents.tree[hierarchy]["maxLvl"] = maxLvl;
                    player.knowledge.talents.tree[hierarchy]["cost"] = cost;
                    player.knowledge.talents.tree[hierarchy]["title"] = title;
                    player.knowledge.talents.tree[hierarchy]["description"] = description;
                    player.knowledge.talents.tree[hierarchy]["purchase"] = function() {
                        if (player.knowledge.talents.tree.points >= this["cost"] && this["lvl"] < this["maxLvl"]) {
                            player.knowledge.talents.tree.points -= this["cost"];
                            this["level"]++;
                            purchaseHandler();
                            return this["level"];
                        }
                        return 0;
                    }
                    element.onclick = function() {
                        
                    }
                } else {
                    player.knowledge.talents.tree[id] = {};
                    player.knowledge.talents.tree[id]["lvl"] = 0;
                    player.knowledge.talents.tree[id]["maxLvl"] = maxLvl;
                    player.knowledge.talents.tree[id]["cost"] = cost;
                    player.knowledge.talents.tree[id]["title"] = title;
                    player.knowledge.talents.tree[id]["description"] = description;
                    // player.talents.tree[id]["purchase"] = popupHandler.talents.tree.purchase;
                    player.knowledge.talents.tree[id]["purchase"] = function() {
                        if (player.knowledge.talents.tree.points >= this["cost"] && this["lvl"] < this["maxLvl"]) {
                            player.knowledge.talents.tree.points -= this["cost"];
                            this["level"]++;
                            purchaseHandler();
                            return this["level"];
                        }
                        return 0;
                    }
                }
            },
        },
    },
}