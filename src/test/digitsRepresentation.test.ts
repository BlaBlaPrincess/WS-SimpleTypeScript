import DigitsRepresentation from "../main/digitsRepresentation";

function toBe (method: (num: number) => number[], num:number, expected: any) {
    // Act
    let result = method(num);

    // Assert
    expect(result).toStrictEqual(expected);
}

function toThrow (method: (num: number) => number[], num:number, expected: any) {
    // Act
    let act = () => method(num);

    // Assert
    expect(() => act()).toThrow(expected);
}

describe.each([
    {description: "with positive num", num: 82416214, testScenario: toBe, expected: [8, 2, 4, 1, 6, 2, 1, 4]},
    {description: "with negative num", num: -572461,  testScenario: toBe, expected: [5, 7, 2, 4, 6, 1]},
    {description: "with single digit", num: 1,        testScenario: toBe, expected: [1]},
])("getDigitsArray()", ({description, num, testScenario, expected}) => {
    test(description, () => testScenario((n) => DigitsRepresentation.getDigitsArray(n), num, expected));
});