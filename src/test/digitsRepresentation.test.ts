import DigitsRepresentation from "../main/digitsRepresentation";

describe("getDigitsArray()", () => {

    test("with positive num", () => {
        // Arrange
        let num = 82416214;

        // Act
        let result = DigitsRepresentation.getDigitsArray(num);

        // Assert
        expect(result).toStrictEqual([8, 2, 4, 1, 6, 2, 1, 4]);
    });

    test("with negative num", () => {
        // Arrange
        let num = -572461;

        // Act
        let result = DigitsRepresentation.getDigitsArray(num);

        // Assert
        expect(result).toStrictEqual([5, 7, 2, 4, 6, 1]);
    });

    test("with single digit", () => {
        // Arrange
        let num = 1;

        // Act
        let result = DigitsRepresentation.getDigitsArray(num);

        // Assert
        expect(result).toStrictEqual([1]);
    });

});