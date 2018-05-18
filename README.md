# LIRI App
quick app to explore nodeJS,  APIs, and the joys of asynchronous programming

# To run the application
prerequisite: need to have a .env file at the same level as this README file, with:
* SPOTIFY_ID
* SPOTIFY_SECRET
* TWITTER_CONSUMER_KEY
* TWITTER_CONSUMER_SECRET
* TWITTER_ACCESS_TOKEN_KEY
* TWITTER_ACCESS_TOKEN_SECRET
* OMDB_ACCESS_KEY

# Available Command Line options
`node liri.js my-tweets`
  This will return a set of tweets related to my account

`node liri.js spotify-this-song -t "song title"`
This will return Spotify information related to the input song

`node liri.js movie-this -m "movie title"`
This will return IMDB information related to the input movie

# Thank you!
