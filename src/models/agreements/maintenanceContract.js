import { Agreements } from "./Agreements.js";

export class maintenanceContract extends Agreements {

    counterEmail;
    financialConditions;
    additionalInformations;

    constructor(client, supplier, deliveryAddress, billingAddress, duration , counterEmail, additionalInformations, financialConditions) {

        super(client, supplier, deliveryAddress, billingAddress, duration);

        this.counterEmail = counterEmail;
        this.financialConditions = financialConditions;
        this.additionalInformations = additionalInformations;
    }

}