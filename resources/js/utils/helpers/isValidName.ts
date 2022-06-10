function isValidName(name: string) {
    return /^[a-zA-Z]+$/.test(name);
}

export default isValidName;
