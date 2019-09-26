Testing Task


        Task #1: Writing Test Scenarios
        Login Page Test Scenarios
    1-  Verify the messages/hint shown for each mandatory field.
    2-  Verify if the user cannot proceed without filling all the mandatory fields.
    3-  Verify if user cannot proceed with invalid data in mandatory fields. 
    4-  Verify if error message is shown in case of invalid or incomplete information. 
    5-  Verify if user can proceed only after filling all the mandatory fields
    6-  Verify if submit button can be clicked only after valid data is entered.

        Booking Details Page Test Scenarios:
    1-  Verify if Language selection Page is functional for all the necessary information
    2-  Verify if booking reference Number is the same as was entered in the login page
    3-  Verify if Last name is the same as entered in the login page
    4-  Verify if user can change and select date of birth.
    5-  Verify if user can change the address information
    6-  Verify if user can select country form the country list.
    7-  Verify if user can select Nationality from the list
    8-  Verify if Passport upoload option is visible if non-German Nationality is selected
    9-  Verify is if user can proceed to passport upload only if valid passport number is entered. 
 
 
    
        Task #2: Defects
        Login Page defects
        1- User can enter numbers(only) or Special characters(only) in the last name field and still can proceed to next field
        2- User can enter empty spaces in Name and Reference Number field and proceed to next page
    
    Booking Details page defects:
    1-  Changing language is functional only for day, date and time.
    2-  User can enter numbers(only) or Special characters(only) in the First name field and still can   proceed to next field
    3-  User can enter empty spaces in First name field and proceed to next page
    4-  User can change Last name in the booking details field
    5-  User can select future date of birth and still can proceed
    6-  User can enter Numbers only in City field and still can proceed 
    7-  User can enter alphabets only in postal code field and can proceed
    8-  User can enter only numbers or only alphabets in passport ID field and still can proceed
 
 
 
        Task #3: Defect Reporting
        Defect ID: 	    UI-20190906-001
        Area		    Booking details page
        Description:    User can select a future Date of Birth 

                Steps to reproduce:
        1-	Go to Login url: https://limehome-qa-task.herokuapp.com
        2-	Enter atleast two symbols in last name field
        3- 	Enter atleast 6 symbols in the reference number field
        4- 	Click submit Button
        5-	On the booking details page, Click Date of birth.
        6-  Click on calender icon and select a future date of birth (e.g. 10.12.2022)

        Expected Result: Error message should appear (Invalid date selected).

        Actual Results: No error notification and user can proceed to next page.
    
        
    
        Task #4: Automation (Bonus)
        I have tried to do E2E testing task and the source code is uploaded. 
