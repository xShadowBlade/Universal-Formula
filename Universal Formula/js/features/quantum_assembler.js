addStartFunction("quantumAssembler", () => {
    Game["static"].quantumAssembler = {
        currencies: new Game.classes.currencyLayer([
            {
                name: "energy",
                properties: {
                    displayName: "Energy",
                    functionArgs: {
                        updateDisplay: [1, "eV", 1],
                        boost: [0],
                    },
                    dataPointer: () => Game.data.get("energy")
                }
            }
        ], Game.classes.currencyLayer.methods.static()),
        modal: new custom.html.modal({
            elem: "quantum-assembler",
        },
        {
            elem: "quantum-assembler-content",
            innerHTML: `
<b><u>Quantum Assembler</u></b>
<br>
<p id="quantum-assembler-energy">Energy: 0.00 eV</p>
<p id="quantum-assembler-desc">Hover over items <br> to see their cost and description</p>
`
        },
        {
            elem: "quantum-assembler-open",
            innerHTML: "Atomic Assembler",
            className: "shop-button"
        },
        {
            elem: "span",
        }, document.body),
        area: new custom.html.grid(new Game.classes.grid(5, 5), "50px", "50px", "grid-container", d_ID("quantum-assembler-content")),
        shop: new custom.html.grid(new Game.classes.grid(5, 2), "50px", "50px", "grid-container", d_ID("quantum-assembler-content")),
        id: {
            //QA
            "0": class { //null
                constructor() {
                    this.tier = E(0);
                    this.id = 0;
                    this.cost = E(0); //free, is used to remove
                    this.name = "Void";
                    this.boost = new Game.classes.boost(0);
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Vast, empty space`}
                }
            },
            "1": class { //blue
                constructor(tier) {
                    this.init = function(x, y) {
                        addLoopFunction(`quantumAssember${x}l${y}`, () => {
                            // Game.data.get("energy").boost.bSetAdvanced({
                            //     "id": `quantumAssember${x}l${y}`,
                            //     "name": `Quantum Assember Grid (${x}, ${y})`,
                            //     "desc": this.description(),
                            //     "type": "add",
                            //     "value": this.boost.calculate(),
                            // })
                            Game.data.get("energy").boost.bSet(
                                `quantumAssember${x}l${y}`,
                                `Quantum Assember Grid (${x}, ${y})`,
                                this.description(),
                                "add",
                                this.boost.calculate(),
                            )
                        })   
                    };
                    this.unload = function() {
                        Game.get("energy").boost.bRemove(`quantumAssember ${x},${y}`);
                    };
                    
                    this.tier = E(tier);
                    this.id = 1;
                    this.cost = this.tier.pow(E(1.25).times(this.tier.plus(3.5))).plus(5).round();
                    this.name = "Blue Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(1.1).times(this.tier)).plus(1).round());
                    this.src = function() {return `Art/quantum_assembler/blue_${tier}.png`}
                    this.description = function() {return `Generates (+${Game.format.eV(this.boost.calculate())}/sec). Also generates ${E(this.boost.calculate().pow(0.9)).formatGain(this.boost.calculate().pow(0.9))} instability`}
                }
            },
            "2": class { //red
                constructor(tier) {
                    this.tier = E(tier);
                    this.id = 2;
                    this.cost = this.tier.pow(E(1.25).times(this.tier.plus(4.2))).plus(50).round();
                    this.name = "Red Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(1.15).times(this.tier)).plus(1).round());
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Decreases the instability of adjacent quarks by ${this.boost.calculate().format()}`}
                }
            },
            "3": class { //green
                constructor(tier) {
                    this.tier = E(tier);
                    this.id = 3;
                    this.cost = this.tier.pow(E(1.25).times(this.tier.plus(4.75))).plus(500).round();
                    this.name = "Green Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(1.25).times(this.tier)).plus(50).round());
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Increases the instability limit by ${this.boost.calculate().format()}`}
                }
            },
            "4": class { //anti-blue
                constructor(tier) {
                    this.tier = E(tier);
                    this.id = 4;
                    this.cost = this.tier.plus(2.35).pow(E(3.5).times(this.tier.plus(3.5))).round();
                    this.name = "Anti-Blue Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(0.8).times(this.tier.times(0.7))).plus(1).round());
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Multiplies the production and instability of adjacent blue quarks by ${this.boost.calculate().format()}`}
                }
            },
            "5": class { //anti-red
                constructor(tier) {
                    this.tier = E(tier);
                    this.id = 5;
                    this.cost = this.tier.plus(2.55).pow(E(3.5).times(this.tier.plus(4.2))).plus(50).round();
                    this.name = "Anti-Red Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(0.75).times(this.tier.times(0.7))).plus(1).round());
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Multiplies the power of adjacent red and green quarks by ${this.boost.calculate().format()}`}
                }
            },
            "6": class { //anti-green
                constructor(tier) {
                    this.tier = E(tier);
                    this.id = 6;
                    this.cost = this.tier.plus(2.75).pow(E(3.5).times(this.tier.plus(4.75))).plus(500).round();
                    this.name = "Anti-Green Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(0.7).times(this.tier.times(0.7))).plus(1).round());
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Divides the instability of adjacent quarks by ${this.boost.calculate().format()}`}
                }
            },

            //Boosts
            "1001": class { //up
                constructor(tier) {
                    this.tier = E(tier);
                    this.id = 1001;
                    this.cost = this.tier.pow(E(3).times(this.tier.plus(4))).plus(500).round();
                    this.name = "Up Quark";
                    this.boost = new Game.classes.boost(this.tier.pow(E(0.7).times(this.tier)).plus(1).round());
                    this.src = function() {return "Art/cell_builder/0_0.png"}
                    this.description = function() {return `Multiplies mass gain by ${this.boost.calculate().format()}`}
                }
            },
        },
    };
    Game["data"].quantumAssembler = new Game.classes.currencyLayer([
        {
            name: "currencies",
            properties: new Game.classes.obb([
                {
                    name: "energy",
                    properties: {
                        staticPointer: () => Game.static.get("energy")
                    }
                }
            ], Game.classes.currencyLayer.methods.currencies())
        },
        {
            name: "upgrades",
            properties: new Game.classes.obb([
                {
                
                }
            ])
        }
    ]);
    // Game["data"].quantumAssembler.init()
    { //init
    for (let x of Game["static"].quantumAssembler.area.grid.all()) {
        // x["id"] = 0;
        // x["tier"] = 0;
        x["class"] = new Game["static"].quantumAssembler.id["0"]();
        x["image"] = document.createElement("img");
        x["element"].appendChild(x["image"]);

        x["image"].src = "Art/quantum_assembler/0_0.png";
        x["image"].addEventListener("dragover", function(event) { //allow dragging
            event.preventDefault();
        });
        x["image"].addEventListener("drop", function(event) { //handle dragging
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            let output = JSON.parse(atob(data));
            x["updateContent"](output["id"], output["tier"]);
        });
        x["image"].addEventListener("mouseover", () => { //popup show
            d_ID("quantum-assembler-desc").innerHTML = `${x.class.name} ${x.class.tier.lt(5000) ? x.class.tier.toRoman() : x.class.tier.format()}${x.class.tier.lt(5000) ? ` (${x.class.tier.format(0, 0)}) ` : " "} <br> ${x.class.description()}`
        });
        x["image"].addEventListener("mouseout", () => { //popup hide
            d_ID("quantum-assembler-desc").innerHTML = `Hover over items <br> to see their cost and description`
        });

        x["updateContent"] = function(id, tier) {
            if (Game["data"].get("energy").value.gte((new Game["static"].quantumAssembler.id[id](tier)).cost)) {
                x.id = id;
                x.tier = tier;
                x.image.src = `Art/quantum_assembler/${id}_${tier}.png`;
                x.class = new Game["static"].quantumAssembler.id[id](tier);
                x["class"].init(x["x"], x["y"]);
                Game["data"].get("energy").value = Game["data"].get("energy").value.sub(x.class.cost);
            }
        }
    }

    document.body.appendChild(document.createElement("br"));
    //shop
    for (let x of Game["static"].quantumAssembler.shop.grid.all()) {
        // x["id"] = 0;
        // x["tier"] = 0;
        x["class"] = new Game["static"].quantumAssembler.id["0"]();
        x["image"] = document.createElement("img");

        x["element"].appendChild(x["image"]);
        
        x["image"].src = "Art/quantum_assembler/0_0.png";
        x["image"].draggable = true;
        
        x["image"].addEventListener("dragstart", function(event) { //initiate the drag with data
            let output = btoa(JSON.stringify(x));
            event.dataTransfer.setData("text", output);
        });
        x["image"].addEventListener("mouseover", () => { //popup show
            d_ID("quantum-assembler-desc").innerHTML = `${x.class.name} ${x.class.tier.lt(5000) ? x.class.tier.toRoman() : x.class.tier.format()}${x.class.tier.lt(5000) ? ` (${x.class.tier.format(0, 0)}) ` : " "}[${Game.format.eV(x.class.cost)}] <br> ${x.class.description()}`
        });
        x["image"].addEventListener("mouseout", () => { //popup hide
            d_ID("quantum-assembler-desc").innerHTML = `Hover over items <br> to see their cost and description`
        });

        x["cost"] = document.createElement("span");
        x["element"].appendChild(x["cost"]);
        x["cost"].className = "popupText";

        x["updateContent"] = function(id, tier) {
            this.id = id;
            this.tier = tier;
            this.image.src = `Art/quantum_assembler/${id}_${tier}.png`;
            this.class = new Game["static"].quantumAssembler.id[id.toString()](tier);
        }
    }
    //starting shop
    {
        Game.static.quantumAssembler.shop.grid.getCell(0,0).updateContent(1,1);
        Game.static.quantumAssembler.shop.grid.getCell(1,0).updateContent(1,2);
        Game.static.quantumAssembler.shop.grid.getCell(2,0).updateContent(1,3);
        Game.static.quantumAssembler.shop.grid.getCell(3,0).updateContent(1,4);
        Game.static.quantumAssembler.shop.grid.getCell(4,0).updateContent(1,5);
    }
    }
    Game["static"].get("energy").display = d_ID("quantum-assembler-energy");
    Game["static"].quantumAssembler.currencies.init(Game["data"].quantumAssembler);
});