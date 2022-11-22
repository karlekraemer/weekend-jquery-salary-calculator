$(readyNow)
function readyNow() {
    console.log("ready Now")
    $('#submitBtn').on('click', addEmployee)
    $("#product-table").on('click', ".remove-employee", removeThis)
}
function removeThis() {
    $(this).parent().parent().remove();
}
function addEmployee() {
    let employee = {
        firstName: $("#first-name"),
        lastName: $("#last-name"),
        idNumber: $("#id-number"),
        jobTitle: $("#job-title"),
        annualSalary: $("#annual-salary"),
    }
    let firstName = $("#first-name").val();
    let lastName = ($("#last-name").val());
    let idNumber = Number($("#id-number").val());
    let jobTitle = $("#job-title").val();
    let annualSalary = Number($("#annual-salary").val())
    console.log(firstName, lastName);
    let employeeInfo = $(`
      <tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${idNumber}</td>
          <td>${jobTitle}</td>
          <td>${annualSalary}</td>
          <td><button class="remove-employee">Remove</button></td>
      </tr>
    `)
    $("#product-table").append(employeeInfo);
}
function removeThis() {
    $(this).parent().parent().remove();
}
function monthlyCost() {
    let total = 0;
    $(".monthly-cost").empty()
    for (let salary of employees) {
        total += Number(salary.annualSalary)
    }
    $(".monthly.cost").appened(total / 12)
}
if ((total / 12) >= 20000) {
    $(".monthly.cost").css('background-color', 'red');
}