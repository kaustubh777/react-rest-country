# Getting Started with Rest Coutries React App
  Live website can be access via - https://react-app-t89m.onrender.com/

# To run this app please follow the following steps

# 1) Clone the repository and install its prerequisites
    * To run theproject we need NodeJS to be installed. 
      If you do not have it install you can head to - "https://nodejs.org/en/download" 
      and install it for respective operating system.
    * If do not know if it is installed or not, you can open command prompt and run command "node -v"
      If you see a number that means you have it installed.
      
# 2) Run NPM install command to install the dependencies
    * Navigate to the react-rest-country folder and open a command prompt in this directory.
    * Execute command npm install. This will install all the dependencies required to run the project smoothly.

# 3) Run the project in your local
    * Once the dependencies are install you can start local server using command "npm start".
      You can then navigate to "http://localhost:3000" to view the application in action.

# 4) Running unit tests with Cypress
    * To run unit tests navigate to  react-rest-country folder and open a command prompt in this directory.
      Run commands "npm install cypress --save-dev" and "npx cypress open" to install and launch cypress. Select E2E Testing and chrome as the browser.
      You will see two tests which you can click to run.

# 5) Project optimisations
    * Debouncing - Since we need to trigger an API call for every keystroke entered by the user, we will end up 
      making a lot of unwanted API calls. For example for every character of the name of the country.
      Debouncing would help minimize the number of API calls in this case.
    * Lazy Loading - Do all your users access all your routes? If no, then you can make use of lazy loading to
      load the component's js files only when a user visits a specific route. This makes the initial bundle small
      and helps to reduce bootstrapping time. You can see this happening for the country component in the project.
