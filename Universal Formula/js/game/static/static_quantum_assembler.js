addStartFunction("staticQuantumAssembler", () => {
    Game["static"].quantumAssembler = {
        currencies: new Game.classes.obb([
            {   
                name: "energy",
                properties: {
                    displayName: "Energy",
                    // display: ,
                    dataPointer: () => Game.data.mass.currencies.quarks
                }
            },
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