

//method to compare 2 arrays 
var compareArray=function()
{
    this.checkArray=function(arr1,arr2){
    arr1.forEach((e1) => arr2.forEach((e2)=>
    {
        if(e1===e2)
            return true
    }))
}};



module.exports= new compareArray();