export enum HttpStatus {
  SC_CONTINUE = 100,
  SC_SWITCHING_PROTOCOLS = 101,
  SC_PROCESSING = 102,
  SC_OK = 200,
  SC_CREATED = 201,
  SC_ACCEPTED = 202,
  SC_NON_AUTHORITATIVE_INFORMATION = 203,
  SC_NO_CONTENT = 204,
  SC_RESET_CONTENT = 205,
  SC_PARTIAL_CONTENT = 206,
  SC_MULTI_STATUS = 207,
  SC_MULTIPLE_CHOICES = 300,
  SC_MOVED_PERMANENTLY = 301,
  SC_MOVED_TEMPORARILY = 302,
  SC_SEE_OTHER = 303,
  SC_NOT_MODIFIED = 304,
  SC_USE_PROXY = 305,
  SC_TEMPORARY_REDIRECT = 307,
  SC_BAD_REQUEST = 400,
  SC_UNAUTHORIZED = 401,
  SC_PAYMENT_REQUIRED = 402,
  SC_FORBIDDEN = 403,
  SC_NOT_FOUND = 404,
  SC_METHOD_NOT_ALLOWED = 405,
  SC_NOT_ACCEPTABLE = 406,
  SC_PROXY_AUTHENTICATION_REQUIRED = 407,
  SC_REQUEST_TIMEOUT = 408,
  SC_CONFLICT = 409,
  SC_GONE = 410,
  SC_LENGTH_REQUIRED = 411,
  SC_PRECONDITION_FAILED = 412,
  SC_REQUEST_TOO_LONG = 413,
  SC_REQUEST_URI_TOO_LONG = 414,
  SC_UNSUPPORTED_MEDIA_TYPE = 415,
  SC_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  SC_EXPECTATION_FAILED = 417,
  SC_INSUFFICIENT_SPACE_ON_RESOURCE = 419,
  SC_METHOD_FAILURE = 420,
  SC_UNPROCESSABLE_ENTITY = 422,
  SC_LOCKED = 423,
  SC_FAILED_DEPENDENCY = 424,
  SC_INTERNAL_SERVER_ERROR = 500,
  SC_NOT_IMPLEMENTED = 501,
  SC_BAD_GATEWAY = 502,
  SC_SERVICE_UNAVAILABLE = 503,
  SC_GATEWAY_TIMEOUT = 504,
  SC_HTTP_VERSION_NOT_SUPPORTED = 505,
  SC_INSUFFICIENT_STORAGE = 507,

  // remove `SC` prefix alias
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207,
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  MOVED_TEMPORARILY = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  TEMPORARY_REDIRECT = 307,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  REQUEST_TOO_LONG = 413,
  REQUEST_URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  INSUFFICIENT_SPACE_ON_RESOURCE = 419,
  METHOD_FAILURE = 420,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  INSUFFICIENT_STORAGE = 507
}
