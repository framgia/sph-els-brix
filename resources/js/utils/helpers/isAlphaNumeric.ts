function isAlphaNumeric(password: string) {
    return /^[a-zA-Z0-9]+$/.test(password);
}

export default isAlphaNumeric;
