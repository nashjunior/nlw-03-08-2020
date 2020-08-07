const express = require('express')
const nunjucks = require('nunjucks')

const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: '8599999999',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject: 'Química',
    cost: '20,00',
    schedule: [
      {
        week_day:0,
        time_from: 720,
        time_to:1220
      }
    ]
  }
]


const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
]

function getSubject (subjeectNumber) {

}

const app = express()

nunjucks.configure('src/views', {
express: app,
  noCache: true,
})
app.use('/public', express.static("public"));


app.get('/', (request, response) => {
  return response.render('index.html')
})

app.get('/study', (request, response) => {
  const filters = request.query


  return response.render('study.html', {proffys, filters, subjects, weekdays})
})

app.get('/give-classes', (request, response) => {
  const data = request.query
  const isNotEmpty = Object.keys(data).length > 0
  if(isNotEmpty){
    return response.redirect('/study')
  }
  return response.render('give-classes.html', {subjects,weekdays})
})

app.listen(5000)