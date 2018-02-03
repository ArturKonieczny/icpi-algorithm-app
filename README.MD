# iCPI Algorithm app

[App](https://arturkonieczny.github.io/icpi-algorithm-app/index.html) that helps to understand the basics of iCPI-tree algorithm for finding spatial collocations.

## Usage

### Upload a .csv file containing your vertices list.

ID;TraitID;PositionX;PositionY

* ID - Positive Integer
* TraitID - Non-negative Integer
* PositionX - Number
* PositionY - Number

### Set maximum distance for vartices to be considered neighbours.

Number, should be greater than 0, default: 3.

### Set minimum prevalence for collocation to be considered valid.

Number, should be between 0 and 1. Default value: 0.

### Buttons

* Start - Process input data, display first step.
* Reset - Reset app to default values. Does not clear the file input data.
* Next - Proceed to the next step of the algorithm if possible.
* Prev - Proceed to the previous step of the algorithm if possible.

## Development

Download this repository and run npm install.

Scripts:
npm run build
npm run build:watch
npm run build:production

## Important dependencies

### Processing input data into iCPI-tree:

[icpi-tree](https://www.npmjs.com/package/icpi-tree)

### iCPI-Algorithm - core of the app:

[icpi-tree-algorithm](https://www.npmjs.com/package/icpi-algorithm)
