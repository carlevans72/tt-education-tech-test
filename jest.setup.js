// jest.setup.js
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch'; // For polyfilling window.fetch in tests
import { server } from './mocks/server';

beforeAll(() =>
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href,
      );
    },
  }),
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

global.console = {
  ...console,
  error: jest.fn(),
  watn: jest.fn(),
};
