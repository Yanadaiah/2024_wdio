
//import { expect as expectChai } from 'chai'

import { expect as expectChai } from 'chai';

describe("Functional scenarios of the application", async()=>{

    it("Scroll into view and mouse over", async()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        let elm = await $("#mousehover")
        await browser.pause("3000")
        await elm.scrollIntoView() //this method scroll into view of the element
        await browser.pause("3000")
        await elm.moveTo() //This method mouse will over to on the element
        await browser.pause("3000")
        await $("a[href='#top']").click()
        //await $("=Top").click() // if want to click these type of links <a href="#top" xpath="1">Top</a> then will use "=name"
        await browser.pause("3000")

        //Handle the alerts
        await browser.url("https://demo.automationtesting.in/Alerts.html") //naviagte to another page with same
        let alertButton = await $("//button[contains(text(),'click the button to display an')]")
        await alertButton.scrollIntoView()
        await alertButton.click()
        //if we want doubleClick then we have a method for double click "doubleClick()""
        console.log(await browser.isAlertOpen()) //verify alert is open or not
        expectChai(await browser.isAlertOpen()).to.be.true // assertions
        expectChai(await browser.getAlertText()).to.be.equal("I am an alert box!") // assertions
        await browser.acceptAlert() //Accept alert
        await browser.pause("3000")
    })
    it("Sorting functionality", async()=>{

        //Retrive the list names in array A
        //Sort the array A into Array B
        //Compare Array A and Array B

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click() // tr th:nth-child(1) this CSS is for the first element in the list

        const vegiElem = await $$("tr td:nth-child(1)")
        const vegName = await vegiElem.map(async vegi =>await vegi.getText()) //whenevr we are using function then we have to use async
        console.log(vegName)

        //with slice() method we are creating one more same array and performing sort operation in case if performed on main array and stored in
        //one more array then main array also got impacted and will get sorted

        const veg = vegName.slice() //this method will create the one more same array
        const sortedVeg = veg.sort()
        console.log(sortedVeg)
        expectChai(vegName).to.be.equal(sortedVeg)


    })

    it("WebTable filter with search", async()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("#search-field").setValue("Tomato")

        const vegList = await $$("tr td:nth-child(1)")
        await expect(vegList).toBeElementsArrayOfSize({eq:1}) //expect(vegList).toBeElementsArrayOfSize({eq:1}) here will 
        //compare search resultes will be one 

        console.log(await vegList[0].getText())
        await expect(await vegList[0]).toHaveTextContaining("Tomato")//here verifying search results text with expacted text



    })













})