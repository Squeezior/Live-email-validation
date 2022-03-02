'use strict';

const emailInput = document.querySelector('#email');

const emailRegex =
	/^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/;

// matt.kowalski92@gmail.com
// A-Z  Uppercases
// a-z  Lowercases
// \d  any number 0-9
// \.  any possible dot
// -  hyphens
// +  however long the range of characters it needs to be
// @  must be @
// {2,6}  between 2 and 6 characters long
// ?  make the last parenthesis before question mark optional
// $  match this to the end of the string

emailInput.addEventListener('keyup', (e) => {
	// console.log(e.target.value);
	if (emailRegex.test(e.target.value)) {
		emailInput.parentElement.classList.add('valid');
	} else {
		emailInput.parentElement.classList.remove('valid');
	}
});
