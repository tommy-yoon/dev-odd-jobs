// const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const exampleRouter = require('./routes/examples')
const membersRouter = require('./routes/members')
const apprenticesRouter = require('./routes/apprentices')
const jobsRouter = require('./routes/jobs')

const app = express()

const logLevel = process.env.NODE_LOG_LEVEL || 'tiny'

app.use(logger(logLevel))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// called all the time before any other function
app.use((req, res, next) => {
  // Here any task for all the requests can be added
  // console.log('HTTP request received')
  next()
})

app.use('/', indexRouter)
app.use('/examples', exampleRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/members', membersRouter)
app.use('/api/v1/apprentices', apprenticesRouter)
app.use('/api/v1/jobs', jobsRouter)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404))
// })

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   // res.render('error')
//   res.json({
//     message: err.message,
//     error: err
//   })
// })

app.get('*', (req, res) => {
  const appPath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})

module.exports = app
