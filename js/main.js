var elForm = document.querySelector('.form');
var elFormInputA = document.querySelector('.form-input-a');
var elFormInputB = document.querySelector('.form-input-b');
var elFormInputC = document.querySelector('.form-input-c');
var elFormBtn = document.querySelector('.form-btn');
var elOutputD = Number(document.querySelector('.output-d'));
var elOutputX = document.querySelector('.output-x');
var elOutputY = document.querySelector('.output-y');


elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();


	var numberA = Number(elFormInputA.value);
	var numberB = Number(elFormInputB.value);
	var numberC = Number(elFormInputC.value);


	elOutputD = Math.pow(numberB, 2) - 4 * numberC * numberA;

	if (elOutputD > 0) {
		elOutputY.textContent = 'Тенглама 2 илдизга эга';
	} else if (elOutputD === 0) {
		elOutputY.textContent = 'Тенглама 2 та тенг илдизга эга'
	} else {
		elOutputY.textContent = 'Тенглама илдизга эга эмас';
	}

})