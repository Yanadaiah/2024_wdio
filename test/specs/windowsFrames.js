
describe("Handling windows and Frames", async()=>{

it("Window Handls", async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await $(".blinkingText").click() 

        const winID = await browser.getWindowHandles()//  by getWindowHandles() we are getting window id 
        await browser.switchToWindow(winID[1]) // by passing the window id in swithTowindow method we can swith to that perticular window
        await $("h1").getText()
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(winID[0])
        await browser.getTitle()
})

it("handling the frames",async()=>{

    await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    console.log(await $$("a").length)
    await $("#mousehover").scrollIntoView()
    await browser.switchToFrame(await $("#courses-iframe")) // here swicthing to the iframe
    console.log(await $("=Courses").getText()) // =Courses is like css for like text
    console.log(await $$("a").length)
    await browser.switchToFrame(null) // here again changing to the narmal page like default content method like in selenium
    console.log(await $$("a").length)
})




})