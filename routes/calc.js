/**
 * http://usejsdoc.org/
 */
var ejs = require("ejs");


function showCalc(req,res) {
	ejs.renderFile('./views/calc.ejs',function(err, result) {
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


function calculateIt(req,res){
	var eq = req.param("eq");
	
	var json_responses;
	
	var resp = 0 ;
	
	try{
		resp = eval(eq);
		json_responses = {"statusCode" : 200, "res" : resp};
		res.send(json_responses);
	}
	catch(err){
		json_responses = {"statusCode" : 401};
		res.send(json_responses);
	}
	
};




exports.showCalc=showCalc;
exports.calculateIt=calculateIt;