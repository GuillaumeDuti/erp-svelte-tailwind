export class Agreements {
    
    client;
    supplier;
    deliveryAddress;
    billingAddress;
    duration;
    pack;
    
    constructor(client, supplier, deliveryAddress, billingAddress, duration, pack = true) {
        this.client             = client
        this.supplier           = supplier;
        this.deliveryAddress    = deliveryAddress;
        this.billingAddress     = billingAddress;
        this.duration           = duration;
        this.pack               = pack
    }
}