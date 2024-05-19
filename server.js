const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/check-password', (req, res) => {
    const password = req.body.password;

    if (!password) {
        return res.status(400).send('Password is required');
    }

    const options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: './',
        args: [password]
    };

    PythonShell.run('test.py', options, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error in processing the request');
        }

        res.send({ strength: results[0] });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
