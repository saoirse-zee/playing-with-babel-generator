import { default as babelGenerator } from "https://jspm.dev/@babel/generator";
const generate = babelGenerator.default;

// Fetch ASTs. 
const astNumericLiteral = Deno.readTextFileSync("./ast/astNumericLiteral.json")
const astDeclaration = Deno.readTextFileSync("./ast/astDeclaration.json")
const astProgram = Deno.readTextFileSync("./ast/astProgram.json")

// Generate JS code
const numberCode = generate(JSON.parse(astNumericLiteral)).code
const varDeclarationCode = generate(JSON.parse(astDeclaration)).code
const programCode = generate(JSON.parse(astProgram)).code

// Write to js files
// These are runnable in the browser!
Deno.writeTextFileSync("generated-js/number.js", numberCode);
Deno.writeTextFileSync("generated-js/variable-declaration.js", varDeclarationCode);
Deno.writeTextFileSync("generated-js/program.js", programCode);