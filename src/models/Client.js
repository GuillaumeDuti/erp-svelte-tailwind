export class Client {
    
    companyName;    
    address;        
    TVAnumber;      
    signatoryName;  
    companyFunction;
    telephoneNumber;
    email;

    constructor(companyName, address, TVAnumber, signatoryName, companyFunction, telephoneNumber, email) {
        this.companyName        = companyName;
        this.address            = address;
        this.TVAnumber          = TVAnumber;
        this.signatoryName      = signatoryName;
        this.companyFunction    = companyFunction;
        this.telephoneNumber    = telephoneNumber;
        this.email              = email;
    }
}