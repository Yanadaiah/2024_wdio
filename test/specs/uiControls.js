
import { expect as expectChai } from 'chai'

describe('ui Controles in Ecomerce Application',async()=>{

    
it('Ui Controles',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        await $("//input[@id='password']").setValue("learning") 
        const redioButs = await $$(".checkmark") //$$ like findElements its return all elements
        redioButs[1].click()

        await $("#myModal").waitForDisplayed() //waiting untill pop display
        await $("#cancelBtn").click()
        console.log(await $("//input[@value='admin']").isSelected())

        await redioButs[1].click()
        await $("#myModal").waitForDisplayed()
        await $("#okayBtn").click() //now clicking on okay button on pop up

        //Validate model should not display when click on admin butoon
        await $("//input[@value='admin']").click()
        await expect($("#myModal")).not.toBeDisabled() //not is nagation

        //DropDowns handles with select tag 

       const dropdown = await $("select.form-control") //this select will work when tag is select
       await dropdown.selectByAttribute('value','teach') 
       await dropdown.selectByVisibleText("Consultant")
       await dropdown.selectByIndex(0)
       await browser.pause(3000)
       console.log(await dropdown.getValue()) //getting the selected value

       //Chai assertions
       expectChai(await dropdown.getValue()).to.equal("stud") //here to.equal are the chai assertion



})

}
)