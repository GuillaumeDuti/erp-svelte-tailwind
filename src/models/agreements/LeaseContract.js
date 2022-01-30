import { Agreements } from "./Agreements.js";

export class LeaseContract extends Agreements {

    constructor(client, supplier, deliveryAddress, billingAddress, duration ) {
        super(client, supplier, deliveryAddress, billingAddress, duration);
        // this.duration = this.duration * 5
    }

}