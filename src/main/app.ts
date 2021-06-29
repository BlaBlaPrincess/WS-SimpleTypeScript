class App {
    static main(args:string[]) : void {

    }
}

if (require.main === module) {
    App.main(process.argv.slice(2));
}