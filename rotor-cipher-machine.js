const encrypt = (
    data, 
    alphabet, 
    rotors, 
    shift
) => Array.from(data)
    .map((letter) => index(alphabet, letter))
    .map(code => {
        const encrypted = Array.from(rotors.keys())
            .reduce(process.bind(null, alphabet.length, rotors, shift, directTransform), code)
        shift = rotate(shift, 1)
        return encrypted
    })
    .map((code) => letter(alphabet, code))
    .join('')

const decrypt = (
    data,
    alphabet,
    rotors,
    shift
) => Array.from(data)
    .map((letter) => index(alphabet, letter))
    .map(code => {
        const decrypted = Array.from(rotors.keys())
            .reverse()
            .reduce(process.bind(null, alphabet.length, rotors, shift, reverseTransform), code)
        shift = rotate(shift, 1)
        return decrypted
    })
    .map((code) => letter(alphabet, code))
    .join('')

const rotate = (
    shift,
    rotorNumber,
    steps = 1
) => {
    shift[rotorNumber] += steps
    return shift
}

const process = (
    alphabetLength,
    rotors,
    shift,
    processFunction,
    code,
    rotorNumber
) => normalize(
        alphabetLength,
        processFunction(
            rotors[rotorNumber], 
            normalize(
                alphabetLength,
                code + shift[rotorNumber]
            )
        ) - shift[rotorNumber]
    )

const directTransform = (rotor, code) => rotor.indexOf(code)
const reverseTransform = (rotor, code) => rotor[code]

const normalize = (alphabetLength, index) => {
    while (index < 0) index += alphabetLength
    return index % alphabetLength
}

const index = (alphabet, letter) => alphabet.indexOf(letter)
const letter = (alphabet, code) => alphabet[code]

exports.default = {
    encrypt,
    decrypt
}