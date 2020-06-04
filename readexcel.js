var xlsx=require("xlsx");

// always declare file location to below variable.
var fileaddress=".\\resource\\Questionare on Regression testing.xlsx";


//method to convert excel data into JSon and return that json 
function exceltojson(filepath)
{
var workbook=xlsx.readFile(filepath)
var sheet= workbook.Sheets["Sheet1"];
// convert data into json object
var data=xlsx.utils.sheet_to_json(sheet);
return data;

}




//method to return json object having data of a particular row of excel
function ReturnSpecificRowDataInJsonFormat(rowno,addressOfFile)
{
    addressOfFile=fileaddress;

//calling method which convert excel data into Json  by passing excel path and storing in a variable
var jsonarray = exceltojson(addressOfFile)

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
console.log(specificdataofrow)




    //method to get value from  a particular column
// var newdata=data.map(function(record)
// {
//     // give the column name as i do record.Domain to get value from a particular column
//     var cellvalue=record.Domain;
// })

// //var workbook2= xlsx.utils.book_new;


// // pass your json object in "json to sheet method" as i pass data to log error in sheet
// var Sheet2=xlsx.utils.json_to_sheet(data)

// xlsx.utils.book_append_sheet(workbook,Sheet2,"LogError");


// //sheet in which you want to write
// xlsx.writeFile(workbook,"NewDatasheet.xlsx")
