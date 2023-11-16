



// numeric buttons

	screenNum();

	function screenNum() {

		var fieldArray = [];
		var formulaArray = [];
		var formulaFinished = [];
		var result = 0;

			//1 button			
			var btn_1 = document.querySelector('#btn1');
			btn_1.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn1").textContent;
				fieldArray.push(fieldNum);				
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//2 button
			var btn_2 = document.querySelector('#btn2');
			btn_2.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn2").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//3 button
			var btn_3 = document.querySelector('#btn3');
			btn_3.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn3").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//4 button
			var btn_4 = document.querySelector('#btn4');
			btn_4.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn4").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//5 button
			var btn_5 = document.querySelector('#btn5');
			btn_5.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn5").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//6 button
			var btn_6 = document.querySelector('#btn6');
			btn_6.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn6").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//7 button
			var btn_7 = document.querySelector('#btn7');
			btn_7.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn7").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//8 button
			var btn_8 = document.querySelector('#btn8');
			btn_8.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn8").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//9 button
			var btn_9 = document.querySelector('#btn9');
			btn_9.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn9").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});

			//0 button
			var btn_0 = document.querySelector('#btn0');
			btn_0.addEventListener('click', function() {
				var fieldNum = document.querySelector("#btn0").textContent;
				fieldArray.push(fieldNum);
				document.querySelector("#calcField").textContent = fieldArray.join('');
				});



//operator buttons						
			var addtn = document.querySelector('#add');
			addtn.addEventListener('click', function() {
				formulaArray = formulaArray.concat(fieldArray);
				formulaArray.push('+');		
				fieldArray.length = 0;
				});


			var subtr = document.querySelector('#subt');
			subtr.addEventListener('click', function() {
				formulaArray = formulaArray.concat(fieldArray);
				formulaArray.push('-');		
				fieldArray.length = 0;
				});

			var multi = document.querySelector('#mult');
			multi.addEventListener('click', function() {
				formulaArray = formulaArray.concat(fieldArray);
				formulaArray.push('*');		
				fieldArray.length = 0;
				});


			var divid = document.querySelector('#divide');
			divid.addEventListener('click', function() {
				formulaArray = formulaArray.concat(fieldArray);
				formulaArray.push('/');		
				fieldArray.length = 0;
				});
	
			var btn_equals = document.querySelector('#btneq');
			btn_equals.addEventListener('click', function() {
				formulaArray = formulaArray.concat(fieldArray);
				console.log(formulaArray);
				var formulaFinished = formulaArray.join('');
				console.log(formulaFinished);	
				result = eval(formulaFinished);
				let round_result = result.toFixed(2);
				console.log(result);
				document.querySelector("#calcField").textContent = round_result;
				});
			
		}

//clear button

		clearFieldArray();

		function clearFieldArray() {

			var clearScreen = document.querySelector('.clr');

			clearScreen.addEventListener('click', function() {
				var clearNum = document.querySelector(".clr").value;
				document.querySelector("#calcField").textContent = clearNum;

				//fieldArray.length = 0;
				//formulaArray.length = 0;
				//formulaFinished = 0;

				window.location.reload();

				});
		}

