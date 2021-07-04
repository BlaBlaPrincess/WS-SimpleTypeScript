import DigitsRepresentation from "./digitsRepresentation";
import NumberArrayCounting from "./numberArrayCounting";

class App {
    static main(args: string[]): void {
        if (args.length != 0) {
            for (const arg in args) {
                let num = parseInt(arg);
                console.log(`Num: ${num}`);
                this.present(num);
            }
        } else {
            console.log("Type exit to finish\n");
            let stdin = process.openStdin();
            stdin.addListener("data", (data) => {
                data = data.toString().toLowerCase().trim();
                if (data !== '') {
                    if (data === "exit") {
                        process.exit();
                    }
                    try {
                        let num = parseInt(data);
                        if (data !== num.toString()) {
                            console.log(`Num: ${num}`);
                        }
                        this.present(num);
                    } catch (e) {
                        console.log(`Err: ${e.message}`);
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