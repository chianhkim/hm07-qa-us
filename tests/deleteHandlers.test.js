// eslint-disable-next-line no-undef
const fetch = require('node-fetch');
const config = require('../config');

test('status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
        const actualStatus = response.status;
        expect(actualStatus).toBe(200);
    } catch (error) {
        console.error(error);
        expect(error).toBeUndefined();
    }
});
test('response: the kit has been sucessfully deleted', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const responseBody = await response.json(); 
		console.log('Response Body:', responseBody);
		expect(responseBody).toHaveProperty('ok', true);  
	} catch (error) {
		console.error(error);
		expect(error).toBeUndefined(); 
	}
});