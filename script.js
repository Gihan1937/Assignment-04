$(document).ready(function() {

	function printHTML(text){
		var printHTML = document.getElementById('print_text');
		printHTML.innerHTML += text;
	}

//Button Wars!//

	$('#first_button').click(function(){
			$('.button2').remove();
			printHTML("<h4 class='button1'>I'm right</h4>");
		})

	$('#second_button').click(function(){
			$('.button1').remove();
			printHTML("<h4 class='button2'>No, I'm right!</h4>");
	})

// Don't Hover!//

	$('.dont_hover').hover(function(){
		alert("Hey, I told you not to hover over me!");
	})

// Custom Events//

	$('body').on('customEvent', function(){
			$('.custom').css({
				'background-color': '#878787',
				height: '400px'
		});
	});

	$('.custom').on('click', function(){
			$('body').trigger('customEvent');
		});


});
function validateForm() {
	event.preventDefault();
  let x = document.forms["sform"]["pwd"].value;
	if (x !== "12345678") {
		alert("Password is Incorrect!");
		return true;
	}
	//if (x == "12345678") {
		 let nh1 = document.getElementById('n1');
		 nh1.innerText = 'How are you';
		
	//}
  }
