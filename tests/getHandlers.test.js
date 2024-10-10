const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('should successfully receive kit and products in kit', async () => {
  let responseBody;

  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    actualStatus = response.status;
    responseBody = await response.json();
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
  expect(responseBody).toHaveProperty('name', 'For picnic');
});
