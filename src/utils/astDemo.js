// // 示例 AST，您可以根据需要修改或扩展
// const ast = {
//   type: "Program",
//   body: [
//     {
//       type: "VariableDeclaration",
//       declarations: [
//         {
//           type: "VariableDeclarator",
//           id: { type: "Identifier", name: "x" },
//           init: { type: "Literal", value: 5 },
//         },
//       ],
//       kind: "let",
//     },
//     {
//       type: "FunctionDeclaration",
//       id: { type: "Identifier", name: "add" },
//       params: [
//         { type: "Identifier", name: "a" },
//         { type: "Identifier", name: "b" },
//       ],
//       body: {
//         type: "BlockStatement",
//         body: [
//           {
//             type: "ReturnStatement",
//             argument: {
//               type: "BinaryExpression",
//               left: { type: "Identifier", name: "a" },
//               operator: "+",
//               right: { type: "Identifier", name: "b" },
//             },
//           },
//         ],
//       },
//     },
//     {
//       type: "ExpressionStatement",
//       expression: {
//         type: "CallExpression",
//         callee: { type: "Identifier", name: "add" },
//         arguments: [
//           { type: "Identifier", name: "x" },
//           { type: "Literal", value: 3 },
//         ],
//       },
//     },
//   ],
// };
//
// function generateCode(node) {
//   switch (node.type) {
//     case "Program":
//       return node.body.map(generateCode).join("\n");
//     case "VariableDeclaration":
//       return `${node.kind} ${node.declarations.map(generateCode).join(", ")}`;
//     case "VariableDeclarator":
//       return `${generateCode(node.id)}${node.init ? ` = ${generateCode(node.init)}` : ""}`;
//     case "Identifier":
//       return node.name;
//     case "Literal":
//       return typeof node.value === "string"
//         ? `"${node.value}"`
//         : String(node.value);
//     case "FunctionDeclaration":
//       return `function ${generateCode(node.id)}(${node.params.map(generateCode).join(", ")}) ${generateCode(node.body)}`;
//     case "BlockStatement":
//       return `{\n${node.body.map((stmt) => "  " + generateCode(stmt)).join("\n")}\n}`;
//     case "ReturnStatement":
//       return `return ${generateCode(node.argument)}`;
//     case "BinaryExpression":
//       return `${generateCode(node.left)} ${node.operator} ${generateCode(node.right)}`;
//     case "ExpressionStatement":
//       return generateCode(node.expression);
//     case "CallExpression":
//       return `${generateCode(node.callee)}(${node.arguments.map(generateCode).join(", ")})`;
//     default:
//       return `/* Unsupported node type: ${node.type} */`;
//   }
// }
//
// function analyzeAST(ast) {
//   const steps = [];
//   let stepCount = 1;
//
//   function traverse(node) {
//     switch (node.type) {
//       case "Program":
//         node.body.forEach(traverse);
//         break;
//       case "VariableDeclaration":
//       case "FunctionDeclaration":
//       case "ExpressionStatement":
//         steps.push(`Step ${stepCount++}: ${generateCode(node)}`);
//         break;
//       case "BlockStatement":
//         node.body.forEach(traverse);
//         break;
//     }
//   }
//
//   traverse(ast);
//   return steps;
// }
//
// const executionSteps = analyzeAST(ast);
// console.log("Execution steps:");
// executionSteps.forEach((step) => console.log(step));
