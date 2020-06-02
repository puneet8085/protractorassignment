var XLSX=require('xlsx');
var workbook=XLSX.readFile('.\\resource\\Questionare on Regression testing.xlsx');

var first_sheet_name = workbook.SheetNames[0];
var address_of_cell1 = 'B1';
var address_of_cell2 = 'B2';
var address_of_cell3 = 'B3';
 
/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
 
Function
/* Find desired cell */
var desired_cell1 = worksheet[address_of_cell1];
var desired_cell2 = worksheet[address_of_cell2];
var desired_cell3 = worksheet[address_of_cell3];

/* Get the value */
var desired_value1 = desired_cell1.v;
var desired_value2 = desired_cell2.v;
var desired_value3 = desired_cell3.v;
//priniting cell value
console.log(desired_value1 ,desired_value2,desired_value3)

//print type of variable in which we store value .i.e String
console.log(typeof desired_value3)
