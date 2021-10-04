/* ====About====
 Name = Hackerrank Automation
 
 1.This project login in the hackerrank account and solves the c++ ques wiht automation.
 2.To run this file you have to write "filename".js in the terminal.
*/  

const puppy = require("puppeteer");
const id = "pegapega0000@gmail.com";
const password = "123456";
async function main(){
    let browser = await puppy.launch({
    headless : false,
    defaultViewport: false
    });
    let tabs = await browser.pages();// creatw an array containing all the tabs opened in browser
    let tab = tabs[0];
    await tab.goto("https://hackerrank.com/auth/login");//go to hackerrank
     await tab.type("#input-1",id); //take id as input
     await tab.type("#input-2",password);// here password
     await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
     await tab.waitForSelector(".text-link.text-content",{visible: true});//after always wait for the new page to visible if going to new page
     await tab.click(".text-link.text-content");
     await tab.waitForSelector(".prep-kit-name",{visible: true});
     await tab.click(".prep-kit-name");
     await tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-line-primary.interview-ch-li-cta.ui-btn-link.ui-btn-styled",{visible: true});
     let problems = await tab.$$(".ui-btn.ui-btn-normal.ui-btn-line-primary.interview-ch-li-cta.ui-btn-link.ui-btn-styled");
     //tab.$$ -> returns array of the problems
     let problemsUrl = [];
     for(let i = 0; i< problems.length;i++){
         let url = await tab.evaluate(function(ele){//evaluate takes 2 args i.e functn and from where we want to take out the value of attribute.
         return ele.getAttribute("href");//evaluate gives the value any attribute and inner text.
        
             },problems[i]);
             problemsUrl.push(url);
             // /console.log("https://www.hackerrank.com" +url);
         }
         for(let i = 0 ; i< problemsUrl.length; i++){
             await solveChallenge("https://www.hackerrank.com"+ problemsUrl[i],tab);
         }
         browser.close();
 }
    async function solveChallenge(url,tab){
     let problemUrlUrl = url.replace("?" , "/problem?");
     let editorialUrl = url.replace("?" , "/editorial?");
     await tab.goto(editorialUrl);
     let languages = await tab.$$(".hackdown-content h3");
     for(let i = 0; i < languages.length; i++){
         let languageName = await tab.evaluate(function (ele){
            return ele.innerText;
         },languages[i]);
        //  console.log(languageName);
        if(languageName == "C++"){
                let code = await tab.$$(".hackdown-content .highlight");
                let codes = await tab.evaluate(function(ele){
                    return ele.innerText;
                },code[i]);
                // console.log(codes);
        await tab.goto(problemUrlUrl);
        await tab.waitForSelector(".checkbox-input",{visible: true});
        await tab.click(".checkbox-input");
        await tab.type("#input-1", codes);
        await tab.keyboard.down("Control");
        await tab.keyboard.press("A");
        await tab.keyboard.press("X");
        // await tab.click(".monaco-scrollable-element.editor-scrollable.vs");
        await tab.click(".monaco-scrollable-element.editor-scrollable.vs");
        await tab.keyboard.press("A");
        await tab.keyboard.press("V");
        await tab.keyboard.up("Control");
        await tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
        await tab.waitForSelector(".congrats-heading",{visible:true});
        return;
      }
     }
 }
main()
