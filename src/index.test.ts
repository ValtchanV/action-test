import request from 'supertest';
import app from './index';

describe('Weather REST Service', () => {
  describe('GET /weather', () => {
    it('should return weather data', async () => {
      const response = await request(app)
        .get('/weather')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('city');
      expect(response.body).toHaveProperty('temperature');
      expect(response.body).toHaveProperty('condition');
      expect(response.body).toHaveProperty('humidity');
      expect(response.body).toHaveProperty('windSpeed');
      expect(response.body).toHaveProperty('timestamp');
      expect(typeof response.body.temperature).toBe('number');
      expect(typeof response.body.humidity).toBe('number');
      expect(typeof response.body.windSpeed).toBe('number');
    });

    it('should accept city query parameter', async () => {
      const city = 'New York';
      const response = await request(app)
        .get(`/weather?city=${city}`)
        .expect(200);

      expect(response.body.city).toBe(city);
    });

    it('should return default city when no query parameter provided', async () => {
      const response = await request(app)
        .get('/weather')
        .expect(200);

      expect(response.body.city).toBe('Unknown');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
    });
  });
});

