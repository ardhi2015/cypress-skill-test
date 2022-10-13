### GETTING STARTED
Automation test using  cypress. UI and API.

UI Automation Test File : cypress/e2e/UI-Automation.cy.js
API Automation Test File : cypress/e2e/api-test.cy.js

### Installation
1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/ardhi2015/cypress-automation.git
   ```
3. go to project directory

4. Install NPM packages
   ```sh
   npm install
   ```
5. Rename `cypress.example.env.json` to `cypress.env.json` and Enter your API Token, base_url = `https://api.weatherbit.io/v2.0/`  then, url_ui = `https://www.service.nsw.gov.au/`.
   ```json
   {
    "api_key": "your_api_token",
    "base_url": "sample",
    "url_ui" : "sample"
    }
   ```

### How to run
Run test with headless mode (default)
  ```sh
  npm cypress run
  ```

Run test with headed mode

  ```sh
  npm cypress run --headed
  ```
Run Specific Api test File

  ```sh
  npm cypress run -s cypress/e2e/api-test.cy.js
  ```


### How to Trigger CI (Github Action)
1. Commit Changes
2. Push to repository
3. Check Github Action Tab