alphabet = Array.from("abcdefghijklmnopqrstuvwxyz_");
rotors = [
  [ 14, 9, 8, 21, 6, 5, 24, 4, 19, 17, 0, 26, 2, 25, 12, 11, 23, 16, 10, 3, 13, 22, 1, 20, 7, 15, 18 ],
  [ 13, 14, 24, 16, 21, 22, 17, 25, 9, 15, 12, 19, 6, 23, 8, 0, 10, 1, 3, 4, 5, 26, 11, 20, 2, 18, 7 ]
];

const rcm = require('./rotor-cipher-machine').default

const rotorsConfiguration = [10, 15]

const encrypted = rcm.encrypt('hello_world', alphabet, rotors, rotorsConfiguration)

const decrypted = rcm.decrypt(encrypted, alphabet, rotors, rotorsConfiguration)

console.log(encrypted, decrypted)
