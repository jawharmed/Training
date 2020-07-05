var Customer = /** @class */ (function () {
    function Customer(theFisrt, thelast) {
        this.firstName = theFisrt;
        this.lastName = thelast;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "Dixon");
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
