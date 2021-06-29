export default class NumberArrayCounting {

    private static validateArrayLength(array: number[]) : void {
        if (array.length == 0) {
            throw new RangeError("array should not be empty");
        }
    }

    static getAverage(array: number[]) : number {
        this.validateArrayLength(array);
        return this.getSum(array) / array.length;
    }

    static getMax(array: number[]) : number {
        this.validateArrayLength(array);
        return Math.max(...array);
    }

    static getMin(array: number[]) : number {
        this.validateArrayLength(array);
        return Math.min(...array);
    }

    static getSum(array: number[]) : number {
        return array.reduce((a, b) => a + b, 0);
    }

}