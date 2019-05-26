/* references:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */

export interface requestHeader {
  name: string
  values: string[]
  document: string[]
}

export const requestHeaders: Record<string, requestHeader> = {
  Accept: {
    name: 'Accept',
    values: [],
    document: [
      'The `Accept` request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the `Content-Type` response header. Browsers set adequate values for this header depending on the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Accept: <MIME_type>/<MIME_subtype>',
      'Accept: <MIME_type>/*',
      'Accept: */*',
      '',
      '// Multiple types, weighted with the quality value syntax:',
      'Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8',
      '```'
    ]
  },
  'Accept-Charset': {
    name: 'Accept-Charset',
    values: [],
    document: [
      'The `Accept-Charset` request HTTP header advertises which character set the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice within the `Content-Type` response header. Browsers usually don\'t set this header as the default value for each content type is usually correct and transmitting it would allow easier fingerprinting.',
      '',
      'If the server cannot serve any matching character set, it can theoretically send back a `406` (Not Acceptable) error code. But, for a better user experience, this is rarely done and the more common way is to ignore the `Accept-Charset` header in this case.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Accept-Charset: <charset>',
      '',
      '// Multiple types, weighted with the quality value syntax:',
      'Accept-Charset: utf-8, iso-8859-1;q=0.5',
      '```'
    ]
  },
  'Accept-Encoding': {
    name: 'Accept-Encoding',
    values: [],
    document: [
      'The `Accept-Encoding` request `HTTP` header advertises which content encoding, usually a compression algorithm, the client is able to understand. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the `Content-Encoding` response header.',
      '',
      'Even if both the client and the server supports the same compression algorithms, the server may choose not to compress the body of a response, if the identity value is also acceptable. Two common cases lead to this:',
      '',
      '- The data to be sent is already compressed and a second compression won\'t lead to smaller data to be transmitted. This may be the case with some image formats;',
      '- The server is overloaded and cannot afford the computational overhead induced by the compression requirement. Typically, Microsoft recommends not to compress if a server uses more than 80% of its computational power.',
      '',
      'As long as the identity value, meaning no encoding, is not explicitly forbidden, by an `identity;q=0` or a `*;q=0` without another explicitly set value for identity, the server must never send back a `406` Not Acceptable error.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Accept-Encoding: gzip',
      'Accept-Encoding: compress',
      'Accept-Encoding: deflate',
      'Accept-Encoding: br',
      'Accept-Encoding: identity',
      'Accept-Encoding: *',
      '',
      '// Multiple algorithms, weighted with the quality value syntax:',
      'Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5',
      '```'
    ]
  },
  'Accept-Language': {
    name: 'Accept-Language',
    values: [],
    document: [
      'The `Accept-Language` request `HTTP` header advertises which languages the client is able to understand, and which locale variant is preferred. (By languages, we mean natural languages, such as English, and not programming languages.) Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Language response header. Browsers set adequate values for this header according to their user interface language and even if a user can change it, this happens rarely (and is frowned upon as it leads to fingerprinting).',
      '',
      'This header is a hint to be used when the server has no way of determining the language via another way, like a specific URL, that is controlled by an explicit user decision. It is recommended that the server never overrides an explicit decision. The content of the `Accept-Language` is often out of the control of the user (like when traveling and using an Internet Cafe in a different country); the user may also want to visit a page in another language than the locale of their user interface.',
      '',
      'If the server cannot serve any matching language, it can theoretically send back a `406` (Not Acceptable) error code. But, for a better user experience, this is rarely done and more common way is to ignore the `Accept-Language` header in this case.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Accept-Language: <language>',
      'Accept-Language: *',
      ',',
      '// Multiple types, weighted with the quality value syntax:',
      'Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
      '```'
    ]
  },
  'Access-Control-Request-Headers': {
    name: 'Access-Control-Request-Headers',
    values: [],
    document: [
      'The `Access-Control-Request-Headers` request header is used when issuing a preflight request to let the server know which `HTTP` headers the client might send when the actual request is made.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Access-Control-Request-Headers: <header-name>, <header-name>, ...',
      '```'
    ]
  },
  'Access-Control-Request-Method': {
    name: 'Access-Control-Request-Method',
    values: [],
    document: [
      'The `Access-Control-Request-Method` request header is used when issuing a preflight request to let the server know which `HTTP` method will be used when the actual request is made. This header is necessary as the preflight request is always an `OPTIONS` and doesn\'t use the same method as the actual request.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Access-Control-Request-Method: <method>',
      '```'
    ]
  },
  'Allow': {
    name: 'Allow',
    values: [],
    document: [
      'The `Allow` header lists the set of methods support by a resource.',
      '',
      'This header must be sent if the server responds with a `405` Method Not Allowed status code to indicate which request methods can be used. An empty Allow header indicates that the resource allows no request methods, which might occur temporarily for a given resource, for example.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Allow: <http-methods>',
      '```'
    ]
  },
  'Authorization': {
    name: 'Authorization',
    values: [],
    document: [
      'The `HTTP` `Authorization` request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the `WWW-Authenticate` header.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Authorization: <type> <credentials>',
      '```'
    ]
  },
}
