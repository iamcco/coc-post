/* references:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */

export interface requestHeader {
  name: string
  values: string[]
  document: string[]
}

export const requestHeaders: Record<string, requestHeader> = {
  URL: {
    name: 'URL',
    values: [],
    document: [
      '`HTTP` request `URL`',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'URL: https://yuuko.cn',
      '```'
    ]
  },
  Method: {
    name: 'Method',
    values: [
      "GET",
      "POST",
      "HEAD",
      "OPTIONS",
      "DELETE",
      "PUT",
      "PATCH",
      "TRACE",
      "CONNECT"
    ],
    document: [
      '`HTTP` request `Method`',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Method: GET',
      'Method: POST',
      'Method: PUT',
      '```'
    ]
  },
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
  'Cache-Control': {
    name: 'Cache-Control',
    values: [],
    document: [
      'The `Cache-Control` general-header field is used to specify directives for caching mechanisms in both requests and responses. Caching directives are unidirectional, meaning that a given directive in a request is not implying that the same directive is to be given in the response.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Authorization: <type> <credentials>',
      'Cache-Control: max-age=<seconds>',
      'Cache-Control: max-stale[=<seconds>]',
      'Cache-Control: min-fresh=<seconds>',
      'Cache-Control: no-cache ',
      'Cache-Control: no-store',
      'Cache-Control: no-transform',
      'Cache-Control: only-if-cached',
      '```'
    ]
  },
  'Connection': {
    name: 'Connection',
    values: [],
    document: [
      'The `Connection` general header controls whether or not the network connection stays open after the current transaction finishes. If the value sent is keep-alive, the connection is persistent and not closed, allowing for subsequent requests to the same server to be done.',
      '',
      'Except for the standard hop-by-hop headers (`Keep-Alive`, `Transfer-Encoding`, `TE`, `Connection`, `Trailer`, `Upgrade`, `Proxy-Authorization` and `Proxy-Authenticate`), any hop-by-hop headers used by the message must be listed in the Connection header, so that the first proxy knows it has to consume them and not forward them further. Standard hop-by-hop headers can be listed too (it is often the case of Keep-Alive, but this is not mandatory).',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Connection: keep-alive',
      'Connection: close',
      '```'
    ]
  },
  'Content-Encoding': {
    name: 'Content-Encoding',
    values: [],
    document: [
      'The `Content-Encoding` entity header is used to compress the `media-type`. When present, its value indicates which encodings were applied to the entity-body. It lets the client know how to decode in order to obtain the `media-type` referenced by the `Content-Type` header.',
      '',
			'The recommendation is to compress data as much as possible and therefore to use this field, but some types of resources, such as jpeg images, are already compressed. Sometimes, using additional compression doesn\'t reduce payload size and can even make the payload longer.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Content-Encoding: gzip',
      'Content-Encoding: compress',
      'Content-Encoding: deflate',
      'Content-Encoding: identity',
      'Content-Encoding: br',
      '',
      '// Multiple, in the order in which they were applied',
      'Content-Encoding: gzip, identity',
      'Content-Encoding: deflate, gzip',
      '```'
    ]
  },
  'Content-Language': {
    name: 'Content-Language',
    values: [],
    document: [
      'The `Content-Language` entity header is used to describe the language(s) intended for the audience, so that it allows a user to differentiate according to the users\' own preferred language.',
      '',
      'For example, if `Content-Language: de-DE` is set, it says that the document is intended for German language speakers (however, it doesn\'t indicate the document is written in German. For example, it might be written in English as part of a language course for German speakers. If you want to indicate which language the document is written in, use the lang attribute instead).',
      '',
      'If no `Content-Language` is specified, the default is that the content is intended for all language audiences. Multiple language tags are also possible, as well as applying the `Content-Language` header to various media types and not only to textual documents.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Content-Language: de-DE',
      'Content-Language: en-US',
      'Content-Language: de-DE, en-CA',
      '```'
    ]
  },
  'Content-Length': {
    name: 'Content-Length',
    values: [],
    document: [
      'The `Content-Length` entity header indicates the size of the `entity-body`, in bytes, sent to the recipient.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Content-Length: <length>',
      '```'
    ]
  },
  'Content-Location': {
    name: 'Content-Location',
    values: [],
    document: [
      'The `Content-Location` header indicates an alternate location for the returned data. The principal use is to indicate the URL of a resource transmitted as the result of content negotiation.',
      '',
      'Location and `Content-Location` are different. Location indicates the URL of a redirect, while `Content-Location` indicates the direct URL to use to access the resource, without further content negotiation in the future. Location is a header associated with the response, while `Content-Location` is associated with the data returned. This distinction may seem abstract without examples.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Content-Location: <url>',
      '```'
    ]
  },
  'Content-Type': {
    name: 'Content-Type',
    values: [
      'multipart/form-data',
      'application/x-www-form-urlencoded',
      'application/json;charset=utf-8'
    ],
    document: [
      'The `Content-Type` entity header is used to indicate the media type of the resource.',
      '',
      'In responses, a `Content-Type` header tells the client what the content type of the returned content actually is. Browsers will do MIME sniffing in some cases and will not necessarily follow the value of this header; to prevent this behavior, the header `X-Content-Type-Options` can be set to nosniff.',
      '',
      'In requests, (such as `POST` or `PUT`), the client tells the server what type of data is actually sent.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Content-Type: text/html; charset=utf-8',
      'Content-Type: multipart/form-data; boundary=something',
      'Content-Type: multipart/form-data',
      'Content-Type: application/x-www-form-urlencoded',
      'Content-Type: application/json;charset=utf-8',
      '```'
    ]
  },
  'Cookie': {
    name: 'Cookie',
    values: [],
    document: [
      'The `Cookie` `HTTP` request header contains stored `HTTP` cookies previously sent by the server with the `Set-Cookie` header.',
      '',
      'The `Cookie` header is optional and may be omitted if, for example, the browser\'s privacy settings block cookies.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Cookie: <cookie-list>',
      'Cookie: name=value',
      'Cookie: name=value; name2=value2; name3=value3',
      '```'
    ]
  },
  'DNT': {
    name: 'DNT',
    values: [],
    document: [
      'The `DNT` (Do Not Track) request header indicates the user\'s tracking preference. It lets users indicate whether they would prefer privacy rather than personalized content.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'DNT: 0',
      'DNT: 1',
      '```'
    ]
  },
  'Date': {
    name: 'Date',
    values: [],
    document: [
      'The `Date` general `HTTP` header contains the date and time at which the message was originated.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT',
      '```'
    ]
  },
  'Early-Data': {
    name: 'Early-Data',
    values: [],
    document: [
      'The `Early-Data` header is set by an intermediate to indicates that the request has been conveyed in `TLS` early data, and additionally indicates that an intermediary understands the `425` (Too Early) status code.  The `Early-Data` header is not set by the originator of the request (i.e., a browser).',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Early-Data: 1',
      '```'
    ]
  },
  'Expect': {
    name: 'Expect',
    values: [],
    document: [
      'The Expect `HTTP` request header indicates expectations that need to be fulfilled by the server in order to properly handle the request.',
      '',
      'The only expectation defined in the specification is Expect: 100-continue, to which the server shall respond with:',
      '',
      '- `100` if the information contained in the header is sufficient to cause an immediate success,',
      '- `417` (Expectation Failed) if it cannot meet the expectation; or any other 4xx status otherwise.',
      `For example, the server may reject a request if its Content-Length is too large.`,
      '',
      'No common browsers send the `Expect` header, but some other clients such as `cURL` do so by default.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Expect: 100-continue',
      '```'
    ]
  },
  'Forwarded': {
    name: 'Forwarded',
    values: [],
    document: [
      'The `Forwarded` header contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.',
      '',
      'The alternative and `de-facto` standard versions of this header are the `X-Forwarded-For`, `X-Forwarded-Host` and `X-Forwarded-Proto` headers.',
      '',
      'This header is used for debugging, statistics, and generating location-dependent content and by design it exposes privacy sensitive information, such as the IP address of the client. Therefore the user\'s privacy must be kept in mind when deploying this header.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>',
      '```'
    ]
  },
  'From': {
    name: 'From',
    values: [],
    document: [
      'The `From` request header contains an Internet email address for a human user who controls the requesting user agent.',
      '',
      'If you are running a robotic user agent (e.g. a crawler), the `From` header should be sent, so you can be contacted if problems occur on servers, such as if the robot is sending excessive, unwanted, or invalid requests.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'From: <email>',
      '```'
    ]
  },
  'Host': {
    name: 'Host',
    values: [],
    document: [
      'The `Host` request header specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.',
      '',
      'If no port is given, the default port for the service requested (e.g., `80` for an `HTTP` `URL`) is implied.',
      '',
      'A Host header field must be sent in all `HTTP/1.1` request messages. A `400` (Bad Request) status code will be sent to any `HTTP/1.1` request message that lacks a Host header field or contains more than one.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Host: <host>:<port>',
      '```'
    ]
  },
  'If-Match': {
    name: 'If-Match',
    values: [],
    document: [
      'The `If-Match` `HTTP` request header makes the request conditional. For `GET` and `HEAD` methods, the server will send back the requested resource only if it matches one of the listed `ETags`. For `PUT` and other `non-safe` methods, it will only upload the resource in this case.',
      '',
      'The comparison with the stored ETag uses the strong comparison algorithm, meaning two files are considered identical byte to byte only. This is weakened when the  `W/` prefix is used in front of the `ETag`.',
      '',
      'There are two common use cases:',
      '',
      '- For `GET` and `HEAD` methods, used in combination with a Range header, it can guarantee that the new ranges requested comes from the same resource than the previous one. If it doesn\'t match, then a `416` (`Range Not Satisfiable`) response is returned.',
      '- For other methods, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the `412` (Precondition Failed) response is returned.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'If-Match: <etag_value>',
      'If-Match: <etag_value>, <etag_value>, …',
      '```'
    ]
  },
  'If-Modified-Since': {
    name: 'If-Modified-Since',
    values: [],
    document: [
      'The `If-Modified-Since` request `HTTP` header makes the request conditional: the server will send back the requested resource, with a `200` status, only if it has been last modified after the given date. If the request has not been modified since, the response will be a 304 without any body; the Last-Modified response header of a previous request will contain the date of last modification. Unlike `If-Unmodified-Since`, `If-Modified-Since` can only be used with a `GET` or `HEAD`.',
      '',
      'When used in combination with `If-None-Match`, it is ignored, unless the server doesn\'t support `If-None-Match`.',
      '',
      'The most common use case is to update a cached entity that has no associated `ETag`.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT',
      '```'
    ]
  },
  'If-None-Match': {
    name: 'If-None-Match',
    values: [],
    document: [
      'The `If-None-Match` `HTTP` request header makes the request conditional. For `GET` and HEAD methods, the server will send back the requested resource, with a `200` status, only if it doesn\'t have an `ETag` matching the given ones. For other methods, the request will be processed only if the eventually existing resource\'s ETag doesn\'t match any of the values listed.',
      '',
      'When the condition fails for `GET` and `HEAD` methods, then the server must return `HTTP` status code `304` (Not Modified). For methods that apply server-side changes, the status code `412` (Precondition Failed) is used. Note that the server generating a `304` response `MUST` generate any of the following header fields that would have been sent in a `200` (OK) response to the same request: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, and `Vary`.',
      '',
      'The comparison with the stored ETag uses the weak comparison algorithm, meaning two files are considered identical not only if they are identical byte to byte, but if the content is equivalent. For example, two pages that would differ only by the date of generation in the footer would be considered as identical.',
      '',
      'When used in combination with `If-Modified-Since`, `If-None-Match` has precedence (if the server supports it).',
      '',
      'There are two common use cases:',
      '',
      '- For `GET` and `HEAD` methods, to update a cached entity that has an associated `ETag`.',
      '- For other methods, and in particular for PUT, `If-None-Match` used with the `*` value can be used to save a file not known to exist, guaranteeing that another upload didn\'t happen before, losing the data of the previous put; this problem is a variation of the lost update problem.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'If-None-Match: "<etag_value>"',
      'If-None-Match: "<etag_value>", "<etag_value>", …',
      'If-None-Match: *',
      '```'
    ]
  },
  'If-Range': {
    name: 'If-Range',
    values: [],
    document: [
      'The `If-Range` `HTTP` request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a `206` Partial Content answer with the appropriate body. If the condition is not fulfilled, the full resource is sent back, with a `200` OK status.',
      '',
      'This header can be used either with a `Last-Modified` validator, or with an ETag, but not with both.',
      '',
      'The most common use case is to resume a download, to guarantee that the stored resource has not been modified since the last fragment has been received.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT',
      'If-Range: <etag>',
      '```'
    ]
  },
  'If-Unmodified-Since': {
    name: 'If-Unmodified-Since',
    values: [],
    document: [
      'The `If-Unmodified-Since` request `HTTP` header makes the request conditional: the server will send back the requested resource, or accept it in the case of a `POST` or another `non-safe` method, only if it has not been last modified after the given date. If the resource has been modified after the given date, the response will be a `412` (Precondition Failed) error.',
      '',
      'There are two common use cases:',
      '',
      '- In conjunction with `non-safe` methods, like `POST`, it can be used to implement an optimistic concurrency control, like done by some wikis: editions are rejected if the stored document has been modified since the original has been retrieved.',
      '- In conjunction with a range request with a `If-Range` header, it can be used to ensure that the new fragment requested comes from an unmodified document.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT',
      '```'
    ]
  },
  'Keep-Alive': {
    name: 'Keep-Alive',
    values: [],
    document: [
      'The `Keep-Alive` general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Keep-Alive: parameters',
      '```'
    ]
  },
  'Origin': {
    name: 'Origin',
    values: [],
    document: [
      'The `Origin` request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Origin: null',
      'Origin: <scheme> "://" <hostname> [ ":" <port> ]',
      '```'
    ]
  },
  'Proxy-Authorization': {
    name: 'Proxy-Authorization',
    values: [],
    document: [
      'The `HTTP` `Proxy-Authorization` request header contains the credentials to authenticate a user agent to a proxy server, usually after the server has responded with a `407` `Proxy Authentication Required` status and the `Proxy-Authenticate` header.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Proxy-Authorization: <type> <credentials>',
      '```'
    ]
  },
  'Range': {
    name: 'Range',
    values: [],
    document: [
      'The `Range` `HTTP` request header indicates the part of a document that the server should return. Several parts can be requested with one Range header at once, and the server may send back these ranges in a multipart document. If the server sends back ranges, it uses the `206` `Partial Content` for the response. If the ranges are invalid, the server returns the `416` `Range Not Satisfiable` error. The server can also ignore the Range header and return the whole document with a `200` status code.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Range: <unit>=<range-start>-',
      'Range: <unit>=<range-start>-<range-end>',
      'Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>',
      'Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>',
      'Range: <unit>=-<suffix-length>',
      '```'
    ]
  },
  'Referer': {
    name: 'Referer',
    values: [],
    document: [
      'The `Referer` request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.',
      '',
      'Note that referer is actually a misspelling of the word `referrer`. See `HTTP` referer on Wikipedia for more details.',
      '',
      'A Referer header is not sent by browsers if:',
      '',
      '- The referring resource is a local "file" or "data" URI.',
      '- An unsecured `HTTP` request is used and the referring page was received with a secure protocol (`HTTPS`).',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Referer: <url>',
      '```'
    ]
  },
  'Save-Data': {
    name: 'Save-Data',
    values: [],
    document: [
      'The `Save-Data` header field is a boolean which, in requests, indicates the client\'s preference for reduced data usage. This could be for reasons such as high transfer costs, slow connection speeds, etc.',
      '',
      'A value of On indicates explicit user `opt-in` into a reduced data usage mode on the client, and when communicated to origins allows them to deliver alternative content to reduce the data downloaded such as smaller image and video resources, different markup and styling, disabled polling and automatic updates, and so on.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Save-Data: <sd-token>',
      '```'
    ]
  },
  'TE': {
    name: 'TE',
    values: [],
    document: [
      'The TE request header specifies the transfer encodings the user agent is willing to accept. (you could informally call it Accept-Transfer-Encoding, which would be more intuitive).',
      '',
      'See also the Transfer-Encoding response header for more details on transfer encodings. Note that chunked is always acceptable for HTTP/1.1 recipients and you that don\'t have to specify "chunked" using the TE header. However, it is useful for setting if the client is accepting trailer fields in a chunked transfer coding using the "trailers" value.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'TE: compress',
      'TE: deflate',
      'TE: gzip',
      'TE: trailers',
      '',
      '// Multiple directives, weighted with the quality value syntax:',
      'TE: trailers, deflate;q=0.5',
      '```'
    ]
  },
  'Upgrade-Insecure-Requests': {
    name: 'Upgrade-Insecure-Requests',
    values: [],
    document: [
      'The `HTTP` `Upgrade-Insecure-Requests` request header sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the `upgrade-insecure-requests` `CSP` directive.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Upgrade-Insecure-Requests: 1',
      '```'
    ]
  },
  'User-Agent': {
    name: 'User-Agent',
    values: [],
    document: [
      'The `User-Agent` request header contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.',
      '',
      'Please read Browser detection using the user agent and why serving different Web pages or services to different browsers is usually a bad idea.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'User-Agent: <product> / <product-version> <comment>',
      '// Common format for web browsers:',
      'User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>',
      '```'
    ]
  },
  'Via': {
    name: 'Via',
    values: [],
    document: [
      'The `Via` general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers. It is used for tracking message forwards, avoiding request loops, and identifying the protocol capabilities of senders along the `request/response` chain.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]',
      '// or',
      'Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>',
      '```'
    ]
  },
  'Warning': {
    name: 'Warning',
    values: [],
    document: [
      'The `Warning` general `HTTP` header contains information about possible problems with the status of the message. More than one Warning header may appear in a response.',
      '',
      'Warning header fields can in general be applied to any message, however some warn-codes are specific to caches and can only be applied to response messages.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]',
      '```'
    ]
  },
  'X-Forwarded-For': {
    name: 'X-Forwarded-For',
    values: [],
    document: [
      'The `X-Forwarded-For` (`XFF`) header is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through an `HTTP` proxy or a load balancer. When traffic is intercepted between clients and servers, server access logs contain the IP address of the proxy or load balancer only. To see the original `IP` address of the client, the `X-Forwarded-For` request header is used.',
      '',
      'This header is used for debugging, statistics, and generating location-dependent content and by design it exposes privacy sensitive information, such as the IP address of the client. Therefore the user\'s privacy must be kept in mind when deploying this header.',
      '',
      'A standardized version of this header is the `HTTP` `Forwarded` header.',
      '',
      '`X-Forwarded-For` is also an `email-header` indicating that an `email-message` was forwarded from another account.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'X-Forwarded-For: <client>, <proxy1>, <proxy2>',
      '```'
    ]
  },
  'X-Forwarded-Host': {
    name: 'X-Forwarded-Host',
    values: [],
    document: [
      'he `X-Forwarded-Host` (`X-Forwarded-Host`) header is a `de-facto` standard header for identifying the original host requested by the client in the `Host HTTP` request header.',
      '',
      'Host names and ports of reverse proxies (load balancers, `CDNs`) may differ from the origin server handling the request, in that case the `X-Forwarded-Host` header is useful to determine which Host was originally used.',
      '',
      'This header is used for debugging, statistics, and generating `location-dependent` content and by design it exposes privacy sensitive information, such as the `IP` address of the client. Therefore the user\'s privacy must be kept in mind when deploying this header.',
      '',
      'A standardized version of this header is the `HTTP` Forwarded header.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'X-Forwarded-Host: <host>',
      '```'
    ]
  },
  'X-Forwarded-Proto': {
    name: 'X-Forwarded-Proto',
    values: [],
    document: [
      'The `X-Forwarded-Proto` (`XFP`) header is a `de-facto` standard header for identifying the protocol (`HTTP` or `HTTPS`) that a client used to connect to your proxy or load balancer. Your server access logs contain the protocol used between the server and the load balancer, but not the protocol used between the client and the load balancer. To determine the protocol used between the client and the load balancer, the `X-Forwarded-Proto` request header can be used.',
      '',
      'A standardized version of this header is the `HTTP` `Forwarded` header.',
      '',
      '*exmaple*',
      '',
      '``` yaml',
      'X-Forwarded-Proto: <protocol>',
      '```'
    ]
  },
}
