
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

 //code to write back json array into new worksheet

 //calling method which write back into same excel after appending a new sheet
 var writetoexcel=jsonToExcel()

 //method to write back into same excel.
function jsonToExcel()
{
    let  number=    Math.floor((Math.random() * 100000) + 10000);

  //pass your json object in "json to sheet method" as i pass data to log error in sheet
  sheet=xlsx.utils.json_to_sheet(jsonarray)
 

  xlsx.utils.book_append_sheet(workbook,sheet,`StatusSheet${number}`);


 //sheet in which you want to write
 xlsx.writeFile(workbook,fileaddress)

}
