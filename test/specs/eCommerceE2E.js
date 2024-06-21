
import { expect } from 'chai';

describe("eCommerce E2E flow", async()=>{

    it("One Ecommerce flow", async()=>{

        const product = ['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        const checkout = await $("*=Checkout")
        await checkout.waitForExist()
        // "*=Checkout" this element for partial text and "=Checkout" this is the element for the text
        const elementsForprod = await $$("div[class='card h-100']")
        for(let i = 0; await elementsForprod.length>i; i++){
           //here "elementsForprod[i].$("div h4 a") getting parant element from array and extending the child elment
           const productTitle = await elementsForprod[i].$("div h4 a").getText()

           if(product.includes(productTitle))
            {
                await elementsForprod[i].$(".card-footer button").click()
            }
        }
        await checkout.click()
        const prodPrice = await $$("//tr/td[4]/strong")

        // when having multiples promises in the same line then we have to use "await Promise.all" 
        //And when using await if not required for JavaScript methods then we have to wropup () for wdio methods

        const TotalProductPrice =(await Promise.all (await prodPrice.map(async (prodPrice)=> parseInt((await prodPrice.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=>acc+price,0)
        
        console.log(TotalProductPrice)
        const totolePrice= await $("h3 strong").getText()  
        const Total =parseInt(totolePrice.split(".")[1].trim())
        console.log(Total)
        expect(TotalProductPrice).to.be.equal(Total)
        await $("button[class='btn btn-success']").click()
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true}) // waitForExist({reverse:true} means here like ecliminetor means wait untill disappear
        await $("=India").click()
        await browser.pause("3000")
        await $("input[type='submit']").click()
        expect(await $(".alert-success").getText()).to.include(" Thank you! Your order will be delivered in next few weeks :-)")
        await browser.pause("3000")

         





    })








})