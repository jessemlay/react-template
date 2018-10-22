const ValidatePhone = (message = 'Not a valid phone number') => value =>
   value.test(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
      ? undefined
      : message;

export default {
   phone: ValidatePhone
};
