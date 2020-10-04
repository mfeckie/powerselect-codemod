# powerselect-onchange


A collection of codemods for powerselect-onchange.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx powerselect-onchange <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add powerselect-onchange
powerselect-onchange <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [onchange](transforms/onchange/README.md)
* [onopen](transforms/onopen/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`