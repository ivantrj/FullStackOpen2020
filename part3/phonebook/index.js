const { response, request } = require("express");
const express = require("express");
var morgan = require("morgan");
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json());

app.use(morgan("tiny"));


let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

morgan.token('person', (req) => {
  if (req.method === 'POST') return JSON.stringify(req.body)
  return null
})

app.use(express.json())


app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :person',
  ),
)

app.get("/info", (request, response) => {
  response.send(`Phone has info for ${persons.length} people   
                ${new Date()}`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

const generateId = () => {
  return Math.round(Math.random() * 100);
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (persons.find((person) => person === body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "missing number",
    });
  } else if (!body.name) {
    return response.status(405).json({
      error: "missing name",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    date: new Date(),
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
