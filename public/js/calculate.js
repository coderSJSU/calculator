var num1 ;
var num2 ;
var sym;
var SUM = '+';
var MIN = '-';
var DIV = '/';
var MULT = '*';

$(document).ready(function() {
		$('#calc-screen').val(0);
	
	
	  $(".num").click(function(e) {
	    e.preventDefault();	
	    updateNumberOnScreen($(this).val());
	   // alert($(this).val());
	  });
	  
	  $(".sym").click(function(e) {
		  e.preventDefault();	
		    updateNumberOnScreen($(this).val());
		  
		  
		 // $('#inp1').val($('#calc-screen').val());
		   // num1 = $('#calc-screen').val();
		   // $('#calc-screen').val(0);
		  //  sym = $(this).val();
		  //  $('#sym').val(sym); 
		    	
	  });
	  
	  $(".eq").click(function(e) {
		//  $('#inp2').val($('#calc-screen').val());
		 // alert(eval("2*3"));
	  });
	  
	  $(".on").click(function(e) {
		    e.preventDefault();
		    $('#calc-screen').val(0);
		    //$('#calc-screen').label(0);
	  });
	  
	});
	
function updateNumberOnScreen(num){
	var curr = $('#calc-screen').val();
	if(curr!= 0)
		curr = curr + ""+ num;
	else curr = num;	
	
	$('#calc-screen').val(curr);
	}