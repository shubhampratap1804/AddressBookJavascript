console.log("Welcome to address book using javascrip");
const prompt = require("prompt-sync");
let contactList = new Array(AddressBook);
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
    set setPhoneNumber(phoneNumber) {
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
        contactList.push(addressBook);
        console.log(contactList);
    }
 
    addNewAddressBook(){
        let newAddressBook = new AddressBook();
        newAddressBook.addContacts();
    }
 
    editContacts(){
         let firstName = prompt(`Enter first name of the existing contact`);
         array.forEach(AddressBook => {
             if(contactList.getFirstName() == firstName){
                 console.log("First name found, What you want to edit? ");
                 console.log("Enter 1 to edit first name: "+"\n Enter 2 to edit last name: "+"\n Enter 3 to edit address: "+
                 "\n Enter 4 to edit city name: "+"\n Enter 5 to edit state name: "+"\n Enter 6 to edit zip code: "+
                 "\n Enter 7 to edit phone number: "+"\n Enter 8 to edit email id: ");
 
                 let optionSelected = prompt(`Enter your choice: `);
                 switch(optionSelected){
                     case 1:
                         let firstName = prompt(`Enter new first name: `);
                         this.setFirstName(firstName);
                         break;
                     case 2:
                         let lastName = prompt(`Enter new last name: `);
                         this.setLastName(lastName);
                         break;
                     case 3:
                         let address = prompt(`"Enter new address: `);
                         this.setAddress(address);
                         break;
                     case 4:
                         let city = prompt(`Enter new city: `);
                         this.setCity(city);
                         break;
                     case 5:
                         let state = prompt(`Enter new state: `);
                         this.setState(state);
                         break;
                     case 6:
                         let zip = prompt(`Enter new zip code: `);
                         this.setZip(zip);
                         break;
                     case 7:
                         let phoneNumber = prompt(`Enter new phone number: `);
                         this.setPhoneNumber(phoneNumber);
                         break;
                     case 8:
                         let email = prompt(`Enter new email address: `);
                         this.setEmail(email);
                         break;                     
                 }
             } else console.log("First name not found!");
         });
    }
 
    deleteContact(){
        let firstName = prompt(`Enter first name for deleting contact!`);
        array.forEach(AddressBook => {
            if(contactList.getFirstName == firstName){
                contactList.splice(firstName,1);
            } else console.log("First name not found!");
        });
    }

    countNumberOfContacts(){
        console.log("Number of people in contact list are: ");
        let number = contactList.reduce((number) =>{
            number+=1;
            return number;
        });
        console("Number of people in contact list are: "+number);
    }

    duplicateContact(){
        let firstName = prompt(`Enter first name of the person: `);
        if(contactList.some(something => something.getFirstName == firstName)){
            console.log("Duplicate contact exists!")
        } else console.log("Duplicate contact doesn't exists!");
    }

    searchByCityAndState(){
        let city = prompt(`Enter city to search a person:`);
        let state = prompt(`Enter state to search a person:`);
        
        array.forEach(AddressBook => {
            if(contactList.getCity == city && contactList.getState == state){
                console.log("City and state you have entered are: "+city + " and "+state);
            }
        });
        contactList.filter(addressBook => addressBook.city == city)
        contactList.filter(addressBook => addressBook.state == state)
        contactList.forEach(addressBook => console.log(contactList));
    }

    viewByCityOrState(){
        let city = prompt(`Enter city by which you want to view: `);
        let state = prompt(`Enter state by which you want to view: `);
        contactList.array.forEach(addressBook => {
            if(addressBook.getCity() == city && addressBook.getState() == state){
                contactList.forEach(addressBook=> console.log(contactList));
            }
        });
    }

    countByCity(city) {
        return contactList.filter(addressBook => addressBook.city == city).reduce((count,addressBook) => count += 1, 0);
    }
    countByState(state) {
        return contactList.filter(addressBook  => addressBook .state == state).reduce((count,addressBook)=> count +=1, 0);
}