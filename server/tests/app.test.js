import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import request from 'supertest';
import app from '../src/app.js'; // Adjust the path as needed

// Mock the redis middleware to avoid connection issues in tests
jest.mock('#middlewares/redisMiddleware.js', () => {
  return jest.fn(() => (req, res, next) => next());
});

let server;

describe('Server', () => {
  beforeAll((done) => {
    server = app.listen(0, () => {
      done();
    });
  });

  afterAll((done) => {
    // Ensure that the server is properly closed after the tests are done
    server.close(() => {
      done();
    });
  });

  it('should return Hello World', async () => {
    const response = await request(server).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
