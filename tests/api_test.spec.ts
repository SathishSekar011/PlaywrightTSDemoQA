import { test, expect, request } from '@playwright/test';

test('@api API test for user creation, authentication, and deletion', async ({ request }) => {
    let userName = `Test${Date.now()}`;
    let firstName = 'Sathish' + Math.floor(Math.random() * 1000);
    let lastName = 'Testing' + Math.floor(Math.random() * 1000);
    let password = 'Test@' + Math.floor(Math.random() * 1000);
    const response = await request.post('/Account/v1/User', {
        data: { userName, password }
    });
    console.log(process.env.BASE_URL);
    console.log(process.env.REQUEST_TIMEOUT);
    console.log(await response.json());
    const { userID } = await response.json();
    console.log(userID);

    const tokenResponse = await request.post('/Account/v1/GenerateToken', {
        data: { userName, password }
    });
    const { token } = await tokenResponse.json();
    console.log(token);

    const userResponse = await request.get(`/Account/v1/User/${userID}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    console.log(await userResponse.json());

    const deleteResponse = await request.delete(`/Account/v1/User/${userID}`,
        { headers: { 'Authorization': `Bearer ${token}` } }
    );
    console.log(deleteResponse.status());
});



