# Testing

Back to [README.MD](README.MD)

## CONTENTS

- [Manual Testing](#manual-testing)
- [Browser Testing](#browser-testing)
- [Validator Testing](#validator-testing)
- [Accessibility Testing](#accessibility-testing)
- [Bugs](#bugs)

## Manual Testing
| **Testing**          | **Action**          | **Expected**          | **Outcome**          |
|----------------------|---------------------|-----------------------|----------------------|
|                      |                     |                       |                      |

    
    



## Browser Testing
To ensure that the website and features work well across a multitude of browsers, I used BrowserStack to fully test using a number of browsers, operating systems and devices. 

Full testing was performed on the following: 

- iPhone 13 - Safari and Chrome
- iPhone 14 - Safari and Chrome
- iPHone 14 Pro - Safari and Chrome
- iPhone 14 Plus - Safari and Chrome
- iPhone 12 Mini - Safari and Chrome
- iPad 10th Gen - Safari and Chrome
- iPad Air 5 - Safari and Chrome
- iPad Pro 11 - Safari and Chrome
- Samsung Galaxy S22 - Chrome and Firefox
- Samsung Galaxy S23 Ultra - Chrome and Firefox
- Samsung Galaxy 8 - Chrome and Firefox
- Samsung Galaxy Note 20 - Chrome and Firefox
- Windows 11 - Edge 120
- Windows 11 - Firefox 120
- Windows 11 - Chrome 120
- Windows 10 - Edge 119
- Windows 10 - Firefox 119
- Windows 10 - Chrome 119
- Windows 7 - Edge 109
- Windows 7 - Firefox 112
- Windows 7 - Chrome 109
- Mac Ventura - Safari 16.5
- Mac Ventura - Chrome 120
- Mac Ventura - Firefox 120
- Mac Ventura - Edge 120
- Mac Sierra - Safari 10.1
- Mac Sierra - Firefox 115
- Mac Sierra - Chrome 103
- Mac Sierra - Edge 103

## Validator Testing
### W3C HTML Validator

Only index.js page has HTML code and this comes up clear of errors in the validator.

The following steps were followed in order to check HTML code throughout the website:

- navigate to the page
- click right and select 'View page source'
- code will open in new tab - copy the code
- paste the code in the validator as 'text input'

![HTML Validation](documentation/validation/html.png)

### Jigsaw CSS Validator

No errors were found when passing through the official Jigsaw validator.

![CSS Validation](documentation/validation/css.png)

### Javascript 

!!!!  ASK DAISY !!!!

### Python Validator

No errors when passing through Code Institute PEP8 Python Linter.

## Accessibility Testing
### Lighthouse

In order to test performance and accessibility, I used Lighthouse within the Chrome Developer Tools.

#### Home

![Home Lighthouse Report](documentation/accessibility/home.png)

#### Menu

![Menu Lighthouse Report](documentation/accessibility/menu.png)

#### Book

![Book Lighthouse Report](documentation/accessibility/book.png)

#### Register

![Register Lighthouse Report](documentation/accessibility/register.png)

#### Login

![Login Lighthouse Report](documentation/accessibility/login.png)

#### My Profile

![My Profile Lighthouse Report](documentation/accessibility/my-profile.png)

#### Edit Booking

![Edit Booking Lighthouse Report](documentation/accessibility/edit-booking.png)

#### Delete Booking

![Delete Booking Lighthouse Report](documentation/accessibility/delete-booking.png)

#### Staff Profile

![Staff Profile Lighthouse Report](documentation/accessibility/staff-profile.png)

#### Manage Bookings

![Manage Bookings Lighthouse Report](documentation/accessibility/manage-bookings.png)

#### Manage Menus

![Manage Menus Lighthouse Report](documentation/accessibility/manage-menus.png)

#### Edit Menus

![Edit Menus Lighthouse Report](documentation/accessibility/edit-menus.png)

#### Delete Menus

![Delete Menus Lighthouse Report](documentation/accessibility/delete-menus.png)

### WAVE
Further accessibility testing was undertaken with WAVE.

#### Home

![Home Wave Report](documentation/accessibility/w-home.png)

#### Menu

![Menu Wave Report](documentation/accessibility/w-menu.png)

#### Book

![Book Wave Report](documentation/accessibility/w-book.png)

#### Register

![Register Wave Report](documentation/accessibility/w-register.png)

#### Login

![Login Wave Report](documentation/accessibility/w-login.png)

#### My Profile

![My Profile Wave Report](documentation/accessibility/w-my-profile.png)

#### Edit Booking

![Edit Booking Wave Report](documentation/accessibility/w-edit-booking.png)

#### Delete Booking

![Delete Booking Wave Report](documentation/accessibility/w-delete-booking.png)

#### Staff Profile

![Staff Profile Wave Report](documentation/accessibility/w-staff-profile.png)

#### Manage Bookings

![Manage Bookings Wave Report](documentation/accessibility/w-manage-bookings.png)

#### Manage Menus

![Manage Menus Wave Report](documentation/accessibility/w-manage-menus.png)

#### Edit Menus

![Edit Menus Wave Report](documentation/accessibility/w-edit-menus.png)

#### Delete Menus

![Delete Menus Wave Report](documentation/accessibility/w-delete-menus.png)

## Bugs

When making a reservation it was found that bookings could be made using a date from the past.  To fix this I add a clean function to the forms.py to test whether the date is in the past and if so throw an exception error.

Back to [README.MD](README.MD)