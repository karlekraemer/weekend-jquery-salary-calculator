console.log('Hello, Earthlings!');

$(document).ready(onReady);



let employees = []; 

function onReady() {
    console.log('in onReady ~(_:(1)');
    $('#submitBtn').on('click', addEmployee);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployee);
} 



function addEmployee() {
    console.log('in addEmployee!');
    let enteredEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNum: $('#idIn').val(),
        position: $('#jobTitleIn').val(),
        salary: $('#annualSalaryIn').val(),
    } 
    employees.push(enteredEmployee); 

    $('#employeeTable').append(`
    <tr style="height: 50px">
    <td>${enteredEmployee.firstName}</td>
    <td>${enteredEmployee.lastName}</td>
    <td>${enteredEmployee.idNum}</td>
    <td>${enteredEmployee.position}</td>
    <td>$${enteredEmployee.salary}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`
    ); 

    $('#firstNameIn').val('');  
    $('#lastNameIn').val('');  
    $('#idIn').val(''); 
    $('#jobTitleIn').val('');  
    $('#annualSalaryIn').val('');  t
    
    calculateMonthlyOut(); 
}




function calculateMonthlyOut() {
    let totalSalary = 0;
    console.log('in monthlyOut');
    for (let i=0; i<employees.length; i++) {
        totalSalary += Number(employees[i].salary);
    } 

    console.log('Yearly Salary: ', totalSalary); 
    let monthlySalary = totalSalary / 12;
    console.log('Monthly Salary: ',monthlySalary);
    let el = $('#totalMonthlyOut');
    el.empty();
    el.append(monthlySalary);
    
    if (monthlySalary <= 20000){ 
        $('#totalMonthlyOut').toggleClass('good-whitesmoke');  
        console.log('Your cost is under $20K!');
    }
    if (monthlySalary > 20000){ 
        $('#totalMonthlyOut').toggleClass('over-red');  
        console.log('Your cost is over $20K!'); 
    }
} 



function deleteEmployee() {
    console.log('deleted');
    $(this).parent().parent().remove(); 
    let el = $('#totalMonthlyOut');
    el.empty();
    el.append(''); 
    calculateMonthlyOut(); 
} 

