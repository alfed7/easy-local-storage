# web-local-storage
web-local-storage implements a convenience interface to access localStorage.

## Installation

#### NPM
```
  $ npm install web-local-storage --save
```

#### Yarn
```
  $ yarn add web-local-storage
```

## Basic Usage

#### On the client

It implements the same interface as js-cookie for interoperability.

```
import WebLocalStorage from "web-local-storage";
const els = new WebLocalStorage();

// Set local storage
els.set("user", {userName: "test", token: "some token here"}, { expires: 30 });

// Retrieve
const user = els.get("user");

// Clear
els.remove("user");

```

## Authors

* [Alexander Fedorenko](https://github.com/alfed7)
