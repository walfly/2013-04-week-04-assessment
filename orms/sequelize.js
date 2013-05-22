Users = Sequalize.define('users', {
	username: Sequalize.STRING,
	userID: {type: Sequalize.INTEGER, autoIncrement: true},
	firstname: Sequalize.STRING,
	Lastname: Sequalize.STRING
});

Tweets = Sequalize.define('tweets', {
	message: Sequalize.STRING,
	userID: Sequalize.INTEGER,
	messageID: {type: Sequalize.INTEGER, autoIncrement: true}
});
