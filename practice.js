
function employee(){
    let employee={name:"Sam", age:30, title: "Dev"}; //declare and initialize literal 
console.log(employee.name);

let newEmployee = {...employee}; //create copy of obj

console.log(employee==newEmployee)//false with comparison without type
console.log(employee===newEmployee)//false with comparison with type

newEmployee.name="Inessa";
console.log(newEmployee)

delete newEmployee.name; //delete property 
console.log(newEmployee)

newEmployee.name="Inessa"
console.log(newEmployee)
}

//employee();

let myCar =new Object();//declare and initialize object using new ()
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;


console.log(myCar.color)//undefined because it is unassigned property 

myCar['color']='yellow'
console.log(myCar.color)
/* mocha test 
describe('myCar', function() {
    describe('verifyUnassignedPropertyReturnUndefined()', function () {
     
      })
      it('returns an employee with the original key value pairs and the new key value pair', function () {
        expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
          name: 'Sam',
          streetAddress: '11 Broadway'
        });
      });
  */