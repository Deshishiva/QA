# 🧪 QA Automation Project using Cypress

---

## 📌 Project Overview

This project demonstrates **End-to-End (E2E) Automation Testing** of an e-commerce application using Cypress.

👉 Objective:
To automate a real-world user journey:

**Login → Product Selection → Add to Cart → Checkout → Order Confirmation**

---

## 🌐 Application Under Test

We used: SauceDemo

👉 SauceDemo is a demo e-commerce website designed for QA practice.
👉 It allows testers to simulate real shopping workflows safely.

---

## 🛠️ Tools & Technologies Used

* Cypress – Automation testing tool
* Visual Studio Code – Development environment
* JavaScript – Programming language
* Node.js – Runtime environment
* Git & GitHub – Version control and project hosting

---

## 🎯 Objective of the Project

The main goal of this project is to:

* Automate a complete e-commerce checkout flow
* Validate application behavior using assertions
* Demonstrate real-world QA automation skills
* Build a maintainable and reusable test structure

---

## 📁 Project Structure

```
qa-cypress-project/
 ├── cypress/
 │    ├── e2e/
 │    │    └── checkout.cy.js
 │    ├── fixtures/
 │    │    └── user.json
 │    └── support/
 │         ├── commands.js
 │         └── e2e.js
 ├── cypress.config.js
 ├── package.json
 └── README.md
```

---

## ⚙️ Installation & Setup (Step-by-Step)

### 1. Create Project Folder

```
mkdir qa-cypress-project
cd qa-cypress-project
```

### 2. Initialize Node Project

```
npm init -y
```

👉 Creates `package.json` to manage dependencies.

---

### 3. Install Cypress

```
npm install cypress --save-dev
```

👉 Installs Cypress as a development dependency.

---

### 4. Open Cypress

```
npx cypress open
```

👉 Automatically creates:

* `cypress/` folder
* `cypress.config.js`

---

### 5. Create Test File

Path:

```
cypress/e2e/checkout.cy.js
```

👉 This file contains automation test code.

---

## 🤖 Test Scenario Explained

### 🔐 1. Login

* Enter username & password
* Validate successful login using URL check

---

### 📦 2. Product Selection

* Select first product from inventory
* Navigate to product details page

---

### 🛒 3. Add to Cart

* Click “Add to Cart”
* Navigate to cart page
* Validate cart items

---

### 💳 4. Checkout Process

* Enter user details
* Continue to checkout overview
* Validate checkout page

---

### ✅ 5. Order Completion

* Click “Finish”
* Verify success message

---

## 💻 Sample Test Code

```javascript
describe('E-commerce Checkout Flow', () => {

  it('User should complete checkout process successfully', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')

    cy.get('.inventory_item').first().click()
    cy.contains('Add to cart').click()

    cy.get('.shopping_cart_link').click()
    cy.contains('Your Cart').should('be.visible')

    cy.get('#checkout').click()

    cy.get('#first-name').type('Shiva')
    cy.get('#last-name').type('Kumar')
    cy.get('#postal-code').type('500072')

    cy.get('#continue').click()
    cy.contains('Checkout: Overview').should('be.visible')

    cy.get('#finish').click()
    cy.contains('Thank you for your order!').should('be.visible')

  })

})
```

---

## ▶️ How to Run the Tests

### Open UI Mode

```
npx cypress open
```

### Run in Headless Mode

```
npx cypress run
```

---

## 🧠 Key Concepts Used

* **E2E Testing** – Testing complete user workflow
* **Assertions** – Validating expected outcomes
* **Selectors** – Identifying elements in UI
* **Automation Flow** – Simulating real user behavior

---

## 📸 Additional Features

* Automatic screenshots on failure
* Optional video recording support
* Easy debugging with Cypress Test Runner

---

## 🚀 Learning Outcomes

Through this project, I learned:

* Writing Cypress automation scripts
* Handling real-world test scenarios
* Structuring test projects
* Using assertions effectively
* Debugging test failures

---

## 💡 Challenges Faced

* Understanding correct selectors
* Fixing path issues while creating test files
* Handling Cypress configuration

---

## 🎯 Conclusion

This project demonstrates my ability to:

* Design and automate real-world test scenarios
* Use Cypress efficiently for E2E testing
* Write clean, maintainable test scripts
* Deliver production-ready QA automation work

---

## 🔗 Repository

https://github.com/Deshishiva/QA.git

---

## 🙌 Author

Shiva Kumar Deshi


