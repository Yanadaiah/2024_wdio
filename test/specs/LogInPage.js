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


})



















})