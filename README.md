# Frontend Test Description
The project goal is to build a small part of an E-commerce App using VueJs with the following screens: Register, Login, List products and a modal with product details.

## Implementation Details

### Backend API
The frontend app **MUST** consume the following API: https://test-api.updivision.work/docs/1.0/overview

### Registration page
The registration page/form will have the following fields: Name, Email, Education start date, Education end date, Password, Confirm password and a check for “I agree terms and conditions”.

All the fields are required and should display the error messages from the API. Optionally should be validated in the frontend (rules: Minimum 2 characters for name, Valid email, Education start date < Education end date, Password with min 6 characters characters and check to contain at least one uppercase, one lowercase and a number).


### Login page
The login page will contain only email and password and should display the error messages from the API.

For the optional validation the same rules as for registration are applied.


### Product listing page
Display a list of products with name, image, price and details button. When the button is pressed a pop-up will be opened that contains the product description and add to cart button. To view the products list you must be authenticated.

Optionally the product listing will have pagination / infinite loading.

The cart button doesn’t need to work.

### Wireframes
The wireframes should be used **only as a visual guideline** for the implementation.

## Note
The usage of component libraries and tools from the VUE ecosystem is allowed and encouraged.
## Install 
npm i
## Run the project via command
vite