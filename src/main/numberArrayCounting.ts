export default class NumberArrayCounting {

    private static validateArrayNotEmpty(array: number[]): void {
        if (array.length == 0) {
            throw new RangeError("array should not be empty");
        }
    }

    private static validateArrayConsistsOfNumbers(array: number[]): void {
        for (let i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
                throw new TypeError("array must consist of numbers");
            }
        }
    }

    static getAverage(array: number[]): number {
        this.validateArrayNotEmpty(array);
        this.validateArrayConsistsOfNumbers(array);
        return this.getSum(array) / array.length;
    }

    static getMax(array: number[]): number {
        this.validateArrayNotEmpty(array);
        this.validateArrayConsistsOfNumbers(array);
        return Math.max(...array);
    }

    static getMin(array: number[]): number {
        this.validateArrayNotEmpty(array);
        this.validateArrayConsistsOfNumbers(array);
        return Math.min(...array);
    }

    static getSum(array: number[]): number {
        this.validateArrayConsistsOfNumbers(array);
        return array.reduce((a, b) => a + b, 0);
    }

}