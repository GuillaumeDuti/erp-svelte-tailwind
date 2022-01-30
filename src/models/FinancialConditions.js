export class financialConditions {

    maintenanceCosts;
    IWSCosts;
    priceByColorPrint;
    priceByBWPrint;

    constructor(maintenanceCosts, IWSCosts, priceByColorPrint, priceByBWPrint) {
        this.maintenanceCosts   = maintenanceCosts;
        this.IWSCosts           = IWSCosts;
        this.priceByColorPrint  = priceByColorPrint;
        this.priceByBWPrint     = priceByBWPrint;
    }
}