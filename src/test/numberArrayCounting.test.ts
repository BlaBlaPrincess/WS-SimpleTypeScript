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
    {description: "with mixed set NaN first", set: [NaN, 20, -10],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed set NaN last",  set: [20, -10, NaN],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed number set",    set: [-20, 10],        testScenario: toBe,    expected: -5},
    {description: "with positive set",        set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 4},
    {description: "with single digit",        set: [2],              testScenario: toBe,    expected: 2},
    {description: "with bigint set",          set: [9007199254740991, 27021597764222973],
                                                                     testScenario: toBe,    expected: 18014398509481982},
    {description: "with empty set",           set: [],               testScenario: toThrow, expected: RangeError},
    {description: "with zero",                set: [0],              testScenario: toBe,    expected: 0},
    {description: "with NaN",                 set: [NaN],            testScenario: toThrow, expected: TypeError}
])("getAverage()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getAverage(s), set, expected));
});

describe.each([
    {description: "with mixed set NaN first", set: [NaN, 20, -10],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed set NaN last",  set: [20, -10, NaN],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed number set",    set: [-20, 10],        testScenario: toBe,    expected: 10},
    {description: "with positive set",        set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 10},
    {description: "with single digit",        set: [2],              testScenario: toBe,    expected: 2},
    {description: "with bigint set",          set: [9007199254740991, 27021597764222973],
                                                                     testScenario: toBe,    expected: 27021597764222973},
    {description: "with empty set",           set: [],               testScenario: toThrow, expected: RangeError},
    {description: "with zero",                set: [0],              testScenario: toBe,    expected: 0},
    {description: "with NaN",                 set: [NaN],            testScenario: toThrow, expected: TypeError}
])("getMax()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getMax(s), set, expected));
});

describe.each([
    {description: "with mixed set NaN first", set: [NaN, 20, -10],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed set NaN last",  set: [20, -10, NaN],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed number set",    set: [-20, 10],        testScenario: toBe,    expected: -20},
    {description: "with positive set",        set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 1},
    {description: "with single digit",        set: [2],              testScenario: toBe,    expected: 2},
    {description: "with bigint set",          set: [9007199254740991, 27021597764222973],
                                                                     testScenario: toBe,    expected: 9007199254740991},
    {description: "with empty set",           set: [],               testScenario: toThrow, expected: RangeError},
    {description: "with zero",                set: [0],              testScenario: toBe,    expected: 0},
    {description: "with NaN",                 set: [NaN],            testScenario: toThrow, expected: TypeError}
])("getMin()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getMin(s), set, expected));
});

describe.each([
    {description: "with mixed set NaN first", set: [NaN, 20, -10],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed set NaN last",  set: [20, -10, NaN],   testScenario: toThrow, expected: TypeError},
    {description: "with mixed number set",    set: [-20, 10],        testScenario: toBe,    expected: -10},
    {description: "with positive set",        set: [1, 2, 3, 4, 10], testScenario: toBe,    expected: 20},
    {description: "with single digit",        set: [2],              testScenario: toBe,    expected: 2},
    {description: "with bigint set",          set: [9007199254740991, 27021597764222973],
                                                                     testScenario: toBe,    expected: 36028797018963964},
    {description: "with empty set",           set: [],               testScenario: toBe,    expected: 0},
    {description: "with zero",                set: [0],              testScenario: toBe,    expected: 0},
    {description: "with NaN",                 set: [NaN],            testScenario: toThrow, expected: TypeError}
])("getSum()", ({description, set, testScenario, expected}) => {
    test(description, () => testScenario((s) => NumberArrayCounting.getSum(s), set, expected));
});