# QR Code Generator

A simple Node.js application that generates QR codes from URLs and saves them as PNG images.

## Description

This application prompts users to enter a URL and then:
1. Generates a QR code for the provided URL
2. Saves the QR code as a PNG image file
3. Saves the URL in a text file for reference


## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For command-line user interface
- [qr-image](https://www.npmjs.com/package/qr-image): For QR code generation
- [fs](https://nodejs.org/api/fs.html): Node.js file system module
