# Rotor Cipher Machine

simple library to demonstrate work of rotor cipher machine

## API

### `encrypt(data: String, aplpabet: Array<Char>, rotors: Array<Array<Number>>, shift: Array<Number>)` - encrypt data

### `decrypt(data: String, aplpabet: Array<Char>, rotors: Array<Array<Number>>, shift: Array<Number>)` - decrypt data

_`alphabet`, `rotors` and `shift` for decryption must be the same that used for data encryption_

## Overview

`rotors` is array of maps for every rotor in machine. 

Rotor like this:
```
0 - 1
1 - 3
2 - 0
3 - 2
```
could be serialized in this array:
```
[ 1, 3, 0, 2 ]
````

## Run example

```shell
node ./index.js
```