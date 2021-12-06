// Write your solution in this file!
let employee ={name:'emp name',streetAddress:'street addr'};

//should not mutate the employee; it should return a new Object that has an updated value for the key passed
function updateEmployeeWithKeyAndValue(employee,key,value){
let newEmployee={...employee};
newEmployee[key]=value;
return newEmployee;

}
//it should mutate the employee Object passed in
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

    employee[key]=value;
    return employee;
}

// delete the property with that key from the employee Object.
// This should not mutate the original employee Object;
//return a new Object that doesn't include the identified key-value pair
function deleteFromEmployeeByKey(employee,key){
 
    let newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
//should mutate the employee Object.
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}