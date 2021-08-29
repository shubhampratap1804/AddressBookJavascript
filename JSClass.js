class Employee{
    id
    salary

    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){
        return this.name;
    }
    set name(name){
        let nameRegex = RegExp("^[a-zA-Z]{3,}");
        if(nameRegex.test(name))
        this.name = name;
            else throw "Name is incorrect!";
    }

    toString(){
        const options = {year:'numeric',month:'long',day:'numeric'};
        const empDate = !this.startDate ? "undefined":
                        this.startDate.toLocaleDateString()
        return 'id is: '+this.id +' name is: '+this.name +' salary is: '+this.salary;
    }
}

let myEmployee = new Employee(1,"Mark",300000);
