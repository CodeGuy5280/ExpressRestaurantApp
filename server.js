//require our packages
const express = require("express");
const path = require("path");

//sets up express app
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: "amy",
        numberInParty: 4,
        phoneNumber: 3037190456,
        email: "a@gamil.com",
        id: 1234,
    },
    {
        name: "amanda",
        numberInParty: 7,
        phoneNumber: 3038572405,
        email: "amanda@gamil.com",
        id: 4253,
    },
    {
        name: "alexa",
        numberInParty: 10,
        phoneNumber: 7193048921,
        email: "al@gamil.com",
        id: 431,
    }
]

// Basic route that sends the user first to the AJAX Page- which is empty for now
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

// Displays all characters
app.get('/api/tables', (req, res) => res.json(tables));

// Displays a single character, or returns false
app.get('/api/tables/:table', (req, res) => {
    const chosen = req.params.character;

    console.log(chosen);

    for (let i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }

    return res.json(false);
});


//app api





//app listening
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`))