const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {

    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;


    res.send(`The result of the Calculation is ${result}`);
})

app.get('/bmiCalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/bmiCalculator', function (req, res) {

    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    let result = (weight / (height * height));
    result = parseFloat(result.toFixed(1));

    res.send(`Your BMI was calculated to be ${result}`);

})



app.listen(3000, function () {
    console.log('Server is running on port 3000');
}); //npm run serve - for nodemon