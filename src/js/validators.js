class Validator {
    ValidateEmail(email) {
        const re = /^\S+@\S+\.\S+$/;
        return re.test(email);
    }
    ValidatePassword(password) {
        return /[A-Z]/.test(password) &&
               /[a-z]/.test(password) &&
               /[0-9]/.test(password) && 
               /[!@#$%^&*]/.test(password) &&
               password.length >= 8 &&
               password.length <= 32;
    }
    ValidatePhone(phone) {
        const re = /^\+?[0-9]{10,15}$/;
        return re.test(phone);
    }
    ValidateName(name) {
        const re = /^[A-Za-zА-Яа-яЁё\s-]{2,32}$/;
        return re.test(name);
    }
    ValidateAddress(address) {
        const re = /^[A-Za-z0-9\s,.-]{5,100}$/;
        return re.test(address);
    }
}