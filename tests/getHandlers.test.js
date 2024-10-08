
const fetch = require('node-fetch');
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	console.log("Expecting status to be 200");
	expect(actualStatus).toBe(200);
});

test('should retrieve product details with expected data', async () => {
  let actualStatus;
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


  expect(actualStatus).toBe(200);

  expect(responseBody).toHaveProperty('name', 'For picnic');
});
