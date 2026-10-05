const express = require('express')
const app = express()

const cors = require("cors")

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

// The app.get functions below are being processed in Node.js running on the server.
// Implement a custom About page.

app.get('/api/roll', (request, response) => {
	console.log('Calling "/add-two-integers" on the Node.js server.')
	function roll(name)
	{
		let rand = Math.floor(Math.random()*6)+1;
		return (rand)

	}
	const rolls = []
    for(i=0; i<5; i++)
    {
        console.log ("die"+i)
        rolls.push(roll("die"+i))
    }
	console.log (rolls)
	response.type('text/plain')
	response.send(rolls)
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
