
export const checkValidData = (name,email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isValidName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)

    if(!isEmailValid) return "Email ID is not Valid"
    if(!isPasswordValid) return "Invalid Password"
    if(!isValidName) return "Invalid Name"

    return null;
}