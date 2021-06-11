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
- HTML5 WebStorage - LocalStorage and SessionStorage
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

- Before HTML5 Web Storage there was cookies but with a limited storage of 4KB. Moreover, they sent the cookies on every request hence slowing down.
- Web storage attempts to provide client-side only storage with no interaction with server-side.
- Web storage provides two different types of storage,
  - LocalStorage - data isn't delete until the user manually deletes it  (persistent storage).
  - SessionStorage - data stored in the SessionStorage is temporary and cleared if the browser is closed. It only saved for a browser session.
- The main difference between these two types is the lifetime of the data not the functionality.
- If we open two browser with the same domain, session storage will not be in persisted in the same storage but the local storage will be available.

## WebSQL


## IndexedDB


## License

[MIT](./LICENSE) © 2021 Murshid Azher.
