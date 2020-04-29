exports.config={
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['spec2.js'],
   
//multiCapabilities:[{
//     browserName:'chrome'
// },
// {
//     browserName:'firefox'
// }],

spec: { displayStacktrace: true },

jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
    },
onPrepare: function() {

    browser.manage().window().maximize()
    browser.waitForAngularEnabled(false)

    browser.manage().timeouts().pageLoadTimeout(40000);
   

    // for non-angular page
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(9000)
    
   browser.get('http://automationpractice.com/index.php')
},



}