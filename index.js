const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const courseCategories = require('./data/Courses_category.json')
const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
    res.send('Course api running');
})

app.get('/course-categories', (req, res) => {
    res.send(courseCategories)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectCourse = courses.find(c => c.id === id)
    res.send(selectCourse)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    if (id === '07') {
        res.send(courses)
    }
    else {
        const selectCategory = courses.find(c => c.category_id === id);
        res.send(selectCategory)
    }
})

app.listen(port, () => {
    console.log('server is rinning', port);
})