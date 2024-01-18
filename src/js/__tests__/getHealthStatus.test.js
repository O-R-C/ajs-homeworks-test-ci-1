import getHealthStatus from "../getHealthStatus";

const cases = [
  ["mage", 90, "healthy1"],
  ["warrior", 50, "wounded"],
  ["warlock", 49, "wounded"],
  ["druid", 15, "wounded"],
  ["bard", 10, "critical"],
  ["kenny", 0, "dead"],
];

describe("check health status", () => {
  test.each(cases)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = getHealthStatus({ name: firstArg, health: secondArg });
      expect(result).toBe(expectedResult);
    }
  );
});
