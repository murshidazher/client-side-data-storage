# [client-side-data-storage](https://github.com/murshidazher/client-side-data-storage)

> A workspace containing client-side data storage implementations

- client-side data storage - saving data inside the browser itself.
- Check if your browser support the storage implementation using [caniuse](https://caniuse.com/).

## Table of Contents

- [client-side-data-storage](#client-side-data-storage)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Cookies](#cookies)
  - [HTML5 Web Storage](#html5-web-storage)
  - [WebSQL](#websql)
  - [IndexedDB](#indexeddb)
  - [License](#license)

## Technologies

Different storage technologies are available and each of the below listed technologies solves an individual problem,

- Cookies
- LocalStorage and SessionStorage
- WebSQL
- IndexedDB
- Offline Storage

The pros are;

- It improves performance
- reduces the load on the server
- Sandboxed - only a single origin can access the storage its assigned for.

## Cookies

- Small data upto the size of 4KB, key-value pairs stored by the browser.
- Cookies are stored as strings and sent to the server on every subsequent request.
- Cookies are build as an extension of http protocol and because the http protocol is stateless.
- Updating a cookie and only way to update a cookie is create a new cookie with the same name.
- Deleting a cookie we need to update the cookie expiration time to a later or older time.

```txt
// cookie_name=cookie_value; expires=Sun, 16 Jul 3567 06:23:41 GMT; path=/; secure

Cookie = "
  key = value;
  expires = date;
  path = path; // to save on a specific place
  domain = domain;
  secure; // uses only https
"
```

## HTML5 Web Storage

## WebSQL


## IndexedDB


## License

[MIT](./LICENSE) © 2021 Murshid Azher.
