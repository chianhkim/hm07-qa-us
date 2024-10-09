const config = require('../config');

const requestBody = {
		"price": 175
}


test('status should be 200', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
	});

        const actualStatus = response.status;
    } catch (error) {
        console.error(error);
		expect(actualStatus).toBe(200);
    }
});
	test('response should be OK', async () => {
		let responseBody;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
	
			const responseBody = await response.json(); 
			expect(responseBody).toHaveProperty('ok', true);  
		} catch (error) {
			console.error(error);
			expect(responseBody).toHaveProperty('ok', true);  
		}
	});