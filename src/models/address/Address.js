export class Address {

    street;
    number;
    postalCode;
    city;
    mailBox;

    constructor(street, number, postalCode, city, mailBox = undefined ) {
        this.street     = street;
        this.number     = number;
        this.mailBox    = mailBox;
        this.postalCode = postalCode;
        this.city       = city;
    }

    set City(value) {
        this.city = value;
    }
}