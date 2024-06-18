//Describe is suite and having site and function with in function we have to write our code
//describe('Ecomerce Application',function() here function without name so its anonymous function then we can write like below 
//if names for function then we write in functions

describe('Ecomerce Application',async()=>
    {

// it test case and have a function so we have to write testcase with in the function 
//it('Login fail page',function()

it('Login fail page',async()=>
    {

        //sync - all lines of code will execute in sequence 
        //but javascript is async so no guareente it will execute in sequence all lines of code sumbit at a time
        //so resolve this we give promies for every step like resolved, pending, rejected
        // so to reolve this we will give await for every webdriver code and to write awite we have tell in method level its async code 
        //(give this test scenario)

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        //To compare we have tw assersetion in IO toHaveTitle and toHaveTitleContaining
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        await $("#username").setValue("rahulshettyacademy")//setValue method to enter the values
        await $("//input[@id='password']").setValue("learning1") 
        await $("#signInBtn").click()
        //await browser.pause(3000)

        //function wait untill element prasent

        await browser.waitUntil(async()=> await $("#signInBtn").getAttribute('value')=== 'Sign In',
    
        {
            timeout : 5000,
            timeoutMsg : 'Error Message is not displayed'
        }
    )
        await $(".alert-danger").getText()

        await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

})

it('Login success page Title',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        await $("//input[@id='password']").setValue("learning") 
        await $("#signInBtn").click()
        
        //it execute very fast so take any one element and wait untill element load so we can confirm page is loaded

        await $(".btn-primary").waitForExist() //this method will wait until elemet exist
        await expect(browser).toHaveUrlContaining("shop")
        //await expact(browser).toHaveTitle("ProtoCommerce")
        

})



















})