import { HttpHeaders,HttpStatus } from '../';

describe('http core constants', () => {
  it('# should all headers as string', () => {
    const headers = Object.keys(HttpHeaders);

    headers.forEach((header) => {
      expect(HttpHeaders[header]).toBeDefined();
      expect(typeof HttpHeaders[header]).toEqual('string');
    });
  });

  it('# should all status code as number', () => {
    const statuses = Object.keys(HttpStatus);

    statuses.forEach((status) => {
      expect(HttpStatus[status]).toBeDefined();
      expect(typeof HttpStatus[status]).toEqual('number');
    });
  });
});
