var xlsx=require("xlsx");


var workbook=xlsx.readFile(".\\resource\\Questionare on Regression testing.xlsx")
var sheet= workbook.Sheets["Sheet1"];
// convert data into json object

var data=xlsx.utils.sheet_to_json(sheet);

//get the length of json array
console.log(data.length)

//print value for a given index by passign index value
var index = [];
for (var x in data) {
   index.push(x);
}

console.log(data[index[19]]);




    //method to get value from  a particular column
var newdata=data.map(function(record)
{
    // give the column name as i do record.Domain to get value from a particular column
    var cellvalue=record.Domain;
})

//var workbook2= xlsx.utils.book_new;


// pass your json object in "json to sheet method" as i pass data to log error in sheet
var Sheet2=xlsx.utils.json_to_sheet(data)

xlsx.utils.book_append_sheet(workbook,Sheet2,"LogError");


//sheet in which you want to write
xlsx.writeFile(workbook,"NewDatasheet.xlsx")
*/