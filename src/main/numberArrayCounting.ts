export default class NumberArrayCounting {

    static getSum(array: number[]) : number {
        return array.reduce((a, b) => a + b, 0);
    }

}