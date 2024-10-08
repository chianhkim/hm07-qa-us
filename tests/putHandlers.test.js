const config = require('../config');

const requestBody = {
		"price": 175
}


test('status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
	});

        const actualStatus = response.status;
        expect(actualStatus).toBe(200);
    } catch (error) {
        console.error(error);
        expect(error).toBeUndefined();
    }
});
	test('response should be OK', async () => {
		try {
			const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
	
			const responseBody = await response.json(); 
			console.log('Response Body:', responseBody);
			expect(responseBody).toHaveProperty('ok', true);  
		} catch (error) {
			console.error(error);
			expect(error).toBeUndefined(); 
		}
	});