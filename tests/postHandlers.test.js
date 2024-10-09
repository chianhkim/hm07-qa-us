const config = require("../config");

const requestBody = {
  products: [
    {
      id: 5,
      quantity: 1,
    },
    {
      id: 4,
      quantity: 5,
    },
  ],
};

//first test
test("status should be 200", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});

//second test
test("response body should contain expected data", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  let containsExpectedData = false;
  for (const key in actualResponseBody) {
    if (actualResponseBody[key]["Sprite Soft Drink"]) {
      containsExpectedData = true;
      break;
    }
  }

  expect(containsExpectedData).toBe(true);
});