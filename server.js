const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    const checkResult = `<span style='color:red'> Try the magic word "caleb"</span>`;
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Browser Title</title>
        </head>
        <body>
            <h3 align=center>Render-node-backend</h3>
            <form action="/" method="post">
                <label for="myText01">Enter Text:</label>
                <input type="text" id="myText01" name="myText01" value="caleb">
                <input type="submit" value="Submit">
            </form>
            ${checkResult}
        </body>
        </html>
    `);
});
app.post('/', (req, res) => {
    const myInputText01 = req.body.myText01;
    let myCheck = false;
    let checkResult = '';

    if (myInputText01 === 'caleb') {
        myCheck = true;
    }

    if (myCheck) {
        checkResult = `<b style='color:green'> Cool! </b>`;
    } else {
        checkResult = `<span style='color:red'> Try the magic word "caleb"</span>`;
    }
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Browser Title</title>
        </head>
        <body>
            <h3 align=center>T2A06-node-codesandbox</h3>
            <form action="/" method="post">
                <label for="myText01">Enter Text:</label>
                <input type="text" id="myText01" name="myText01">
                <input type="submit" value="Submit">
            </form>
            ${checkResult}
        </body>
        </html>
    `);
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on port ${PORT}`);
});
