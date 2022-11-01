const resultCostTravel = document.getElementById('resultCostTravel');
const resultAvarageCombustion = document.getElementById('resultAvarageCombustion');
const resultCost = document.getElementById('resultCost');
const formButtonCostTravel = document.querySelector('.a-button-average-cost-equal');
const formButtonAverageCombustion = document.querySelector('.a-button-average-combustion-equal');

function multiply() {
	const avarageCombustion = document.getElementById('avarage-combustion').value;
	const fuelCost = document.getElementById('fuel-cost').value;
	const routeLength = document.getElementById('route-length').value;
	const extraCosts = document.getElementById('extra-costs').value;
	var sum = avarageCombustion * fuelCost * (routeLength / 100);
	sum += Math.round(extraCosts);
	resultCostTravel.innerHTML = parseFloat(sum).toFixed(2) + ' zł';
}

formButtonCostTravel.addEventListener('click', () => {
	resultCostTravel?.classList?.toggle('isActive');
	formButtonCostTravel?.classList?.toggle('isActive');
});

function avarageCombustion() {
	const combustionInLiters = document.getElementById('avarage-combustion-inLiters').value;
	const routeInKm = document.getElementById('route-length-Km').value;
	const literPrice = document.getElementById('liter-price').value;
	var sum = combustionInLiters * (routeInKm / 100);
	resultAvarageCombustion.innerHTML = parseFloat(sum).toFixed(2) + ' Litrów';
	var sum1 = combustionInLiters * literPrice;
	resultCost.innerHTML = parseFloat(sum1).toFixed(2) + ' zł';

	console.log(sum);
}

formButtonAverageCombustion.addEventListener('click', () => {
	resultAvarageCombustion?.classList?.toggle('isActive');
	resultCost?.classList?.toggle('isActive');
	formButtonAverageCombustion?.classList?.toggle('isActive');
});
