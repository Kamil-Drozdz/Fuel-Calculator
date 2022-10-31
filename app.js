function multiply() {
	const avarageCombustion = document.getElementById('avarage-combustion').value;
	const fuelCost = document.getElementById('fuel-cost').value;
	const routeLength = document.getElementById('route-length').value;
	const extraCosts = document.getElementById('extra-costs').value;
	const result = (document.getElementById('result').innerHTML =
		avarageCombustion * fuelCost * (routeLength / 100) + 'zł');
	result + extraCosts;
}
