import NumberArrayCounting from "../main/numberArrayCounting";

function toBe (method: (set: number[]) => number, set:number[], expected: any) {
    // Act
    let result = method(set);

    // Assert
    expect(result).toBe(expected);
}

function toThrow (method: (set: number[]) => number, set:number[], expected: any) {
    // Act
    let act = () => method(set);

    // Assert
    expect(() => act()).toThrow(expected);
}

describe.each([
    {description: "with mixed set",    set: [20, -10],        testScenario: toBe,    expected: 5},
    {description: "with positive set", set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 4},
    {description: "with empty set",    set: [],               testScenario: toThrow, expected: RangeError}
])("getAverage()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getAverage(s), set, expected));
});

describe.each([
    {description: "with mixed set",    set: [20, -10],        testScenario: toBe,    expected: 20},
    {description: "with positive set", set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 10},
    {description: "with empty set",    set: [],               testScenario: toThrow, expected: RangeError}
])("getMax()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getMax(s), set, expected));
});

describe.each([
    {description: "with mixed set",    set: [20, -10],        testScenario: toBe,    expected: -10},
    {description: "with positive set", set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 1},
    {description: "with empty set",    set: [],               testScenario: toThrow, expected: RangeError}
])("getMin()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getMin(s), set, expected));
});

describe.each([
    {description: "with mixed set",    set: [20, -10],        testScenario: toBe, expected: 10},
    {description: "with positive set", set: [1, 2, 3, 4, 10], testScenario: toBe, expected: 20},
    {description: "with empty set",    set: [],               testScenario: toBe, expected: 0}
])("getSum()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getSum(s), set, expected));
});