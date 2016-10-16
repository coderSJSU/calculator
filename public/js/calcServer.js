var ejs = require("ejs");

function showTravel(req,res) {
	ejs.renderFile('./views/travel.ejs',function(err, result) {
	// render on success
	if (!err) {
	res.end(result);
	}
	// render or error
	else {
	res.end('An error occurred');
	console.log(err);
	}
	});
	}