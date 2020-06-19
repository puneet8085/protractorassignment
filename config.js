exports.config={
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['readexcel.js'],
  
spec: { displayStacktrace: true },

jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
    },


onPrepare: function() {

    browser.manage().window().maximize()
    browser.waitForAngularEnabled(false)
    browser.manage().timeouts().implicitlyWait(9000)
    
   browser.get('http://automationpractice.com/index.php')
},

multiCapabilities:[
//     {
//     browserName:'chrome'
// },
{
    browserName:'firefox'
}],




}