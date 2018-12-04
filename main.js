$(document).ready(function() {
	let quoteArray = [
		'Do. Or do not. There is no try.',
	    'You can’t stop change any more than you can stop the suns from setting.',
	    'Your focus determines your reality.',
	    'In my experience there is no such thing as luck.',
	    'Your eyes can deceive you. Don’t trust them.',
	    'There’s always a bigger fish.',
	    'Sometimes we must let go of our pride and do what is requested of us.',
	    'Fear is the path to the dark side.',
	    'Rejoice for those around you who transform into the Force.',
	    'Always pass on what you have learned.',
	    'Remember...the Force will be with you, always.',
	    'The belonging you seek is not behind you...it is ahead.'
    ]

    let quotes = quoteArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let randomQuote = quotes[0]

    let quote = `<h2>&ldquo;${randomQuote}&rdquo;</h2> <h3><i class='fa fa-rebel'></i></h3>`

    $('#quote').html(quote)
})
