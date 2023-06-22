# Instructions
To install Jest, you can follow these steps:

1. Make sure you have Node.js installed on your machine. Jest requires Node.js version 10.13.0 or later.

2. Open your terminal or command prompt.

3. Navigate to the root directory of your project, where your `package.json` file is located.

4. Run the following command to initialize a new `package.json` file (if you don't have one already):

   ```bash
   npm init -y
   ```

5. Run the following command to install Jest as a development dependency in your project:

   ```bash
   npm install --save-dev jest
   ```

   This command will download and install the latest version of Jest in your project.

6. To run the Jest tests, you can execute the following command in your terminal:

   ```bash
   npx jest
   ```

   Jest will automatically search for and execute the tests in your project.

7. To run one test file:

    ```
    npx jest test/your-filename.test.js
    ```
    Example:
    ```
    npx jest tests/calculateAverage.test.js
    ```
8. Start working on exercises from exerciseList.txt ONE BY ONE.

9. Create separate module/file for each exercise inside `solutions` folder. Export your file and import it in your test file. Run one indvidual test, update your code until it passess all test. Then move on to the next exercise.

For more information on how to write tests with Jest, you can refer to the Jest documentation: https://jestjs.io/docs/getting-started