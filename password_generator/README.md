# Password Generator

## Description

This is a secure and customisable password generator, developed in TypeScript, HTML, and CSS. The generator allows the user to specify the length of the password and the inclusion of uppercase letters, lowercase letters, numbers, and symbols. The project was created with a focus on security and best programming practices.

## Features

- **Secure Password Generation:** Creates random passwords with high entropy.
- **Customisation:** Allows choosing the length of the password and includes uppercase letters, lowercase letters, numbers, and symbols.
- **User-Friendly Interface:** Easy to use, with buttons to generate and copy the password.
- **Responsive Design:** Adjustable interface for different screen sizes.

## Technologies Used

- **TypeScript:** A statically typed programming language that enhances code quality.
- **HTML:** Basic structure of the web application.
- **CSS:** Styling for the user interface.
- **JavaScript:** Adds interactivity to the application.

## How to Use

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/password_generator.git
    ```
2. **Install TypeScript:**
    ```sh
    npm install -g typescript
    ```
3. **Run the application:**
    ```sh
    npx tsc
    npx serve
    ```
4. **Access the application in the browser:**
    Open your browser and go to `http://localhost:3000`.

## Project Structure

```plaintext
password_generator/
├── node_modules/
├── public/
│   ├── index.html
│   ├── styles.css
├── src/
│   ├── typescript/
│   │   ├── index.ts
│   ├── javascript/
│   │   ├── index.js
│   └── style/
│       ├── style.css
├── package.json
├── package-lock.json
└── README.md