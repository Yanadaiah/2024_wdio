
import { expect as expectChai } from 'chai'
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












})