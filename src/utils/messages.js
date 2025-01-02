const FIELD_REQUIRED = 'The field is mandatory.';
const INVALID_EMAIL_ADDRESS = 'Please provide a valid email address.';
const FIELD_INVALID_MAX_LENGTH = max => `The field must be at most ${max} characters long.`;
const FIELD_INVALID_MIN_LENGTH = min => `The field must be at least ${min} characters long.`;
const FIELD_INVALID_MAX = max => `The value must be at most ${max}.`;
const FIELD_INVALID_MIN = min => `The value must be at least ${min}.`;

export { 
          FIELD_REQUIRED,
          INVALID_EMAIL_ADDRESS,
          FIELD_INVALID_MAX_LENGTH,
          FIELD_INVALID_MIN_LENGTH,
          FIELD_INVALID_MAX,
          FIELD_INVALID_MIN
       };