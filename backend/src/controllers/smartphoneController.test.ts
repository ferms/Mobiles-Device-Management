// smartphoneController.test.ts

const request = require("supertest");
const express = require("express");
const { getSmartphone, createSmartphone, updateSmartphone, deleteSmartphone } = require('./mobileController');

// Setup Express App for Testing
const app = express();
app.use(express.json()); // Enable JSON body parsing
app.get('/smartphones', getSmartphone);
app.post('/smartphones', createSmartphone);
app.put('/smartphones/:id', updateSmartphone);
app.delete('/smartphones/:id', deleteSmartphone);

// Test Suite
describe('Smartphone Controller', () => {
  // Test for GET /smartphones
  it('should return 204 No Content when no smartphones exist', async () => {
    const response = await request(app).get('/smartphones');
    expect(response.status).toBe(204);
  });

  // Test for POST /smartphones
  it('should create a new smartphone and return it', async () => {
    const smartphoneData = {
      name: 'iPhone 12',
      model: 'Pro',
      storage: '128GB'
    };

    const response = await request(app).post('/smartphones').send(smartphoneData);

    expect(response.status).toBe(201); // Expect successful creation
    expect(response.body).toHaveProperty('id'); // Expect the new smartphone to have an ID
    expect(response.body.name).toBe('iPhone 12');
    expect(response.body.model).toBe('Pro');
    expect(response.body.storage).toBe('128GB');
    expect(response.body.completed).toBe(false);
  });

  // Test for PUT /smartphones/:id
  it('should update a smartphone and return the updated data', async () => {
    // First, create a new smartphone
    const newSmartphone = {
      name: 'Samsung S21',
      model: 'Ultra',
      storage: '256GB'
    };
    const postResponse = await request(app).post('/smartphones').send(newSmartphone);
    const smartphoneId = postResponse.body.id;

    // Then, update the smartphone
    const updatedSmartphone = {
      name: 'Samsung S22',
      model: 'Plus',
      storage: '512GB',
      completed: true
    };
    const response = await request(app).put(`/smartphones/${smartphoneId}`).send(updatedSmartphone);

    expect(response.status).toBe(200); // Expect successful update
    expect(response.body.name).toBe('Samsung S22');
    expect(response.body.model).toBe('Plus');
    expect(response.body.storage).toBe('512GB');
    expect(response.body.completed).toBe(true);
  });

  // Test for DELETE /smartphones/:id
  it('should delete a smartphone and return no content', async () => {
    // First, create a new smartphone
    const newSmartphone = {
      name: 'OnePlus 9',
      model: 'Pro',
      storage: '128GB'
    };
    const postResponse = await request(app).post('/smartphones').send(newSmartphone);
    const smartphoneId = postResponse.body.id;

    // Then, delete the smartphone
    const response = await request(app).delete(`/smartphones/${smartphoneId}`);

    expect(response.status).toBe(204); // Expect successful deletion
  });

  // Test for 404 when smartphone is not found
  it('should return 404 when trying to update a non-existing smartphone', async () => {
    const response = await request(app)
      .put('/smartphones/99999') // Non-existing ID
      .send({ name: 'Non-existent Smartphone' });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('smartphone not found');
  });
});
