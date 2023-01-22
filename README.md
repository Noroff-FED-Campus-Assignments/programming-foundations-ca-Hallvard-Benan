[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9764555&assignment_repo_type=AssignmentRepo)
# Introduction

This is a school assignment built with Vite. This project uses prettier and eslint for formatting.

## Getting started

```bash
# install deps
npm install

# Run the dev server
npm run dev
```

## runningShoes Object

I chose my new running shoes.

This object has the following properties:

## Minimum acceptance Criteria

- brand (String), the manufacturer of the shoes
- model (Object), The model name and version number of the shoes
- performanceCategory (String), Whether they're fast race shoes or slower shoes built for comfort
- stabilityLevel (String), How much stability, support or guidance they offer
- cushionLevel (String), whether they're hard soled shoes or soft
- bestSuitedFor (String), whether they're road, trail or other type of shoes
- color (String), What i would call the main color of the shoe
- colorNames (Array), what the official names of the colors are according to the manufacturer
- advertisedFeatures (Array), a list of features that are advertised about the shoes on the manufacturers website
- carbonPlated (Boolean), do the shoes contain a carbon plate or not
- waterProof (Boolean), are they waterproof
- vegan (Boolean), are they vegan
- laced (Boolean), are they currently laced up
- weightInGrams (Number), the weight of the shoes in grams
- heelToToeDropInMillimeters (Number), the height difference in the heel of the shoe and the toe, in millimeters
- sizeInEu (Number), shoe size in EU sizes
- kmUsed (Number), total amount of kilometers ran in the shoes
- addKm (Function), adds 1 to the kmUsed property if the shoes are laced (laced === true), otherwise they log that you need to tie the shoes.
- laceUp (Function), changes the value of the laced property to true when called. 

## Credits

Scaffold by Monde Sineke
Gathered some of the info about the shoes on Hokas website: https://www.hoka.com/en/no/bondi-8/bondi-8/1123202.html