module.exports = {
	index (request, response){
		response.send("teste");
	},

	storeTemp (request, response){
		console.log(request.body.value);
	},

	storeLum (request, response){
		const a = request.body.valueLum;
		response.send(a + "te")
		console.log("teste");
	},

	storeBatimento (request, response){
		const a = request.body.valueBatimento;
	},

	storeRuido (request, response){
		const a = request.body.valueRuido;
	},

	storeAcce(request, response) {
		const a = request.body.valueAcce;
	}
}
