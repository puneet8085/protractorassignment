
// const fs = require('fs');

// var json2xlsx = require('json2xlsx');

var xlsx=require("xlsx");
var jsonarray;
var workbook
var sheet
// always declare file location to below variable.
var fileaddress=".\\resource\\Questionare on Regression testing.xlsx";


//method to convert excel data into JSon and return that json 
function exceltojson(filepath)
{
 workbook=xlsx.readFile(filepath)
 sheet= workbook.Sheets["Sheet1"];
// convert data into json object
var data=xlsx.utils.sheet_to_json(sheet);
return data;

}




//method to return json object having data of a particular row of excel
function ReturnSpecificRowDataInJsonFormat(rowno,addressOfFile)
{
    addressOfFile=fileaddress;

//calling method which convert excel data into Json  by passing excel path and storing in a variable
 jsonarray = exceltojson(addressOfFile)

    var index = [];
for (var x in jsonarray) {
   index.push(x);
}
    return jsonarray[index[rowno]]
}

//return json object of given row. Note : row index start from 0 inplace of 1 
//so if you want to print 6th row data in json format then in below line you need to pass row no as 5
var specificdataofrow= ReturnSpecificRowDataInJsonFormat(5)


//adding new key and value in json array. Syntex is jsonobject.newKey="value"
specificdataofrow.TestCaseStatus ="pass";

//var workbook2= xlsx.utils.book_new;


 


// var convert = function () {
//   var xlsx = json2xlsx(jsonarray);
//   fs.writeFileSync(fileaddress, xlsx, 'binary', (err) => {
//      if (err) {
//            console.log("writeFileSync :", err);
//       }
//     console.log( filename+" file is saved!");
//  });
// }
