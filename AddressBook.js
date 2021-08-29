console.log("Welcome to address book using javascrip");
const prompt = require("prompt-sync");
class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    }

   addContacts(){
       let firstName = prompt(`Enter first name: `);
       this.setFirstName(firstName);
       let lastName = prompt(`Enter last name: `);
       this.setLastName(lastName);
       let address = prompt(`Enter address name: `);
       this.setAddress(address);
       let city = prompt(`Enter city name: `);
       this.setCity(city);
       let state = prompt(`Enter state name: `);
       this.setState(state);
       let zip = prompt(`Enter zip: `);
       this.setZip(zip);
       let phoneNumber = prompt(`Enter phone-number: `);
       this.setphoneNumber(phoneNumber);
       let email = prompt(`Enter email: `);
       this.setEmail(email);

       let addressBook = new AddressBook(firstName,lastName,address,city,state,zip,phoneNumber,email);
       console.log(addressBook.toString());
   }

   addNewAddressBook(){
       let newAddressBook = new AddressBook();
       newAddressBook.addContacts();
   }
    get getFirstName() { 
        return this.firstName; 
    }

    set setFirstName(firstName) {
        let firstNamePattern = RegExp('^[A-Z]{1}[a-z]{2,}'); 
        if(firstNamePattern.test(firstName)) {
        this.firstName = firstName;
        }
        else throw 'First Name is Incorrect !';
    }
    get getLastName() {
        return this._lastName;
    }
    set setLastName(lastName) {
        let lastNamePattern = RegExp('^[A-Z]{1}[a-z]{2,}');
        if(lastNamePattern.test(lastName))
        this.lastName = this.lastName;
        else throw 'Last Name is Incorrect !';
    }
    get getAddress() {
        return this.address;
    }
    set setAddress(address) {
        let addressPattern = RegExp('[A-Za-z]{4,}');
        if(addressPattern.test(address))
        this.address = this.address;
        else throw 'Address is Incorrect !';
    }
    get getCity() {
        return this.city;
    }
    set setCity(city) {
        let cityPattern = RegExp('[A-Za-z]{4,}');
        if(cityPattern.test(city))
        this.city = city;
        else throw 'City is Incorrect!';
    }
    get getState() {
        return this.state;
    }
    set setState(state) {
        let statePattern = RegExp('[A-Za-z]{4,}');
        if(statePattern.test(state))
        this.state = state;
        else throw 'State is Incorrect !';
    }
    get getZip() {
        return this.zip;
    }
    set setZip(zip) {
        let zipPattern = RegExp('^[0-9]{6}');
        if(zipPattern.test(zip))
        this.zip = zip;
        else throw 'Zip is Incorrect!';
    }
    get getPhoneNumber() {
        return this.phoneNumber;
    }
    set setphoneNumber(phoneNumber) {
        let phoneNumberPattern = RegExp('^(0-9){10}');
        if(phoneNumberPattern.test(phoneNumber))
        this.phoneNumber = this.phoneNumber;
        else throw 'Phone Number is Incorrect!';
    }
    get email() {
        return this.email;
    }
    set setEmail(email)  {
        let emailPattern = RegExp('^([a-zA-Z0-9]+.[a-zA-Z0-9]?)@([a-z]{2,6})+.([a-z]{2,4})?');
        if(emailPattern.test(email))
        this.email = this.email;
        else throw 'Email is Incorrect!';
    }

    set myEmail(email){
        try {
            let emailPattern = RegExp('^([a-zA-Z0-9])+.[a-zA-Z0-9]?)@([a-z]{2,6})+.([a-z]{2,4})?');
        if(emailPattern.test(email))
        this.email = this.email;
        } catch (error) {
            throw 'Email is Incorrect!';
        }
    }
    toString() {
        return "\nFirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}