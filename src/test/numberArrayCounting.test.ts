import NumberArrayCounting from "../main/numberArrayCounting";

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