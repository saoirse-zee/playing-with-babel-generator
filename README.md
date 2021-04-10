# Demonstrate how to generate JS from an AST

Let's take an abstract syntax tree and turn it into Javascript using [Babel's generator](https://babeljs.io/docs/en/babel-generator). We'll use ASTs that conform to the [Estree spec](https://github.com/estree/estree). 

## Pre-reqs
Install [deno](https://deno.land/).

## Run it
`deno run --allow-read --allow-write generate-js-from-ast.ts`

Look in `/generated-js` for your new Javascript!

## Ideas for exploration
1) Mess with the ASTs in `/ast`, which contains examples of varying complexity. Re-run the generator and see what changes in the JS.

2) Use [Babel Sandbox](https://babelsandbox.com/) or [AST Explorer](https://astexplorer.net/) to create some more ASTs from JS. Run these through our generator.

3) Write some code that creates an AST. Maybe in another language, like SML! Then run that through the generator. This is how you can "run" SML (or any other language) in the browser!

4) Make a baby React in SML. Use [this guide](https://pomb.us/build-your-own-react/) (or other like it) for inspiration. 
