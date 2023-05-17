addStartFunction("staticMass", () => {
    console.log("a");
    Game["static"].mass = {
        currencies: new Game.classes.obb([
            {   
                name: "quarks",
                properties: {
                    displayName: "Quarks",
                    display: document.getElementById("display-currency"),
                    dataPointer: () => Game.data.mass.currencies.quarks
                }
            },
            {
                name: "atoms",
                properties: {
                    displayName: "Atoms",
                    display: document.getElementById("display-super-points"),
                    dataPointer: () => Game.data.mass.currencies.atoms
                }
            },
            {
                name: "particles",
                properties: {
                    displayName: "Particles",
                    display: document.getElementById("display-mega-points"),
                    dataPointer: () => Game.data.mass.currencies.particles
                }
            },
            {
                name: "molecules",
                properties: {
                    displayName: "Molecules",
                    display: document.getElementById("display-cosmic-points"),
                    dataPointer: () => Game.data.mass.currencies.molecules
                }
            }
        ], [
            {
                name: "updateDisplayCurrency",
                value: function() {
                    display.update("currency")(this.display, this.displayName, this.dataPointer().value);
                }
            },
            {
                name: "updateDisplayGain",
                value: function() {
                    display.update("gain")(this.display, this.displayName, this.dataPointer().gain);
                }
            },
        ])
    }
});