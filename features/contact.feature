Feature: Login to Portal and Create a Web Order.

  Scenario Outline: As a user, I can log into the Salesforce,
  
     Given Selesforce login page should open "https://test.salesforce.com/"
     When i enter "username" as "<userID>"
     When i enter "password" as "<Password>"
     When I wait for "2000"
     When I will click on "Log In to" Button

    #  Then I logout from the application.

    Examples:
        | userID                       | Password    |
        | richa.pal@ext.mxns.com.iatv2   | Mirketa@11  |

Scenario Outline: As a Spain User, Login to Portal.
When I click on "Contacts" Tab
When I wait for "1000"
When I click on "<lname>"
When I will click "workWithPortal"
When I click on "Log in to Experience as User" Tab
When I wait for "6000"
When I select Submit a sample Button
When I wait for "1000"

Examples:
|lname|
|Giroud|


