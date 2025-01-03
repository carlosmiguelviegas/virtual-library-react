import { FIELD_INVALID_MAX, FIELD_INVALID_MAX_LENGTH, FIELD_INVALID_MIN, FIELD_INVALID_MIN_LENGTH, FIELD_REQUIRED, INVALID_EMAIL_ADDRESS } from "../messages";

const validEmailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const checkIsRequiredError = (required, value) => required && !value ? FIELD_REQUIRED : null;

const checkIsEmailValid = (email, value) => email && !value.match(validEmailPattern) ? INVALID_EMAIL_ADDRESS : null;

const checkMaxLengthError = (maxLength, value) => maxLength && value.length > maxLength ? FIELD_INVALID_MAX_LENGTH(maxLength) : null;

const checkMinLengthError = (minLength, value) => minLength && value.length < minLength ? FIELD_INVALID_MIN_LENGTH(minLength) : null;

const checkMaxError = (max, value) => max && value > max ? FIELD_INVALID_MAX(max) : null;

const checkMinError = (min, value) => min && value < min ? FIELD_INVALID_MIN(min) : null;

export {
          checkIsRequiredError,
          checkIsEmailValid,
          checkMaxLengthError,
          checkMinLengthError,
          checkMaxError,
          checkMinError
        };
