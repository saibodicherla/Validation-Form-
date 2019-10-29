
# React.JS validation-Form (PWA)


This Project is built with  Redux, React.JS and material-Ui which demonstrates the validation form:-

1. Social security number needs to be in 10 digits: `YYMMDD-XXXX` 
2. Making API call with countries
3. Mobile number should be:    `Eg(+46787985776 or 004678795776)` 
4. Email address should be:   `Eg(john@bynk.se)`   
5. Submit button


## Live Application URL

### https://master.d1v3c9rzdcvf8u.amplifyapp.com/
This URL describes an live Progressive web application which deployed in AWS Amplify

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs


## Clone and Run the Application in local environment

Clone the project directory into local, you can run:

### `https://github.com/saibodicherla/Validation-Form-.git`

After that, you can run:

### `npm start`

Runs the app in the development mode.<br />

Default port is : **`3000`**
You can change value of `PORT` in `.env` file.

Open (http://localhost:3000) to view it in the browser.




## Packages & Library User

This project depend to this Packages

### `react@^16.11.0`

React Framwork, peer dependencies `react-dom@^16.11.0` & `react-scripts@3.2.0`

### `redux@^4.0.4`

For manage Store States & Actions with data, peer dependency : `react-redux@^7.1.1`

### `@material-ui/core@^4.5.1`

For User Interface Design as Default Theme. peer dependency : `@material-ui/icons@^4.5.1`

**Note I have add `Roboto` Font to root HTML Header as `<link />` **

### `axios@^0.19.0`

For fetch REST API  endpoints easy `<http://restcountries.eu/rest/v2/all />`.
