class OldPrinter {
    printOld(text: string): void {
        console.log(`OLD PRINTER: ${text}`);
    }
}

interface NewPrinter {
    print(text: string): void;
}

class PrinterAdapter implements NewPrinter {
    constructor(private oldPrinter: OldPrinter) {}

    print(text: string): void {
        this.oldPrinter.printOld(text);
    }
}

const old = new OldPrinter();
const adapted: NewPrinter = new PrinterAdapter(old);

adapted.print("Hello from Adapter!");
