import NumberArrayCounting from "../main/numberArrayCounting";

describe("getAverage()", () => {

    test("with positive set", () => {
        // Arrange
        let set = [1, 2, 3, 4, 10];

        // Act
        let result = NumberArrayCounting.getAverage(set);

        // Assert
        expect(result).toBe(4);
    });

    test("with mixed set", () => {
        // Arrange
        let set = [20, -10];

        // Act
        let result = NumberArrayCounting.getAverage(set);

        // Assert
        expect(result).toBe(5);
    });

    test("with empty set", () => {
        // Arrange
        let set: number[] = [];

        // Act
        let act = () => NumberArrayCounting.getAverage(set);

        // Assert
        expect(() => act()).toThrow(RangeError);
    });

});

describe("getMax()", () => {

    test("with positive set", () => {
        // Arrange
        let set = [1, 2, 3, 4, 10];

        // Act
        let result = NumberArrayCounting.getMax(set);

        // Assert
        expect(result).toBe(10);
    });

    test("with mixed set", () => {
        // Arrange
        let set = [20, -10];

        // Act
        let result = NumberArrayCounting.getMax(set);

        // Assert
        expect(result).toBe(20);
    });

    test("with empty set", () => {
        // Arrange
        let set: number[] = [];

        // Act
        let act = () => NumberArrayCounting.getMax(set);

        // Assert
        expect(() => act()).toThrow(RangeError);
    });

});

describe("getMin()", () => {

    test("with positive set", () => {
        // Arrange
        let set = [1, 2, 3, 4, 10];

        // Act
        let result = NumberArrayCounting.getMin(set);

        // Assert
        expect(result).toBe(1);
    });

    test("with mixed set", () => {
        // Arrange
        let set = [20, -10];

        // Act
        let result = NumberArrayCounting.getMin(set);

        // Assert
        expect(result).toBe(-10);
    });

    test("with empty set", () => {
        // Arrange
        let set: number[] = [];

        // Act
        let act = () => NumberArrayCounting.getMin(set);

        // Assert
        expect(() => act()).toThrow(RangeError);
    });

});

describe("getSum()", () => {

    test("with positive set", () => {
        // Arrange
        let set = [1, 2, 3, 4, 10];

        // Act
        let result = NumberArrayCounting.getSum(set);

        // Assert
        expect(result).toBe(20);
    });

    test("with mixed set", () => {
        // Arrange
        let set = [20, -10];

        // Act
        let result = NumberArrayCounting.getSum(set);

        // Assert
        expect(result).toBe(10);
    });

    test("with empty set", () => {
        // Arrange
        let set: number[] = [];

        // Act
        let result = NumberArrayCounting.getSum(set);

        // Assert
        expect(result).toBe(0);
    });

});