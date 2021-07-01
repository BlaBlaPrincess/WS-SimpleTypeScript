import DigitsRepresentation from "./digitsRepresentation";
import NumberArrayCounting from "./numberArrayCounting";

class App {
    static main(args:string[]) : void {
        if (args.length != 0) {
            for (const arg in args) {
                this.present(+arg);
            }
        } else {
            let stdin = process.openStdin();
            stdin.addListener("data", (data) => {
                if (data.toString().trim() !== '') {
                    try {
                        this.present(data);
                    } catch (e) {
                        console.log(`Err: ${e.message}`);
                        process.exit();
                    }
                }
            });
        }
    }

    private static present(input: number): void {
        let digits = DigitsRepresentation.getDigitsArray(input);
        console.log(`Avg: ${NumberArrayCounting.getAverage(digits)}`);
        console.log(`Max: ${NumberArrayCounting.getMax(digits)}`);
        console.log(`Min: ${NumberArrayCounting.getMin(digits)}`);
        console.log(`Sum: ${NumberArrayCounting.getSum(digits)}`);
    }
}

if (require.main === module) {
    App.main(process.argv.slice(2));
}