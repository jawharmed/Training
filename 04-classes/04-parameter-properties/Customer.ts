class Customer3 {

    constructor(private _firstName: string, private _lastName:string){
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

}

let myCustomer3 = new Customer3("Martin", "Robert");

//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);