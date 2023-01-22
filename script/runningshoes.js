const runningShoes = {
    brand: "Hoka",
    model: {
        name: "Bondi",
        version: 8
    },
    performanceCategory: "slow",
    stabilityLevel: "Neutral",
    cushionLevel: "Plush",
    bestSuitedFor: "road",
    color: "orange",
    colorNames: ["puffins bill", "Amber Yellow"],
    advertisedFeatures: [
        "Engineered mesh", 
        "Partially gusseted tongue", 
        "Recycled content lining mesh", 
        "Ortholite® Hybrid (recycled) sockliner", 
        "All-new lightweight, resilient foam for the improved underfoot experience", 
        "Heel pull tab", 
        "Durabrasion rubber outsole", 
        "Zonal rubber placement for weight saving", 
        "Vegan"
    ],
    carbonPlated: false,
    waterProof: false,
    vegan: true,
    laced: false,
    weightInGrams: 307,
    heelToToeDropInMillimeters: 4,
    sizeInEu: 42,
    kmUsed: 0,
    addKm: function (addedKm) {
        if (runningShoes.laced === true) {
            return this.kmUsed += addedKm;
        } else {
            console.log("You need to tie your shoes first");
        }

    },
    laceUp: function () {
        this.laced = true;
    }
};

runningShoes.laceUp();

// console.log(runningShoes.laced);

runningShoes.addKm(2);
console.log(`These ${runningShoes.brand} ${runningShoes.model.name} ${runningShoes.model.version} have been used for ${runningShoes.kmUsed} kilometers.`);