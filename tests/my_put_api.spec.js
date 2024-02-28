const { test, expect } = require('@playwright/test');

test('Put request', async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            'name': 'Janko',
            'job': 'teacher'
        }
    })
    expect(response.status()).toBe(200);
    
    const text = await response.text();
    expect(text).toContain('Janko');
    console.log(await response.json());
});