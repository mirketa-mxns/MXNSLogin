Feature: Login to Portal and Create a Web Order
  Scenario Outline: As a user, I can log into the MXNS Portal,
 
     Given MXNS Portal login page should open "https://merieuxnutrisciences--iatv2.sandbox.my.site.com"
     When i enter "Username" as "<userID>"
     When i enter "Password" as "<password>"
     When Click on "Log in" Button

    Examples:
        | userID           | password    |
        | giroud@dss.com   | Welcome@12  |

Scenario: Create a Web Order.
When Click on "Submit a sample" Button
# When Click on "New Web Order" Button