// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
	expect(actualStatus).toBe(200);
});
	let response;
	let responseBody;
test('response: the kit has been sucessfully deleted', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
});
		const responseBody = await response.json(); 
	} catch (error) {
	console.error('Error during the DELETE request:',error);
	expect(responseBody).toHaveProperty('ok', true);
	}
});