import { HttpHeaders, HttpStatus, HttpRequestMethod } from '../';

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

  it('# should all methods as string', () => {
    const methods = Object.keys(HttpRequestMethod);

    methods.forEach((method) => {
      expect(HttpRequestMethod[method]).toBeDefined();
      expect(typeof HttpRequestMethod[method]).toEqual('string');
    });
  });


  it('# should read http status code with `SC` prefix',()=>{
    expect(HttpStatus.SC_OK).toEqual(200);
  })
});
