
//Полиморфизм
function Company(age, finans) {
    this.age = age;
    this.finans = finans;
    this.getInfo = function() {
        return "I am " + this.age + " years old " +
        "and finans " + this.finans +" kilo.";
    }
//Наследие елементов из класса компании в класс руководителя
}
function Employee(age, finans, salary) {
    this.salary = salary;
    this.age = age;
    this.finans = finans;
    this.getInfo = function() {
        return "I am " + this.age + " years old " +
        "and finans " + this.finans +" bitcoin " +
        "and earns " + this.salary + " dollar.";
    }
//Создание нового элемента помимо элементов родительского класса
}
//Вызов функции
Employee.prototype = new Company();
Employee.prototype.constructor = Employee;
function showInfo(obj) {
    document.write(obj.getInfo() + "<br>");
}
//Расчет данных для вывода внутренних методов
var company = new Company(70,9000000);
var employee = new Employee(23,80000,50000000);
showInfo(company);
showInfo(employee);
