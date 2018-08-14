import isBalancedBrackets from "../src";

test("The isBalancedBrackets function should be defined", () => {
  expect(isBalancedBrackets).toBeDefined();
});

test("Should validate", () => {
  expect(isBalancedBrackets("")).toBeFalsy();
  expect(isBalancedBrackets("(){}[]")).toBeTruthy();
  expect(isBalancedBrackets("[{()}](){}")).toBeTruthy();
  expect(isBalancedBrackets("[]{()")).toBeFalsy();
  expect(isBalancedBrackets("[{)]")).toBeFalsy();
});
