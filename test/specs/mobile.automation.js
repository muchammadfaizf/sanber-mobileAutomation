describe('Automation Mobile Apk Diet Meal', () => {
    it ('should open apps and view home screen', async() => {

      // Assert Verif Form User Input
      const FormInputUser = await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_desc"]');
      expect(FormInputUser).toBeDisplayed();

      //Input Name
      const Inputname = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]');
      await Inputname.click(); 
      await Inputname.setValue('Purnamartabak');

     //Input weight
      const Inputweight = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]');
      await Inputweight.click();
      await Inputweight.setValue('65');
  
      //Input height
      const Inputheight = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]');
      await Inputheight.click(); 
      await Inputheight.setValue('175');

      //Select gender
      const SelectMale = await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]');
      await SelectMale.click();

      //Hide keyboard
      await driver.hideKeyboard();
    
      //Click button Next
      const ClickButtonNext = await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]');
      await ClickButtonNext.click();

      //Assert routine activity page is displayed
      const routineActivity = await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_desc"]');
      expect(routineActivity).toBeDisplayed();

      //Select routine activity
      const SelectroutineActivity = await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_heavy"]');
      await SelectroutineActivity.click();      

      //Click button Selesai
      const ClickButtonSelesai = await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]');
      await ClickButtonSelesai.click();   
      
      //Assert verify redirection to home screen
      const homeScreen = await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_name"]');
      expect(homeScreen).toBeDisplayed();  
    })
      
})