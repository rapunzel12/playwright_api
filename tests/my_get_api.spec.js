const { test, expect } = require('@playwright/test');

test('API GET Request a Single User', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200);
  
    const text = await response.text();  
    expect(text).toContain('Janet');
    console.log(await response.json());
  });

  test('A list of users', async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Tobias');
    console.log(await response.json());
  });

  test('A single user not found', async({request})=>{

    const response=await request.get('https://reqres.in/api/users/23');
    expect(response.status()).toBe(404);

  });

  test('List resource', async({request})=>{

    const response = await request.get('https://reqres.in/api/unknown');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('blue turquoise');
    console.log(await response.json());
  });


  test('A single resource not found', async({request})=>{

    const response = await request.get('https://reqres.in/api/unknown/23');
    expect(response.status()).toBe(404);
  })

  test('Delayed response', async({request})=>{
    
    const response = await request.get('https://reqres.in/api/users?delay=3');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Eve');
    console.log(await response.json());
  })

