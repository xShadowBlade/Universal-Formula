/*
Hello Person of technical knowledge. Admire my spaggheti code lol. :V
I should probally add more comments but too late I guess
*/
const sleep = ms => new Promise(r => setTimeout(r, ms)); //Sleep (that i stole off of the internet lol)
let i = 0; //Loop (so I dont have to declare later)
// let autoclick_stop = 0;
// let charge_stop = 0;
console.log("Hello There");
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
// }
// function toScientificNotation(number, precision) {
//     let input;
//     if (typeof(number) == "number") {
//         input = number.toString();
//     } else {
//         throw "toScientificNotation(): number not valid for operation <number.toString()>";
//     }
//     let digits = input.length - 1;
//     let leadDigits = "";
//     if (precision) {
//         for (i = 0; i < precision; i++) {
//             leadDigits += input[i];
//             if (leadDigits.length == 1) {
//                 leadDigits += ".";
//             }
//         }
//     } else {
//         for (i = 0; i < input.length; i++) {
//             leadDigits += input[i];
//             if (leadDigits.length == 1) {
//                 leadDigits += ".";
//             }
//         }
//     }
//     return `${leadDigits}e+${digits}`;
// }
// formatWithCommas = function(num, decimal) {//Courtesy of Universal Paperclips
//     var hasDot = false;
//     var base = num.toString();
//     if (base.indexOf("e+") !== -1) {
//     var splittedExponentNum = base.split("e+"),
//         exponent = splittedExponentNum[1],
//         str = '';
//         if (base.indexOf(".") !== -1){
//         base = splittedExponentNum[0].split(".");
//         exponent -= base[1].length;
//         base = base.join("");
//         }
//     while (exponent--) {
//         str = str + '0';
//         }
//         base = base + str;
//     }
//     if (base.indexOf(".") !== -1)
//     {
//         hasDot = true;
//     }
//     if (decimal === 0)
//     {
//         if (base.length <= 3 && !hasDot) return base;
//     }
//     if (typeof (decimal) === "undefined")
//     {   
//         decimal = 0;
//     }
//     var leftNum = hasDot ? base.substr(0, base.indexOf(".")) : base;
//     if (decimal === 0) {
//         if (num <= 999) return leftNum; 
//         else return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
//     } 
//     var dec = hasDot ? base.substr(base.indexOf("."), decimal + 1) : ".";
//     while (dec.length < decimal+1)
//         {
//          dec += "0";   
//         }
//         if (num <= 999) return leftNum + dec;
//         else return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + dec;   
// }
/*
Points < Super Points < Mega Points < Cosmic Points < Galactic Points < Godly Points < Celestial Points = Infinites (beat the game)
Fight mechanic turn all points into coins which can be used for gear
liquidate: turn all points into tokens for fight mechanic
cast: turn tokens into coins
forge: turn coins into bronze
temper: turn bronze into gold
solidify: turn gold into diamond
tokens < coins < bronze < gold < diamond
convert diamonds into 
*/
// let toYearTimeMul = [
//     1000, //second
//     60, //minute
//     60, //hours
//     24, //days
//     365, //year
// ];
// let toYearTime = [];
// function toYearSetup() {
//     let a = 1;
//     for (i = 0; i < toYearTimeMul.length; i++) {
//         a *= toYearTimeMul[i];
//         toYearTime[i] = a;
//     }
// }
// toYearSetup();
const Game = {
    functions: {
        start: {},
        startF: () => Object.values(Game.functions.start).forEach((item) => item()),
        loop: {},
        loopF: (dt) => Object.values(Game.functions.loop).forEach((item) => item(dt)),

        timewarp: t => Game["data"].playtime.timewarp = E(t),
    },
    format: {
        metric: function(num, type) {
            num = E(num);
            const abb = [
                {
                    name: "K",
                    altName: "Kilo",
                    value: E("1000")
                },
                {
                    name: "M",
                    altName: "Mega",
                    value: E("1e6")
                },
                {
                    name: "G",
                    altName: "Giga",
                    value: E("1e9")
                },
                {
                    name: "T",
                    altName: "Tera",
                    value: E("1e12")
                },
                {
                    name: "P",
                    altName: "Peta",
                    value: E("1e15")
                },
                {
                    name: "E",
                    altName: "Exa",
                    value: E("1e18")
                },
                {
                    name: "Z",
                    altName: "Zetta",
                    value: E("1e21")
                },
                {
                    name: "Y",
                    altName: "Yotta",
                    value: E("1e24")
                },
                {
                    name: "R",
                    altName: "Ronna",
                    value: E("1e27")
                },
                {
                    name: "Q",
                    altName: "Quetta",
                    value: E("1e30")
                }
            ];
            for (i = 0; i < abb.length; i++) {
                if (num.greaterThanOrEqualTo(abb[i]["value"])) {
                    if (i == abb.length - 1) {
                        switch(type) {
                            case 1:
                                return abb[i]["name"];
                            break;
                            case 2:
                                return `${num.divide(abb[i]["value"]).format()}`;
                            break;
                            case 3:
                                return abb[i]["altName"];
                            break;
                            case 0:
                            default:
                                return `${num.divide(abb[i]["value"]).format()} ${abb[i]["name"]}`;
                            break;
                        }
                    }
                    continue;
                } else {
                    if (i == 0) {
                        switch(type) {
                            case 1:
                                return "";
                            break;
                            case 2:
                            case 0:
                            default:
                                return num.format();
                            break;
                        }
                    } else {
                        switch(type) {
                            case 1:
                                return abb[i - 1]["name"];
                            break;
                            case 2:
                                return `${num.divide(abb[i - 1]["value"]).format()}`;
                            break;
                            case 3:
                                return abb[i - 1]["altName"];
                            break;
                            case 0:
                            default:
                                return `${num.divide(abb[i - 1]["value"]).format()} ${abb[i - 1]["name"]}`;
                            break;
                        }
                    }
                }
            }
        },
        eV: function(num, c2 = Game.settings.c2) {
            return `${this.metric(num, 2)} ${this.metric(num, 1)}eV${c2 ? "/c^2" : ""}`
        },
    },
    classes: {
        obb: class {
            constructor(array, methods) { //syntax ex. [{name: "a", properties: {boost: ""}}, {}]
                for (let x of array) {
                    //console.log(x); debug
                    
                    if (!x["name"] || !x["properties"]) {break;}
                    this[x["name"]] = x["properties"];
                    ///console.log(x, x["name"], x["properties"]); debug
                    if (methods != undefined) {
                        for (let y of methods) {
                            if (!y["name"] || !y["value"]) {break;}
                            //console.log([y, y["name"], y["value"]]); debug
                            if (!this[x["name"]][y["name"]]) this[x["name"]][y["name"]] = y["value"];
                            //delete(this[y["name"]]["name"]);
                            //delete(this[y["name"]]["value"]);
                        }
                    }
                    delete(this[x["name"]]["name"]);
                    delete(this[x["name"]]["properties"]);

                    
                }
                
            };
        },
        grid: class {
            constructor(x_size, y_size) {
                /*new Game.classes.grid(5, 5)
                */
                this.x_size = x_size;
                this.y_size = y_size;
                for (let a = 0; a < y_size; a++) {
                    this[a] = [];
                    for (let b = 0; b < x_size; b++) { //iterates through every cell
                        this[a][b] = new Game.classes.gridCell(b, a);
                    }
                }
            }
            all() {
                let output = [];
                for (let a = 0; a < this.y_size; a++) {
                    for (let b = 0; b < this.x_size; b++) { //iterates through every cell
                        output.push(this[a][b]);
                    }
                }
                return output;
            }
            allX(x) {
                let output = [];
                for (i = 0; i < this.y_size; i++) {
                    output.push(this[i][x])
                }
                return output;
            }
            allY(y) {
                let output = [];
                for (i = 0; i < this.x_size; i++) {
                    output.push(this[y][i])
                }
                return output;
            }
            getCell(x, y) {
                return(this[y][x]);
            }
            getAdjacent(x, y) {
                let output = [];
                output[0] = this.getCell(x, y + 1);
                output[1] = this.getCell(x + 1, y);
                output[2] = this.getCell(x, y - 1);
                output[3] = this.getCell(x - 1, y + 1);
                return output;
            }
            getDiagonal(x, y) {
                let output = [];
                output[0] = this.getCell(x - 1, y + 1);
                output[1] = this.getCell(x + 1, y + 1);
                output[2] = this.getCell(x + 1, y - 1);
                output[3] = this.getCell(x - 1, y - 1);
                return output;
            }
            getEncircling(x, y) {
                return this.getAdjacent(x, y).concat(this.getDiagonal(x, y));
            }
        },
        gridCell: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            setValue(name, value) {
                this[name] = value;
                return value;
            }
            getDistance(x,y) {
                return Math.abs(Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)))
            }
        },
        boost: class {
            constructor(baseEffect, ...boosts) {
                this.boost = boosts;
                this.baseEffect = baseEffect;
                /*ex.
                new boost({
                    id: "reallyCoolBoost124",
                    name: "buff this",
                    desc: "really cool lol",
                    type: "add",
                    value: E(124),
                },
                {
                    (...)
                })
                */
            };
            bGet(id) {
                let output = null;
                for (i = 0; i < this.boost.length; i++) {
                    if (i == this.boost.length) break;
                    if (id == this.boost[i].id) { 
                        output = this.boost[i];
                        output["index"] = i;
                    }
                }
                return output;
            };
            bRemove(id) { delete this.bGet(id) }
            bSet(id, name, desc, type, value) {
                let bCheck = this.bGet(id);
                if (!bCheck) {
                    this.boost.push({
                        "id": id,
                        "name": name,
                        "desc": desc,
                        "type": type,
                        "value": value,
                    });
                } else {
                    bCheck = {
                        "id": id,
                        "name": name,
                        "desc": desc,
                        "type": type,
                        "value": value,
                    }
                }
            };
            bSetAdvanced(...x) {
                for (i = 0; i < x.length; i++) {
                    if (!this.bGet(x[i].id)) {
                        this.boost = this.boost.concat(x[i]);
                    } else {
                        console.log(i);
                        this.boost[this.bGet(x[i].id).index] = x[i]
                    }
                }
                
            };
            calculate(base = this.baseEffect) {
                let output = E(base);
                let listOfBoosts = [ //also in the order that they will be applied
                    {
                        name: ["add", "plus"],
                        value: (x1, x2) => E(x1).plus(E(x2)),
                    },
                    {
                        name: ["sub", "subtract", "minus"],
                        value: (x1, x2) => E(x1).minus(E(x2)),
                    },
                    {
                        name: ["mul", "multiply", "times"],
                        value: (x1, x2) => E(x1).times(E(x2)),
                    },
                    {
                        name: ["div", "divide", "over", "divided", "divide by", "divided by"],
                        value: (x1, x2) => E(x1).divide(E(x2)),
                    },
                    {
                        name: ["pow", "power", "exp", "exponent", "exponentiate"],
                        value: (x1, x2) => E(x1).pow(E(x2)),
                    },
                    {
                        name: ["log", "logarithm"],
                        value: (x1, x2) => E(x1).log(E(x2)),
                    },
                    {
                        name: ["tetr", "tetrate"],
                        value: (x1, x2) => E(x1).tetrate(E(x2)),
                    },
                    {
                        name: ["slog"],
                        value: (x1, x2) => E(x1).slog(E(x2)),
                    },
                    {
                        name: ["pent", "pentate"],
                        value: (x1, x2) => E(x1).pentate(E(x2)),
                    }
                ];
                for(i = 0; i < listOfBoosts.length; i++) { //iterate through the array and add the "item" property
                    listOfBoosts[i] = Object.assign(listOfBoosts[i], {
                        items: [],
                    });
                }
                this.boost.forEach((item) => { //sort it
                    for(i = 0; i < listOfBoosts.length; i++) { //compare each entry
                        for(let j = 0; j < listOfBoosts[i].name.length; j++) {
                            if (item.type.toLowerCase() == listOfBoosts[i].name[j].toLowerCase()) {
                                listOfBoosts[i].items.push(item);
                            }
                        }
                    }
                });
                listOfBoosts.forEach((item) => { //actually calc the boost now
                    if (item.items.length > 0) {
                        item.items.forEach((item2) => {
                            output = item.value(output, item2.value);
                        });
                    }
                });
                return output;
            };
        },

        currencyLayer: class {
            constructor(array) { //syntax ex. [{name: "a", properties: {boost: ""}}, {}]
                for (let x of array) {
                    //console.log(x); debug
                    if (!x["name"] || !x["properties"]) {break;}
                    if (x["name"] == "currencies") {
                        this.currencies = x["properties"];
                        delete(this[x["name"]]["name"]);
                        delete(this[x["name"]]["properties"]);
                        continue;
                    }
                    if (x["name"] == "upgrades" || x["name"] == "upgs") {
                        this.upgrades = x["properties"];
                        delete(this[x["name"]]["name"]);
                        delete(this[x["name"]]["properties"]);
                        continue;
                    }   
                }
            }  
            static methods = { //more like defaults but too late
                currencies: function() {
                    return([
                    // {
                    //     name: "updateDisplay",
                    //     value: function() {
                    //         let displayType;
                    //         let formatType;
                    //         let outlineType;
                    //         if (this.staticPointer().functionArgs.updateDisplay) {
                    //             displayType = this.staticPointer().functionArgs.updateDisplay[0]; 
                    //             formatType = this.staticPointer().functionArgs.updateDisplay[1];
                    //             outlineType = this.staticPointer().functionArgs.updateDisplay[2];
                    //         }
                            
                    //         let outline;
                    //         switch(outlineType) { 
                    //             case 1:
                    //             default:
                    //                 outline = (a, b) => `${a}: ${b} ${this.value.formatGain(this.boost.calculate())}`;
                    //             break;
                    //         }

                    //         let firstValue;
                    //         switch(displayType) { 
                    //             case 1:
                    //             default:
                    //                 firstValue = this.staticPointer().displayName;
                    //             break;
                    //         }

                    //         let secondValue;
                    //         switch(formatType) { 
                    //             case "eV":
                    //             case "ev":
                    //                 secondValue = Game.format.eV(this.value);
                    //             break;
                    //             case 1:
                    //             default:
                    //                 secondValue = this.value.format();
                    //             break;
                    //         }
                    //         this.staticPointer().display.innerHTML = outline(firstValue, secondValue);
                    //     }
                    // },
                    {
                        name: "boost",
                        value: new Game.classes.boost(1),
                    },
                    {
                        name: "value",
                        value: E(),
                    },
                    // {
                    //     name: "gain",
                    //     value: function(dt) {
                    //         this.value = this.value.plus(this.boost.calculate().times(dt.div(1000)));
                    //     },
                    // }
                    ])
                },
                upgrades: function(costCurrencyPointer) {
                    return([
                    {
                        name: "buy",
                        value: function(amount) { //wip, need to account for cost scaling in check
                            if(this.cost.times(amount).lessThanOrEqualTo(this.costCurrencyPointer().value) && this.level.plus(amount).lessThan(this.mxLvl)) { //make sure you have enough currency and you are not buying more than max
                                this.costCurrencyPointer().value = this.costCurrencyPointer().value.minus(this.cost); //subtract currency
                                this.costCurrencyPointer().updateDisplay();
                                this.level = this.level.plus(amount); //increase level
                                
                                switch(this.costScalingType) {
                                    case "plus":
                                    case "add":
                                        this.cost = this.cost.plus(E(this.costScaling).times(amount));
                                    break;
                                    
                                    // case "sub":
                                    // case "subtract":
                                    // case "minus":
                                    //    this.cost = this.cost.plus(this.costScaling.times(amount));
                                    // break;
                                    
                                    case "mul":
                                    case "multiply":
                                        this.cost = this.cost.times(E(this.costScaling).pow(amount));
                                    break;
                                }
                                this.updateDisplay();
                                this.effect();
                                return this.level;
                            } else {
                                return 0;
                            }
                        }
                    },
                    {
                        name: "buyMax",
                        value: function() {

                        }
                    },
                    {
                        name: "updateDisplay",
                        value: function() {
                            this.display.innerHTML = `${this.displayName} [${this.level.toString()}/${this.mxLvl.toString()}] (${this.cost.round().toString()})`;
                        }
                    },
                    {
                        name: "costCurrencyPointer",
                        value: Function(`return ${costCurrencyPointer}`)
                    },
                    {
                        name: "level",
                        value: E()
                    },
                    {
                        name: "effectMult",
                        value: E("1")
                    }
                    ])
                },
                static: function() {
                    return([
                    {
                        name: "updateDisplay",
                        value: function() {
                            let displayType;
                            let formatType;
                            let outlineType;
                            if (this.functionArgs.updateDisplay) {
                                displayType = this.functionArgs.updateDisplay[0]; 
                                formatType = this.functionArgs.updateDisplay[1];
                                outlineType = this.functionArgs.updateDisplay[2];
                            }
                            
                            let outline;
                            switch(outlineType) { 
                                case 1:
                                default:
                                    outline = (a, b) => `${a}: ${b} ${this.value.formatGain(this.boost.calculate())}`;
                                break;
                            }

                            let firstValue;
                            switch(displayType) { 
                                case 1:
                                default:
                                    firstValue = this.displayName;
                                break;
                            }

                            let secondValue;
                            switch(formatType) { 
                                case "eV":
                                case "ev":
                                    secondValue = Game.format.eV(this.value);
                                break;
                                case 1:
                                default:
                                    secondValue = this.value.format();
                                break;
                            }
                            this.display.innerHTML = outline(firstValue, secondValue);
                        }
                    },
                    {
                        name: "gain",
                        value: function(dt) {
                            let type;
                            if (this.functionArgs.gain) {
                                type = this.functionArgs.updateDisplay[0]; 
                            }
                            this.dataPointer().value = this.value.plus(this.boost.calculate().times(dt / 1000));
                        },
                    }
                    ])
                }
            }
            init(dataCurrencyPointer) { //only call on static instance
                Object.values(dataCurrencyPointer.currencies).forEach((item) => {
                    // item.boost.baseEffect = item.staticPointer().functionArgs.boost ? item.staticPointer().functionArgs.boost : 1;
                    addLoopFunction(item.displayName, (dt) => {
                        item.gain(dt)
                        item.updateDisplay();
                    }); 

                })
            }
        },
    },
    settings: {
        framerate: 30,
        c2: false, //whether or not to display the "c^2" on formating eV
    },
    features: {}
}
function addLoopFunction(name, func) {Game["functions"].loop[name] = func}
function addStartFunction(name, func) {Game["functions"].start[name] = func}
addStartFunction("master", () => {
    console.log("window.onload");
    let loadingStart = Date.now();
    Game["version"] = "Indev 1.7-[0.4a]",
    Game["changelogs"] = {
        indev: [
            {
                name: "1.5",
                value: `
        Added:
            Changelogs,
            updateDisplay,
        Removed:
            Redundant display features    
        ${new Date("Thu Oct 06 2022 17:08:51 GMT-0400 (Eastern Daylight Time)")}`,
            },
            {
                name: "1.5a",
                value: `
        Added:
            A way to see changelogs
        ${new Date("Thu Oct 06 2022 17:53:32 GMT-0400 (Eastern Daylight Time)")}`
            },
            {
                name: "1.6",
                value: `
        Added:
            Object/Array parse,
            Modal
        ${new Date("Sat Oct 08 2022 12:25:00 GMT-0400 (Eastern Daylight Time)")}`
            },
            {
                name: "1.6a",
                value: `
        Added:
            Experimental blue quark stats/tier,
            Blue quark art t1-5,
            Some styling
        ${new Date("Sun Oct 09 2022 16:31:33 GMT-0400 (Eastern Daylight Time)")}`
            },
            {
                name: "1.7",
                value: `
        Added:
            Boosting system
            Updated quantum assembler
        ${new Date("Sat Dec 31 2022 16:43:51 GMT-0500 (Eastern Standard Time)")}`
            }
        ],
    },
    Game["key"] = eMath.string(6);
    Game["data"] = {
    
    playtime: { //in milliseconds
        tActive: E(),
        tPassive: E(),
        timewarp: E(),
        active: E(),
        passive: E(),
        points: E(),
        timeLastPlayed: E(),
        boost: new Game.classes.boost("1"),
    },
    
    mass: new Game.classes.currencyLayer([
        {
            name: "currencies",
            properties: new Game.classes.obb([
            {
                name: "quarks",
                properties: {
                }
            },
            {
                name: "atoms",
                properties: {
                    boostValue: function() {return this.value.times(1.5).plus(1)},
                }
            },
            {
                name: "particles",
                properties: {
                    boostValue: function() {return this.value.times(1.2).plus(1)},
                }
            },
            {
                name: "molecules",
                properties: {
                    boostValue: function() {return this.value.plus(1)},
                }
            },
            //big gap here
            {
                name: "moons",
                properties: {
                    displayName: "Moons",
                    boostValue: function() {return this.value.log(1.05).plus(1)},
                }
            },
            {
                name: "planets",
                properties: {
                    displayName: "Planets",
                    boostValue: function() {return this.value.log(1.1).plus(1)},
                }
            },
            { //constellation
                name: "stars",
                properties: {
                    displayName: "Stars",
                    boostValue: function() {return this.value.log(1.2).plus(1)},
                }
            },
            {
                name: "nebulae",
                properties: {
                    displayName: "Nebulae",
                    boostValue: function() {return this.value.log(1.2).plus(1)},
                }
            },
            {
                name: "galaxies",
                properties: {
                    displayName: "Galaxies",
                    boostValue: function() {return this.value.log(1.2).plus(1)},
                }
            },
            {
                name: "universes",
                properties: {
                    displayName: "Universes",
                    boostValue: function() {return this.value.log(1.2).plus(1)},
                }
            },
            /*
            How currencies above this work:
            (e^1000) = kiloverse (layer 1)
            (e^e^1000) = megaverse (layer 2)

            layer x = (e^...x...e^1000)
            */

        ], Game.classes.currencyLayer.methods.currencies())
        },
        {
            name: "upgrades",
            properties: new Game.classes.obb([
            {
                name: "points",
                properties: new Game.classes.obb([ //upgName, upgCostScaling, upgCostScalingType, upgCost, upgMxLvl, upgEffect)
                    {
                        name: "value",
                        properties: {
                            displayName: "Value",
                            display: document.getElementById("button-up-gain"),
                            costScaling: "3",
                            costScalingType: "multiply",
                            cost: E("10"),
                            mxLvl: E("1000"),
                            description: Function("return `Increases value by ${this.effectMult.toString()}x`"),
                            effect: function() {
                                
                            }
                        }
                    },
                    {
                        name: "speed",
                        properties: {
                            costScaling: "25",
                            costScalingType: "multiply",
                            cost: E("25"),
                            mxLvl: E("20"),
                            effect: function() {
                                
                            }
                        }
                    },
                ], Game.classes.currencyLayer.methods.upgrades("Game.data.points.currencies.points"))
            },
            {
                name: "superPoints",
                properties: new Game.classes.obb([ //upgName, upgCostScaling, upgCostScalingType, upgCost, upgMxLvl, upgEffect)
                    {
                        name: "pointsBoost1",
                        properties: {
                            costScaling: "3",
                            costScalingType: "multiply",
                            cost: E("50"),
                            mxLvl: E("1000"),
                            effect: function() {
                                
                            }
                        }
                    },
                    {
                        name: "workOnThisItsImportant",
                        properties: {
                            costScaling: "25",
                            costScalingType: "multiply",
                            cost: E("25"),
                            mxLvl: E("20"),
                            effect: function() {
                                
                            }
                        }
                    },
                ], Game.classes.currencyLayer.methods.upgrades("Game.data.points.currencies.superPoints"))
            }
            ])
        },
    ]),
    life: new Game.classes.currencyLayer([
        {
            name: "currencies",
            properties: new Game.classes.obb([
                {
                    name: "DNA",
                    properties: {
                        displayName: "DNA",
                        value: E(),
                        boost: () => Game.data.currencies.points.points,
                        boostValue: function() {return this.value.log(1.2).plus(1)},
                    }
                },
            ], Game.classes.currencyLayer.methods.currencies())
        },
        {
            name: "upgrades",
            properties: new Game.classes.obb([
                {
                    name: "dna",
                    properties: new Game.classes.obb([ //upgName, upgCostScaling, upgCostScalingType, upgCost, upgMxLvl, upgEffect)
                        {
                            name: "pointsBoost1",
                            properties: {
                                costScaling: "3",
                                costScalingType: "multiply",
                                cost: E("50"),
                                mxLvl: E("1000"),
                                effect: function() {
                                    
                                }
                            }
                        },
                        {
                            name: "workOnThisItsImportant",
                            properties: {
                                costScaling: "25",
                                costScalingType: "multiply",
                                cost: E("25"),
                                mxLvl: E("20"),
                                effect: function() {
                                    
                                }
                            }
                        },
                    ], Game.classes.currencyLayer.methods.upgrades("Game.data.life.currencies.dna"))
                }
            ], Game.classes.currencyLayer.methods.currencies())
        }
    ]),
    cellBuilder: {
        area: new custom.html.grid(new Game.classes.grid(5, 5), "50px", "50px", "grid-container", document.body),
        id: {
            "0": class { //cytoplasm
                constructor() {
                    this.tier = 0;
                    this.id = 0;
                    this.name = "Cytoplasm";
                    this.effect = E();
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Increases transportation by ${this.effect} compounding`}
                }
            },
            "1": class { //nucleus
                constructor(tier) {
                    this.tier = tier;
                    this.id = 1;
                    this.name = "Nucleus";
                    this.effect = E();
                    this.src = function() {return `Art/cell_builder/1_${this.tier}.png`}
                    this.description = function() {return `Increases control by ${this.effect}. Also increases nearby organelles effect by ${this.effect.divide(100).round()}%`}
                }
                updateEffect() {
                    this.effect = E("1.25").pow(this.tier + 2).pow(Math.pow(this.tier + 2, 0.9)).sqrt().times(this.tier).sqrt().round();
                }
            },
            "2": class { //cell membrane
                constructor(tier) {
                    this.tier = tier;
                    this.id = 2;
                    this.name = "Cell Membrane";
                    this.effect = E();
                    this.src = function() {return `Art/cell_builder/2_${this.tier}.png`}
                    this.description = function() {return `Increases transportation by ${this.effect} compounding`}
                }
            },
        },
        // id: new Game.classes.obb([
        //     {
        //         name: "1",
        //         properties: {
        //             name: "Nucleus",
        //             description: function () {
        //                 return `Increases control by ${this.effect}. Also increases nearby organelles effect by ${this.effect.divide(100).round()}%`;
        //             }
        //         }
        //     },
        //     {
        //         name: "2",
        //         properties: {
        //             name: "Cytoplasm", //low effectiveness
        //             description: function () {
        //                 return `Increases transportation by ${this.effect} compounding`;
        //             }
        //         }
        //     },
        //     {
        //         name: "2",
        //         properties: {
        //             name: "Cell Membrane",
        //             description: function () {
        //                 return `Increases transportation by ${this.effect} compounding`;
        //             }
        //         }
        //     },
        // ], [
        //     {
        //         name: "effectMultiplier",
        //         value: E()
        //     },
        //     {
        //         name: "effect",
        //         value: E()
        //     },
        // ])
    },
    };
    // for (let x of Game["data"].quantumAssembler.area.grid.all()) {
    //     // x["id"] = 0;
    //     // x["tier"] = 0;
    //     x["class"] = new Game.data.quantumAssembler.id["0"]();
    //     x["image"] = document.createElement("img");
    //     x["element"].appendChild(x["image"]);
    //     x["image"].src = "Art/cell_builder/0_0.png";
    //     x["updateContent"] = function(id, tier) {
    //         this.id = id;
    //         this.tier = tier;
    //         this.image.src = `Art/cell_builder/${id}_${tier}.png`;
    //     }
    // }
    // for (let x of Game["data"].cellBuilder.area.grid.all()) {
    //     // x["id"] = 0;
    //     // x["tier"] = 0;
    //     x["class"] = new Game.data.cellBuilder.id["0"]();
    //     x["image"] = document.createElement("img");
    //     x["element"].appendChild(x["image"]);
    //     x["image"].src = "Art/cell_builder/0_0.png";
    //     x["updateContent"] = function(id, tier) {
    //         this.id = id;
    //         this.tier = tier;
    //         this.image.src = `Art/cell_builder/${id}_${tier}.png`;
    //         this.class = new Game.data.cellBuilder.id[id](tier);
    //     }
    // }

    // Game["points"] = () => Game.data.points.currencies.points;
    // Game["superPoints"] = () => Game.data.points.currencies.superPoints;
    // Game["megaPoints"] = () => Game.data.points.currencies.megaPoints;
    // Game["cosmicPoints"] = () => Game.data.points.currencies.cosmicPoints;
    // Game["galacticPoints"] = () => Game.data.points.currencies.galacticPoints;
    // Game["godlyPoints"] = () => Game.data.points.currencies.godlyPoints;
    // Game["celestialPoints"] = () => Game.data.points.currencies.celestialPoints;
    console.log(`Loading complete: Took ${Date.now() - loadingStart}ms`);
    document.getElementById("content").style.display = "block";
    console.log(`Version: ${Game.version}`);
    console.log(`Changelogs:`);
    console.log(Game.changelogs);
    document.getElementById("display-build").innerHTML = `Version: ${Game.version}`;
    document.getElementById("display-build").addEventListener("click", function() {
        let output = ``;
        for (let z of Object.keys(Game.changelogs)) {
            output += `${z}: {`;
            for (let x of Game.changelogs[z]) {
                output += `
    ${x.name}: {${x.value}`;
                output += `
    },`
            }
            output += `
},`
        }
        alert(output);
    });
});
//<Game>
/*
Points < Super Points < Mega Points < Cosmic Points < Galactic Points < Godly Points < Celestial Points = Infinites (beat the game)
Fight mechanic turn all points into coins which can be used for gear
liquidate: turn all points into tokens for fight mechanic
cast: turn tokens into coins
forge: turn coins into bronze
temper: turn bronze into gold
solidify: turn gold into diamond
tokens < coins < bronze < gold < diamond
convert diamonds into 
*/
/* Story
trapped in a dungeon forced to mine and get gold and fight
*/
/*Bugs:
prestige "unlocking" shop even though it is already unlocked

(To be continued because I am bad at programming and good at creating bugs)
*/
/* To do:
look at the trello board lol
*/
//Variables
let currency = 0; //aka points (too late to change)
let total_currency = 0; //aka total points (too late to change) lmao
let super_points = 1; //1 because too late
let mega_points = 0;
let cosmic_points = 0;
let galactic_points = 0;
let godly_points = 0;
let celestial_points = 0;
let infinities = 0 //might need rework (too easy to get 1.7e308 points at this rate)

let charge = 0;
let charge_bonus = 0;
let highestCharge = 0;

let crit_roll = 0;

let density = 10;

let tokens = 0;
let coins = 0;
let bronze = 0;
let gold = 0;
let diamond = 0;

let gain_progress = 0;

let player = { //experimental
	art: 1,
	knowledge: {
        talents: {
            points: 0,
            level: 1,
            exp: 0,
            ciel: 10,
			scaling: 32, //the lower, the harder
            tree: {
                
            },
        },
        wisdom: {
            level: 1,
        },
    },
    overall_power: 0, //overall_power = Math.sqrt(weapon_power * armor_power * magic_power * agility)
	weapon_power: 0,
	armor_power: 0,
    magic_power: 0,
    agility: 1,
}
/*
let example_shop = {
    req: 40, // shop requirement of mentioned currency
    unlocked: 0, // whether or not the shop is unlocked (unlocked once reached targeted req, locked by default)
    up1: 0, // the value of the first upgrade
        up1cost // the cost of the first upgrade
    //(...)
}
*/
//Flags 0 is false and 1 is true
let shop0 = {
    req: 0,
    unlocked:1,
    up1: 1, //base value
        up1Cost: 2,
    up2: 1, //base speed
        up2Cost: 25,
}

let shop = { //Super Points Shop
    req: 50,
    unlocked: 0,
    up1: 0,// Auto upgrade: Cost 50? one time
        up1Cost: 50,
    up2: 0, // No reset on Prestige:
        up2Cost: 1000,
    up3: 1, // Crit Chance
        up3Cost: 100,
    up4: 2, // Crit Multiplier
        up4Cost: 200,
}

let shop2 = { //Mega Points Shop
    req: 25,
    unlocked: 0,
    up1: 0, // Auto Prestige (also permanantely unlocks shop.up2)
        up1Cost: 500,
    up2: 0, // Super Points% Kept on Rebirth
        up2Cost: 100,
    up3: 0, // Autoclick Charge
        up3Cost: 10,
    up4: 5000, // Autoclick Delay
        up4Cost: 20,
    up5: 1, // Autoclick Power
        up5Cost: 500,
}

let shop3 = { //Cosmic Points Shop
	req: 10,
	unlocked: 0,
	up1: 0, // Unlock Tesla Coil
        up1Cost: 25,
    up2: 0, // Mega Points% Kept on Rebirth
        up2Cost: 75,
    up3: 1, // Tesla Coil Charge Rate
        up3Cost: 50,
    up4: 1, // Tesla Coil Charge Multipler Effect
        up4Cost: 5000,
    up5: 1, // Super Points Generation
        up5Cost: 150,
	up6: 1, // Mega Points Generation
        up6Cost: 500,
}

let charge_shop = {
    bonus1: 0, //Points Charge
        bonus1Req: 10,
    bonus2: 0, //Super Points Charge
        bonus2Req: 500,
    bonus3: 0, //Mega Points Charge
        bonus3Req: 20000,
    bonus4: 0, //Cosmic Points Charge
        bonus4Req: 1e6,
}
const charge_shop_desc = [
    "Points",
    "Super Points",
    "Mega Points",
    "Cosmic Points",
];
let charge_shop2 = { //side
    sideBonus1: 0, //Tokens
        sideBonus1Req: 10e6,
    sideBonus2: 0, //Coins
        sideBonus2Req: 100e9,
    sideBonus3: 0, //Bronze
        sideBonus3Req: 10e15,
    sideBonus4: 0, //Gold
        sideBonus4Req: 1e21,
    sideBonus5: 0, //Diamond
        sideBonus5Req: 10e27,
}
const charge_shop_desc2 = [
    "Tokens",
    "Coins",
    "Bronze",
    "Gold",
    "Diamond",
];
let charge_shop3 = {
    specialBonus1: 0, //Points Upgrade Multiplier Charge
        specialBonus1Req: 1e12,
    specialBonus2: 0, //Super Points Shop Discount Charge
        specialBonus2Req: 1e18,
    specialBonus3: 0, //Mega Points Shop Discount Charge
        specialBonus3Req: 1e24,
    specialBonus4: 0, //Cosmic Points Shop Discount Charge
        specialBonus4Req: 1e30,
}
const charge_shop_desc3 = [
    "Points Upgrade Multiplier",
    "Super Points Shop Discount",
    "Mega Points Shop Discount",
    "Cosmic Points Shop Discount",
];
let charge_shop4 = {
    verySpecialBonus1: 0, //Charge Charge (2)
        verySpecialBonus1Req: 1e51,
    verySpecialBonus2: 0, //Charge Charge Charge (3)
        verySpecialBonus2Req: 1e99,
}
const charge_shop_desc4 = [
    "Charge",
    "Charge Charge",
];
function chargeCreate() {
    for (i = 0; i < Object.keys(charge_shop).length / 2; i++) {
        const display = document.createElement("p");
        document.getElementById("display-charge-div").appendChild(display);
        display.id = `display-charge-bonus${i + 1}`;
        display.innerHTML = `??? (${charge_shop[`bonus${i + 1}Req`]})`;
    }
    document.getElementById("display-charge-div").appendChild(document.createElement("br"));
        for (i = 0; i < Object.keys(charge_shop2).length / 2; i++) {
        const display = document.createElement("p");
        document.getElementById("display-charge-div").appendChild(display);
        display.id = `display-charge-side-bonus${i + 1}`;
        display.innerHTML = `??? (${charge_shop2[`sideBonus${i + 1}Req`]})`;
    }
    document.getElementById("display-charge-div").appendChild(document.createElement("br"));
    for (i = 0; i < Object.keys(charge_shop3).length / 2; i++) {
        const display = document.createElement("p");
        document.getElementById("display-charge-div").appendChild(display);
        display.id = `display-charge-special-bonus${i + 1}`;
        display.innerHTML = `??? (${charge_shop3[`specialBonus${i + 1}Req`]})`;
    }
    document.getElementById("display-charge-div").appendChild(document.createElement("br"));
    for (i = 0; i < Object.keys(charge_shop4).length / 2; i++) {
        const display = document.createElement("p");
        document.getElementById("display-charge-div").appendChild(display);
        display.id = `display-charge-very-special-bonus${i + 1}`;
        display.innerHTML = `??? (${charge_shop4[`verySpecialBonus${i + 1}Req`]})`;
    }
}
async function start_charge(debug) {
	while (true) {
        if (charge_stop == 1) {
            if (debug) {
                alert("Charge Stop");
            }
            return;
        }
        await sleep(1000);
        charge += shop3.up3;
        charge_bonus = (charge / (Math.log2(charge) * 16)) * shop3.up4;
        document.getElementById("display-charge").innerHTML = `Charge: ${charge} | Charge Bonus: ${charge_bonus}`;
        //update bonus
        if (charge > highestCharge) {highestCharge = charge;}

        for (i = 0; i < Object.keys(charge_shop).length / 2; i++) {
            if (highestCharge >= charge_shop[`bonus${i + 1}Req`]) {
                charge_shop[`bonus${i + 1}`] = Math.round(charge_bonus / ((i + 1)));
                updateDisplayAdvanced(`display-charge-bonus${i + 1}`, `${charge_shop_desc[i]} Charge `, charge_shop[`bonus${i + 1}Req`], 2, charge_shop[`bonus${i + 1}`], "x");
            }
        }
        for (i = 0; i < Object.keys(charge_shop2).length / 2; i++) {
            if (highestCharge >= charge_shop2[`sideBonus${i + 1}Req`]) {
                charge_shop2[`sideBonus${i + 1}`] = Math.round(charge_bonus / ((i + 1) * (Object.keys(charge_shop).length)));
                updateDisplayAdvanced(`display-charge-side-bonus${i + 1}`, `${charge_shop_desc2[i]} Charge `, charge_shop2[`sideBonus${i + 1}Req`], 2, charge_shop2[`sideBonus${i + 1}`], "x");
            }
        }
    }
}
//Other
//1st layer (points => super)
const currency_req_prestige = 10000;
let prestige_unlocked = 0;

//2nd layer (super => mega)
const super_req_rebirth = 25000;
let rebirth_unlocked = 0;

//3rd layer (mega => cosmic || mega => tokens)
const mega_req_ascend = 5000;
let ascend_unlocked = 0;

const mega_req_liquidate = 250000;
let liquidate_unlocked = 0;


//Help
let help_text = `1.) This is a game where you click buttons to earn points which allow you to upgrade and earn more points and so on. Check back once you get ${currency_req_prestige} points.`;
let help_text_x = 1;

//Functions
function help() {
	if (help_text_x <= 1 && prestige_unlocked == 1) {
		help_text += `

2.) Once you reach ${currency_req_prestige} points, you can prestige and earn super points, which multiply your point gain. Check back once you reach ${shop.req} super points.`;
		help_text_x = 2;
	}
	if (help_text_x <= 2 && shop.unlocked == 1) {
		help_text += `

3.) Once you reach ${shop.req} super points, you unlock the super points shop, where you can spend your earned super points in exchange for powerful upgrades. Check back once you purchase your first upgrade.`;
		help_text_x = 3;
	}
	if (help_text_x <= 3) {
		if (shop.up1 == 1 || shop.up2 == 1 || shop.up3 > 1 || shop.up4 > 2) {
			help_text += `

The super points shop has four main upgrades. Critical gains multiply gained points and happen based on the critical rate. The multiplier depends on the critical roll and the critical multiplier. Check back once you reach ${super_req_rebirth} super points.`;
		help_text_x = 4;
		}
	}
    alert(help_text);
}
function update_art() {
	switch(player.art) {
		case 1:
			document.getElementById("player_art").src="Art/New_Piskel.png";
			break;
		case 2:
			document.getElementById("player_art").src="Art/New_Piskel_1.png";
			break;
		case 3:
			document.getElementById("player_art").src="Art/New_Piskel_2.png";
			break;
		case 4:
			document.getElementById("player_art").src="Art/New_Piskel_3.png";
			break;
	}
}
/*
async function autoclick(amount, delay, power, debug) {
    if (!amount || !delay || !power) {
        alert("Missing Parameters");
        return;
    }
    if (debug == true || debug == false) {
    for (i = 0; i < amount; i++) {
        if (autoclick_stop == 1) {
            if (debug) {
                alert("Autoclick Stop");
            }
            return;
        }
        await sleep(delay);
        for (i = 0; i < power; i++) {
            gain();
            shop2.up3--;
            document.getElementById("button-shop2-up3").innerHTML = `Autoclick Charges [${shop2.up3} charges] (${shop2.up3Cost})`;
        }
    }
    alert("Autoclick Ended");
    return;
    } else {
        alert("Missing Parameter: Debug");
        return;
    }
}
async function stop_autoclick(stop_delay) {
    autoclick_stop = 1;
    await sleep(stop_delay);
    autoclick_stop = 0;
}
async function start_autoclick(debug) {
	while (true) {
        if (autoclick_stop == 1) {
            if (debug) {
                alert("Autoclick Stop");
            }
            return;
        }
        await sleep(shop2.up4);
        for (i = 0; i < shop2.up5; i++) {
            gain();
        }
    }
}
async function stop_charge(stop_delay) {
    charge_stop = 1;
    await sleep(stop_delay);
    charge_stop = 0;
}
async function start_generate(debug) {
    while (true) {
        if (generate_stop == 1) {
            if (debug) {
                alert("Generate Stop");
            }
            return;
        }
        await sleep(1000);
        if (shop3.up5 != 1) {
            super_points += ((Math.round(Math.log10((total_currency + 1) * (Math.log2(super_points + 1)))) * Math.round(Math.log2(super_points + 1))) * ((mega_points * 2)+1) * ((cosmic_points * 2)+1)) * (shop3.up5 / 100);

        }
    }
}
async function stop_generate(stop_delay) {
    generate_stop = 1;
    await sleep(stop_delay);
    charge_stop = 0;
}
function crit() {
    crit_roll = Math.random() * 100
    if (crit_roll < shop.up3) {
        document.getElementById("display-crit").innerHTML = `Critical Gain [${Math.floor(shop.up4*((shop.up3-crit_roll)+1))}x, ${shop.up3}%]`;
        return(Math.floor(shop.up4*((shop.up3-crit_roll)+1)));
    } else {
        document.getElementById("display-crit").innerHTML = "Made by Dennis";
        return(1);
    }
}
*/
async function gain() {
    if (gain_progress == 0) { 
        gain_progress = 1;
        const elem = document.getElementById("gain-bar");
        let width = 0;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                elem.style.width = "100%";
                elem.innerHTML = "100%";

                gain_progress = 0;
                gain1()
            } else {
                if (Math.random() * 100 <= density) {
                    width += player.agility;
                    elem.style.width = width + "%";
                    elem.innerHTML = `Searching(${width}%)`;
                } else {
                    elem.innerHTML = `Searching(${width}%)`;
                }
            }
        }
    }
}
/*
function gain1() {
    currency += shop0.up1 * (charge_shop.bonus1 + 1) * super_points * crit() * ((mega_points * 4)+1) * Math.round(Math.log2(cosmic_points * 2 + 2));
    total_currency += shop0.up1 * super_points * crit() * ((mega_points * 4)+1) * Math.round(Math.log2(cosmic_points * 2 + 2));
    updateDisplay("points");

    if (shop.up1 == 1) {up_gain();}
    if (prestige_unlocked == 0 && currency >= currency_req_prestige) {
        prestige_unlocked = 1;
        document.getElementById("button-prestige").innerHTML = `Prestige`;
    }
	if (shop2.up1 == 1) {
		prestige();
	}
    updateDisplay("talent");
}
function up_gain() {
    if (currency >= shop0.up1Cost) {
        shop0.up1 *= 2;
        currency -= shop0.up1Cost;
        shop0.up1Cost = Math.round((shop0.up1Cost * 2) * ((Math.log10(shop0.up1Cost) * 0.2) + 1));
        //document.getElementById("button-up-gain").innerHTML = `Upgrade (${shop0.up1Cost})`;
        updateDisplayAdvanced("button-up-gain", "Upgrade Base Value ", shop0.up1Cost, 2, shop0.up1);
        updateDisplay("points");
    }
}
function up_gain2() {
    if (currency >= shop0.up2Cost) {
        shop0.up2++;
        currency -= shop0.up2Cost;
        shop0.up2Cost = Math.round((shop0.up2Cost * 5) * ((Math.log2(shop0.up2Cost)) + 1));
        //document.getElementById("button-up-gain").innerHTML = `Upgrade (${shop0.up1Cost})`;
        updateDisplayAdvanced("button-up-gain2", "Upgrade Base Speed ", shop0.up2Cost, 2, shop0.up2);
        updateDisplay("points");
        updateDisplay("agility");
    }
}
function prestige() {
    if (prestige_unlocked == 1) {
	if (shop2.up1 == 1) {
		total_currency++;
		currency++;
		super_points += (Math.round(Math.log10((total_currency + 1) * (Math.log2(super_points + 1)))) * Math.round(Math.log2(super_points + 1))) * ((mega_points * 2)+1) * ((cosmic_points * 2)+1);
        updateDisplay("super_points");
	} else {
    if (shop.up2 == 0) {
    if (total_currency >= currency_req_prestige && prompt(`Are you sure you want to prestige? You will lose all points and upgrades in exchange for ${(Math.round(Math.log10((total_currency + 1) * (Math.log2(super_points + 1)))) * Math.round(Math.log2(super_points + 1))) * ((mega_points * 2)+1) * ((cosmic_points * 2)+1)} super points, which multiply your point gain. Type 'Yes' to proceed.`).toLowerCase() == "yes") {
        super_points += (Math.round(Math.log10((total_currency + 1) * (Math.log2(super_points + 1)))) * Math.round(Math.log2(super_points + 1))) * ((mega_points * 2)+1) * ((cosmic_points * 2)+1);
        currency = 0;
        total_currency = 0;
        shop0.up1 = Math.round(Math.log2(super_points)) * Math.round(Math.log2(mega_points + 4));
        shop0.up1Cost = 10;
        updateDisplay("points")
        updateDisplayAdvanced("button-up-gain", "Upgrade Base Value ", shop0.up1Cost, 2, shop0.up1);
        updateDisplay("super_points");
        if (super_points >= shop.req && shop.unlocked == 0) {
            document.getElementById("display-shop-title").innerHTML = "~Super Points Shop~";
            shop.unlocked = 1;
            document.getElementById("button-up1").innerHTML = `Auto Upgrade (${shop.up1Cost})`;
            document.getElementById("button-up2").innerHTML = `No Reset Prestige (${shop.up2Cost})`;
            document.getElementById("button-up3").innerHTML = `Critical Chance [${shop.up3}%] (${shop.up3Cost})`;
            document.getElementById("button-up4").innerHTML = `Critical Multiplier [${shop.up4}] (${shop.up4Cost})`;
        } 
        if (super_points >= super_req_rebirth && rebirth_unlocked == 0) {
            document.getElementById("button-rebirth").innerHTML = "Rebirth";
            rebirth_unlocked = 1;
        } 
        alert("Success");
		if (player.art <= 1) {
			player.art = 2;
			update_art();
		}
    } else if (total_currency < currency_req_prestige) {
        alert(`You need at least ${currency_req_prestige} total points to prestige. You only have ${total_currency} total points.`)
    }
    } else {
        alert(`Success: Gained ${(Math.round(Math.log10((total_currency + 1) * (Math.log2(super_points + 1)))) * Math.round(Math.log2(super_points + 1))) * ((mega_points * 2)+1) * ((cosmic_points * 2)+1)} Super Points`);
        super_points += (Math.round(Math.log10((total_currency + 1) * (Math.log2(super_points + 1)))) * Math.round(Math.log2(super_points + 1))) * ((mega_points * 2)+1) * ((cosmic_points * 2)+1);
        updateDisplay("super_points");
	}
        if (super_points >= shop.req && shop.unlocked == 0) {
            document.getElementById("display-shop-title").innerHTML = "~Super Points Shop~";
            shop.unlocked = 1;
            document.getElementById("button-up1").innerHTML = `Auto Upgrade (${shop.up1Cost})`;
            document.getElementById("button-up2").innerHTML = `No Reset Prestige (${shop.up2Cost})`;
            document.getElementById("button-up3").innerHTML = `Critical Chance [${shop.up3}%] (${shop.up3Cost})`;
            document.getElementById("button-up4").innerHTML = `Critical Multiplier [${shop.up4}] (${shop.up4Cost})`;
        }
        if (super_points >= super_req_rebirth && rebirth_unlocked == 0) {
            document.getElementById("button-rebirth").innerHTML = "Rebirth";
            rebirth_unlocked = 1;
        
    }
}
}
}
//Shop
function up1() { //Auto Upgrade
    if (shop.unlocked = 1 && shop.up1 == 0 && super_points >= shop.up1Cost) {
        super_points -= shop.up1Cost;
        shop.up1 = 1;
        document.getElementById("button-up1").innerHTML = "Unlocked";
        updateDisplay("super_points");
    }
}
function up2() { //No Reset Prestige
    if (shop.unlocked = 1 && shop.up2 == 0 && super_points >= shop.up2Cost) {
        super_points -= shop.up2Cost;
        shop.up2 = 1;
        document.getElementById("button-up2").innerHTML = "Unlocked";
        updateDisplay("super_points");
    }
}
function up3() { //Crit Chance
    if (shop.unlocked = 1 && super_points >= shop.up3Cost) {
        super_points -= shop.up3Cost;
        shop.up3 = Math.round(shop.up3*1.1) + 1;
        shop.up3Cost = Math.round((shop.up3Cost * 2) * ((Math.log10(shop.up3Cost) * 0.2) + 1));
        document.getElementById("button-up3").innerHTML = `Critical Chance [${shop.up3}%] (${shop.up3Cost})`;
        updateDisplay("super_points");
    }
}
function up4() { //Crit Multiplier
    if (shop.unlocked = 1 && super_points >= shop.up4Cost) {
        super_points -= shop.up4Cost;
        shop.up4 = Math.round(shop.up4*1.5) + 1;
        shop.up4Cost = Math.round((shop.up4Cost * 2) * ((Math.log10(shop.up4Cost) * 0.2) + 1));
        document.getElementById("button-up4").innerHTML = `Critical Multiplier [${shop.up4}] (${shop.up4Cost})`;
        updateDisplay("super_points");
    }
}
function shop2_up1() { //Auto Prestige
    if (shop2.unlocked = 1 && shop2.up1 == 0 && mega_points >= shop2.up1Cost) {
        mega_points -= shop2.up1Cost;
        shop2.up1 = 1;
        document.getElementById("button-shop2-up1").innerHTML = "Unlocked";
        updateDisplay("mega_points");
    }
}
function shop2_up2() { //Super Points Kept On Prestige
    if (shop2.unlocked = 1 && shop2.up2 < 100 && mega_points >= shop2.up2Cost) {
        mega_points -= shop2.up2Cost;
        shop2.up2 += (Math.round(shop2.up2 * 1.25)) + 1;
        shop2.up2Cost = Math.round((shop2.up2Cost * 2) * ((Math.log10(shop2.up2Cost) * 0.2) + 1));
		if (shop2.up2 >= 100) {
			shop2.up2 = 100;
			document.getElementById("button-shop2-up2").innerHTML = `Super Points Kept on Rebirth [${shop2.up2}%] (Maxed)`;
		} else {
			document.getElementById("button-shop2-up2").innerHTML = `Super Points Kept on Rebirth [${shop2.up2}%] (${shop2.up2Cost})`;
		}
        updateDisplay("mega_points");
    }
}
function shop2_up3() { //Autoclicker Unlock
    if (shop2.unlocked = 1 && shop2.up3 == 0 && mega_points >= shop2.up3Cost) {
        mega_points -= shop2.up3Cost;
        shop2.up3 = 1;
		document.getElementById("button-shop2-up3").innerHTML = "Unlocked";
        start_autoclick(false);
        updateDisplay("mega_points");
    }
}
function shop2_up4() { //Autoclicker Delay
    if (shop2.unlocked = 1 && shop2.up3 == 1 && mega_points >= shop2.up4Cost) {
        if (shop2.up4 != 20) {
            mega_points -= shop2.up4Cost;
            shop2.up4 /= 2;
            if (shop2.up4 <= 20) {
                shop2.up4 = 20;
                document.getElementById("button-shop2-up4").innerHTML = `Autoclick Delay [${shop2.up4} ms] (Maxed)`;
            } else {
            document.getElementById("button-shop2-up4").innerHTML = `Autoclick Delay [${shop2.up4} ms] (${shop2.up4Cost})`;
            shop2.up4Cost = Math.round((shop2.up4Cost * 10) * ((Math.log10(shop2.up4Cost) * 0.2) + 1));
            }
            updateDisplay("mega_points");
        }
    }
}
function shop2_up5() { //Autoclicker Power
    if (shop2.unlocked = 1 && shop2.up3 == 1  && mega_points >= shop2.up5Cost) {
        mega_points -= shop2.up5Cost;
        shop2.up5 *= 2;
        shop2.up5Cost = Math.round((shop2.up5Cost * 10) * ((Math.log10(shop2.up5Cost) * 0.2) + 1));
		document.getElementById("button-shop2-up5").innerHTML = `Autoclick Power [${shop2.up5}x] (${shop2.up5Cost})`;
        updateDisplay("mega_points");
    }
}


function shop3_up1() { //Unlock Tesla Coil
    if (shop3.unlocked = 1 && shop3.up1 == 0 && cosmic_points >= shop3.up1Cost) {
        cosmic_points -= shop3.up1Cost;
        shop3.up1 = 1;
        document.getElementById("button-shop3-up1").innerHTML = "Unlocked";
        updateDisplay("cosmic_points");
        start_charge();
        chargeCreate();
    }
}
function shop3_up2() { //Mega Points% Kept on Rebirth
    if (shop3.unlocked = 1 && shop3.up2 < 100 && cosmic_points >= shop3.up2Cost) {
        cosmic_points -= shop3.up2Cost;
        shop3.up2 += (Math.round(shop3.up2 * 1.25)) + 1;
        shop3.up2Cost = Math.round((shop3.up2Cost * 2) * ((Math.log10(shop3.up2Cost) * 0.2) + 1));
		if (shop3.up2 >= 100) {
			shop3.up2 = 100;
			document.getElementById("button-shop3-up2").innerHTML = `Mega Points Kept on Ascend [${shop3.up2}%] (Maxed)`;
		} else {
			document.getElementById("button-shop3-up2").innerHTML = `Mega Points Kept on Ascend [${shop3.up2}%] (${shop3.up2Cost})`;
		}
        updateDisplay("cosmic_points");
    }
}
function shop3_up3() { //Tesla Coil Charge Rate
    if (shop3.unlocked = 1 && cosmic_points >= shop3.up2Cost) {
        cosmic_points -= shop3.up3Cost;
        shop3.up3 += Math.round(shop3.up3 * 0.5);
        shop3.up3Cost += Math.round(shop3.up3Cost * 4 * ((Math.log10(shop3.up3Cost) * 0.2) + 1));
        document.getElementById("button-shop3-up3").innerHTML = `Tesla Coil Charge Rate [${shop3.up3} p/ second] (${shop3.up3Cost})`;
        updateDisplay("cosmic_points");
    }
}
function shop3_up4() { //Tesla Coil Charge Multipler Effect
    if (shop3.unlocked = 1 && cosmic_points >= shop3.up4Cost) {
        cosmic_points -= shop3.up4Cost;
        shop3.up4 *= 2;
        shop3.up4Cost += Math.round(shop3.up4Cost * 10 * ((Math.log10(shop3.up4Cost) * 0.2) + 1));
        document.getElementById("button-shop3-up4").innerHTML = `Tesla Coil Charge Effect [${shop3.up4}x] (${shop3.up4Cost})`;
        updateDisplay("cosmic_points");
    }
}
function shop3_up5() { //Super Points Generation
    if (shop3.unlocked = 1 && cosmic_points >= shop3.up5Cost) {
        cosmic_points -= shop3.up5Cost;
        shop3.up5 = Math.round(shop3.up5 * 1.1) + 1;
        shop3.up5Cost = Math.round((shop3.up5Cost * 2) * ((Math.log10(shop3.up5Cost) * 0.2) + 1));
        document.getElementById("button-shop3-up5").innerHTML = `Super Points Passive Generation [${shop3.up5}% Highest Earned p/ second] (${shop3.up5Cost})`;
        updateDisplay("cosmic_points");
    }
}
function shop3_up6() { //Mega Points Generation
    if (shop3.unlocked = 1 && cosmic_points >= shop3.up6Cost) {
        cosmic_points -= shop3.up6Cost;
        shop3.up6 = Math.round(shop3.up6 * 1.1) + 1;
        shop3.up6Cost = Math.round((shop3.up6Cost * 2) * ((Math.log10(shop3.up6Cost) * 0.2) + 1));
        document.getElementById("button-shop3-up6").innerHTML = `Mega Points Passive Generation [${shop3.up5}% Highest Earned p/ second] (${shop3.up5Cost})`;
        updateDisplay("cosmic_points");
    }
}

function rebirth() {
    if (rebirth_unlocked == 1) {
        if (super_points >= super_req_rebirth && prompt(`Are you sure you want to rebirth? You will lose everything prestiging does as well as super points and shop upgrades in exchange for ${Math.round(Math.log10((super_points + 1) * (Math.log2(mega_points + 2)))) * Math.round(Math.log2(mega_points + 2)) * ((cosmic_points * 2)+1)} mega points, which multiply your point and super point gain. Type 'Yes' to proceed.`).toLowerCase() == "yes") {
        mega_points += Math.round(Math.log10((super_points + 1) * (Math.log2(mega_points + 2)))) * Math.round(Math.log2(mega_points + 2)) * ((cosmic_points * 2)+1);
        currency = 0;
        total_currency = 0;
        shop0.up1 = 2;
        shop0.up1Cost = 10;
        super_points = Math.round((super_points * (shop2.up2 / 100)) + 1);
        shop = {
            req: 50,
            unlocked: 1,
            up1: 0,// Auto upgrade: Cost 50? one time
                up1Cost: 50,
            up2: 0, // No reset on Prestige:
                up2Cost: 1000,
            up3: 1, // Crit Chance
                up3Cost: 100,
            up4: 2, // Crit Multiplier
                up4Cost: 200,
        }
        updateDisplay("points")
        updateDisplayAdvanced("button-up-gain", "Upgrade Base Value ", shop0.up1Cost, 2, shop0.up1);
        updateDisplay("super_points");
        updateDisplay("mega_points");
            document.getElementById("display-shop-title").innerHTML = "~Super Points Shop~";
            document.getElementById("button-up1").innerHTML = `Auto Upgrade (${shop.up1Cost})`;
            document.getElementById("button-up2").innerHTML = `No Reset Prestige (${shop.up2Cost})`;
            document.getElementById("button-up3").innerHTML = `Critical Chance [${shop.up3}%] (${shop.up3Cost})`;
            document.getElementById("button-up4").innerHTML = `Critical Multiplier [${shop.up4}] (${shop.up4Cost})`;
        if (super_points >= super_req_rebirth && rebirth_unlocked == 0) {
            document.getElementById("button-rebirth").innerHTML = "Rebirth";
            rebirth_unlocked = 1;
        }
        if (mega_points >= shop2.req && shop2.unlocked == 0) {
            document.getElementById("display-shop2-title").innerHTML = "~Mega Points Shop~";
            shop2.unlocked = 1;
            document.getElementById("button-shop2-up1").innerHTML = `Auto Prestige (${shop2.up1Cost})`;
            document.getElementById("button-shop2-up2").innerHTML = `Super Points Kept on Rebirth [${shop2.up2}%] (${shop2.up2Cost})`;
            document.getElementById("button-shop2-up3").innerHTML = `Unlock Autoclick (${shop2.up3Cost})`;
            document.getElementById("button-shop2-up4").innerHTML = `Autoclick Delay [${shop2.up4} ms] (${shop2.up4Cost})`;
            document.getElementById("button-shop2-up5").innerHTML = `Autoclick Power [${shop2.up5}x] (${shop2.up5Cost})`;
        }
		if (mega_points >= mega_req_ascend && ascend_unlocked == 0) {
			document.getElementById("button-ascend").innerHTML = "Ascend";
			ascend_unlocked = 1;
		}
		if (player.art <= 2) {
			player.art = 3;
			update_art();
		}
        alert("Success");
    } else if (super_points < super_req_rebirth) {
        alert(`You need at least ${super_req_rebirth} super points to prestige. You only have ${super_points} super points.`)
    }
    }
}

function ascend() {
    if (ascend_unlocked == 1) {
		if (mega_points >= mega_req_ascend && prompt(`Are you sure you want to ascend? You will lose everything rebirthing does as well as mega points and shop upgrades (except autoclick upgrades) in exchange for ${Math.round(Math.log10((mega_points + 1) * (Math.log2(cosmic_points + 2)))) * Math.round(Math.log2(cosmic_points + 2))} cosmic points, which multiply your point, super point, and mega point gain. Type 'Yes' to proceed.`).toLowerCase() == "yes") {
            cosmic_points += Math.round(Math.log10((mega_points + 1) * (Math.log2(cosmic_points + 2)))) * Math.round(Math.log2(cosmic_points + 2));
            currency = 0;
            total_currency = 0;
            shop0.up1 = 2;
            shop0.up1Cost = 10;
            super_points = Math.round((super_points * (shop2.up2 / 100)) + 1);
            mega_points = Math.round((mega_points * (shop3.up2 / 100)) + 1);
            shop = { //Super Points Shop
                req: 50,
                unlocked: 1,
                up1: 0,// Auto upgrade: Cost 50? one time
                    up1Cost: 50,
                up2: 0, // No reset on Prestige:
                    up2Cost: 1000,
                up3: 1, // Crit Chance
                    up3Cost: 100,
                up4: 2, // Crit Multiplier
                    up4Cost: 200,
            
            }
            
            shop2 = { //Mega Points Shop
                req: 25,
                unlocked: 1,
                up1: 0, // Auto Prestige (also permanantely unlocks shop.up2)
                    up1Cost: 500,
                up2: 0, // Super Points% Kept on Rebirth
                    up2Cost: 100,
                up3: 0, // Autoclick Charge
                    up3Cost: 10,
                up4: 5000, // Autoclick Delay
                    up4Cost: 20,
                up5: 1, // Autoclick Power
                    up5Cost: 500,
            }
            
            shop2.up1 = 0;
                shop2.up1Cost = 500;
            shop2.up2 = 0;
                shop2.up2Cost = 100;

            updateDisplay("points")
            updateDisplayAdvanced("button-up-gain", "Upgrade Base Value ", shop0.up1Cost, 2, shop0.up1);
            updateDisplay("super_points");
            updateDisplay("mega_points");
            updateDisplay("cosmic_points");
                document.getElementById("display-shop-title").innerHTML = "~Super Points Shop~";
                document.getElementById("button-up1").innerHTML = `Auto Upgrade (${shop.up1Cost})`;
                document.getElementById("button-up2").innerHTML = `No Reset Prestige (${shop.up2Cost})`;
                document.getElementById("button-up3").innerHTML = `Critical Chance [${shop.up3}%] (${shop.up3Cost})`;
                document.getElementById("button-up4").innerHTML = `Critical Multiplier [${shop.up4}] (${shop.up4Cost})`;

                document.getElementById("display-shop2-title").innerHTML = "~Mega Points Shop~";
                document.getElementById("button-shop2-up1").innerHTML = `Auto Prestige (${shop2.up1Cost})`;
                document.getElementById("button-shop2-up2").innerHTML = `Super Points Kept on Rebirth [${shop2.up2}%] (${shop2.up2Cost})`;
                document.getElementById("button-shop2-up3").innerHTML = `Unlock Autoclick (${shop2.up3Cost})`;
                document.getElementById("button-shop2-up4").innerHTML = `Autoclick Delay [${shop2.up4} ms] (${shop2.up4Cost})`;
                document.getElementById("button-shop2-up5").innerHTML = `Autoclick Power [${shop2.up5}x] (${shop2.up5Cost})`;
            
            if (cosmic_points >= shop3.req && shop3.unlocked == 0) {
                document.getElementById("display-shop3-title").innerHTML = "~Cosmic Points Shop~";
                shop3.unlocked = 1;
                document.getElementById("button-shop3-up1").innerHTML = `Unlock Tesla Coil (${shop3.up1Cost})`;
                document.getElementById("button-shop3-up2").innerHTML = `Mega Points Kept on Ascend [${shop3.up2}%] (${shop3.up2Cost})`;
                document.getElementById("button-shop3-up3").innerHTML = `Tesla Coil Charge Rate [${shop3.up3} p/ second] (${shop3.up3Cost})`;
                document.getElementById("button-shop3-up4").innerHTML = `Tesla Coil Charge Effect [${shop3.up4}x] (${shop3.up4Cost})`;
                document.getElementById("button-shop3-up5").innerHTML = `Super Points Passive Generation [${shop3.up5}% Highest Earned p/ second] (${shop3.up5Cost})`;
                document.getElementById("button-shop3-up6").innerHTML = `Mega Points Passive Generation [${shop3.up6}% Highest Earned p/ second] (${shop3.up6Cost})`;
            }
            alert("Success");
        }
	}
}

function liquidate() {
    if (liquidate_unlocked == 1) {
		
	}
}
*/
/* function chargeCreate() {
for (i = 0; i < Object.keys(charge_shop).length / 2; i++) {
    const display = document.createElement("p");
    document.getElementById("display-charge-div").appendChild(display);
    display.id = `display-charge-bonus${i + 1}`;
    display.innerHTML = ``
}
for (i = 0; i < Object.keys(charge_shop2).length / 2; i++) {
    const display = document.createElement("p");
    document.getElementById("display-charge-div").appendChild(display);
    display.id = `display-charge-side-bonus${i + 1}`;

}
for (i = 0; i < Object.keys(charge_shop3).length / 2; i++) {
    const display = document.createElement("p");
    document.getElementById("display-charge-div").appendChild(display);
    display.id = `display-charge-special-bonus${i + 1}`;

}
for (i = 0; i < Object.keys(charge_shop4).length / 2; i++) {
    const display = document.createElement("p");
    document.getElementById("display-charge-div").appendChild(display);
    display.id = `display-charge-very-special-bonus${i + 1}`;

}
} */
/*
function augment() {
    
}
function fuse() {
    
}
function implode() {
    
}
function terminate() {
    
}

function ruinTheFun() {
    currency = 1e300;
    total_currency = currency;
    super_points = 1e100;
    updateDisplay("points")
    updateDisplayAdvanced("button-up-gain", "Upgrade Base Value ", shop0.up1Cost, 2, shop0.up1);
    updateDisplay("super_points");
    document.getElementById("display-shop-title").innerHTML = "~Super Points Shop~";
    console.log("Ok. Why? What was wrong with my hard work and balancing?");
    console.log("*sigh* I guess I have to prioritize player happiness.");
    return("You can have it your way.");
}
*/