import { Agreements } from "./Agreements";

export class SalesContract extends Agreements {

    // mettre ce qui se différencie d'un contrat normal

    constructor(client, supplier, deliveryAddress, billingAddress, duration, ) {
        super(client, supplier, deliveryAddress, billingAddress, duration);
        
    }

}