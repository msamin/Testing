module.exports ={
    '@tags': ['loginTest'],
    'Login Test'(browser){
        const mainQueryInputSelector = 'input[formcontrolname="lastName"]';
        const mainQuery = 'Amin';
        const refNumInputSelector = 'input[formcontrolname="bookingReference"]';
        const refNum = '123456';
        const FormLastName = '[ng-reflect-model="Amin"]';
      
        
  
        
        
        browser
            .url('https://limehome-qa-task.herokuapp.com/')
            .waitForElementVisible(mainQueryInputSelector, 6000)
            .setValue(mainQueryInputSelector, mainQuery)
            .saveScreenshot('test_output/loginName.png')
            .setValue(refNumInputSelector, refNum)
            .saveScreenshot('test_output/loginRef.png')
            .click('button[type=submit]')
            .saveScreenshot('test_output/Button.png')


    
            .assert.urlContains(mainQuery)
            .assert.urlContains(refNum)
            .assert.visible(FormLastName)
            .assert.containsText(FormLastName, "Amin")
         

        }
}