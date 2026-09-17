const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Mohisin",
    course: "MCA",
    age: 22
  },
  {
    id: 2,
    name: "Dhanush",
    course: "MCA",
    age: 23
  },
  {
    id: 3,
    name: "Srinivas",
    course: "MCA",
    age: 25
  }
];

// Base Route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Student Rest API"
  });
});

// GET all students
app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});

// GET student by ID
app.get("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// POST a new student
app.post("/api/students", (req, res) => {
  const { name, course, age } = req.body;

  if (!name || !course || !age) {
    return res.status(400).json({
      message: "Name, course and age are required"
    });
  }

  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name,
    course,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT (Update) student by ID
app.put("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, course, age } = req.body;
  if (name) student.name = name;
  if (course) student.course = course;
  if (age) student.age = age;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

// DELETE a student by ID
app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const studentExists = students.some(student => student.id === id);

  if (!studentExists) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students = students.filter(student => student.id !== id);

  res.status(200).json({
    message: "Student deleted successfully"
  });
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
    
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Rest API running at http://localhost:${PORT}`);
});