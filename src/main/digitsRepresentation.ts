export default class DigitsRepresentation {

    static getDigitsArray(number: number) : number[] {
        let abs = Math.abs(number);

        let array = [];
        let sNum = abs.toString();

        for (let i = 0; i < sNum.length; i++) {
            array.push(+sNum[i]);
        }
        return array;
    }

}