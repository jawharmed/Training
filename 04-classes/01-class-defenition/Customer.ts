class Customer {

    firstName: string;
    lastName: string;

    constructor(theFisrt: string, thelast:string){
        this.firstName = theFisrt;
        this.lastName = thelast;
    }

}

let myCustomer = new Customer("Martin", "Dixon");

//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);