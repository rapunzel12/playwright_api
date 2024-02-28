const { test, expect } = require('@playwright/test');

test('Create User', async({request})=>{
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            'name': 'Janko',
            'job': 'teacher'
        }
    })
    expect(response.status()).toBe(201);
    
    const text = await response.text();
    expect(text).toContain('Janko');
    console.log(await response.json());
});

test('Successful registration', async({request})=>{
    const response = await request.post('https://reqres.in/api/register',{
        data: {
            'email': 'eve.holt@reqres.in',
            'password': 'pistol'
        }
    })
    expect(response.status()).toBe(200);

})

test('Unsuccessful registration', async({request})=>{
    const response = await request.post('https://reqres.in/api/register', {
        data: {
            "email": "sydney@fife"
        }
    })
    expect(response.status()).toBe(400);
})

test('Succesful login', async({request})=>{
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });
    expect(response.status()).toBe(200);
})

test('Unsuccesful login', async({request})=>{
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            "email": "peter@klaven"
        }
    });
    expect(response.status()).toBe(400);

})