# Node Http Constants

[![NPM](https://img.shields.io/npm/v/http-core-constants.svg)](https://www.npmjs.com/package/http-core-constants) [![Github Workflow Status](https://github.com/aquariuslt/http-core-constants/workflows/ci/badge.svg)](https://github.com/aquariuslt/http-core-constants) [![codecov](https://codecov.io/gh/aquariuslt/http-core-constants/branch/master/graph/badge.svg)](https://codecov.io/gh/aquariuslt/http-core-constants) [![Semantic-Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Provide http-constants: (standard)headers and status code from java version `org.apache.httpcomponents:httpcore`

## Usage

```typescript
import { HttpHeaders, HttpStatus, HttpRequestMethod } from 'http-core-constants';

console.log(HttpHeaders.ACCEPT); // output: Accept
console.log(HttpStatus.SC_OK); // output: 200
console.log(HttpRequestMethod.GET); // output: GET
```
