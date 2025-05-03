"use strict";
class OldPrinter {
    printOld(text) {
        console.log(`OLD PRINTER: ${text}`);
    }
}
class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }
    print(text) {
        this.oldPrinter.printOld(text);
    }
}
const old = new OldPrinter();
const adapted = new PrinterAdapter(old);
adapted.print("Hello from Adapter!");
