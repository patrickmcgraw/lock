export default {
  error: {
    forgotPassword: {
      "too_many_requests": "You have reached the limit on password change attempts. Please wait before trying again.",
      "lock.fallback": "We're sorry, something went wrong when requesting the password change."
    },
    login: {
      "blocked_user": "The user is blocked.",
      "invalid_user_password": "Wrong credentials.",
      "lock.fallback": "We're sorry, something went wrong when attempting to log in.",
      "lock.invalid_code": "Wrong code.",
      "lock.invalid_email_password": "Wrong email or password.",
      "lock.invalid_username_password": "Wrong username or password.",
      "lock.network": "We could not reach the server. Please check your connection and try again.",
      "lock.popup_closed": "Popup window closed. Try again.",
      "lock.unauthorized": "Permissions were not granted. Try again.",
      "lock.mfa_registration_required": "Multifactor authentication is required but your device is not enrolled. Please enroll it before moving on.",
      "lock.mfa_invalid_code": "Wrong code. Please try again.",
      "password_change_required": "You need to update your password because this is the first time you are logging in, or because your password has expired.", // TODO: verify error code
      "password_leaked": "This login has been blocked because your password has been leaked in another website. We’ve sent you an email with instructions on how to unblock it.",
      "too_many_attempts": "Your account has been blocked after multiple consecutive login attempts.",
      "session_missing": "Couldn't complete your authentication request. Please try again after closing all open dialogs"
    },
    passwordless: {
      "bad.email": "The email is invalid",
      "bad.phone_number": "The phone number is invalid",
      "lock.fallback": "We're sorry, something went wrong"
    },
    signUp: {
      "invalid_password": "Password is invalid.",
      "lock.fallback": "We're sorry, something went wrong when attempting to sign up.",
      "password_dictionary_error": "Password is too common.",
      "password_no_user_info_error": "Password is based on user information.",
      "password_strength_error": "Password is too weak.",
      "user_exists": "The user already exists.",
      "username_exists": "The username already exists."
    }
  },
  success: { // success messages show above the form or in a confirmation pane
    logIn: "Thanks for logging in.",
    forgotPassword: "We've just sent you an email to reset your password.",
    magicLink: "We sent you a link to log in<br />to %s.",
    signUp: "Thanks for signing up."
  },
  blankErrorHint: "Can't be blank",
  codeInputPlaceholder: "your code",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "or",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "or",
  emailInputPlaceholder: "yours@example.com",
  enterpriseLoginIntructions: "Login with your corporate credentials.",
  enterpriseActiveLoginInstructions: "Please enter your corporate credentials at %s.",
  failedLabel: "Failed!",
  forgotPasswordTitle: "Reset your password",
  forgotPasswordAction: "Don't remember your password?",
  forgotPasswordInstructions: "Please enter your email address. We will send you an email to reset your password.",
  forgotPasswordSubmitLabel: "Send email",
  invalidErrorHint: "Invalid",
  lastLoginInstructions: "Last time you logged in with",
  loginAtLabel: "Log in at %s",
  loginLabel: "Log In",
  loginSubmitLabel: "Log In",
  loginWithLabel: "Log in with %s",
  notYourAccountAction: "Not your account?",
  passwordInputPlaceholder: "your password",
  passwordStrength: {
    containsAtLeast: "Contain at least %d of the following %d types of characters:",
    identicalChars: "No more than %d identical characters in a row (e.g., \"%s\" not allowed)",
    nonEmpty: "Non-empty password required",
    numbers: "Numbers (i.e. 0-9)",
    lengthAtLeast: "At least %d characters in length",
    lowerCase: "Lower case letters (a-z)",
    shouldContain: "Should contain:",
    specialCharacters: "Special characters (e.g. !@#$%^&*)",
    upperCase: "Upper case letters (A-Z)"
  },
  passwordlessEmailAlternativeInstructions: "Otherwise, enter your email to sign in<br/>or create an account",
  passwordlessEmailCodeInstructions: "An email with the code has been sent to %s.",
  passwordlessEmailInstructions: "Enter your email to sign in<br/>or create an account",
  passwordlessSMSAlternativeInstructions: "Otherwise, enter your phone to sign in<br/>or create an account",
  passwordlessSMSCodeInstructions: "An SMS with the code has been sent<br/>to %s.",
  passwordlessSMSInstructions: "Enter your phone to sign in<br/>or create an account",
  phoneNumberInputPlaceholder: "your phone number",
  resendCodeAction: "Did not get the code?",
  resendLabel: "Resend",
  resendingLabel: "Resending...",
  retryLabel: "Retry",
  sentLabel: "Sent!",
  signupTitle: "Sign Up",
  signUpLabel: "Sign Up",
  signUpSubmitLabel: "Sign Up",
  signUpTerms: "",
  signUpWithLabel: "Sign up with %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Single Sign-On enabled",
  submitLabel: "Submit",
  unrecoverableError: "Something went wrong.<br />Please contact technical support.",
  usernameFormatErrorHint: "Use %d-%d letters, numbers and \"_\"",
  usernameInputPlaceholder: "your username",
  usernameOrEmailInputPlaceholder: "username/email",
  title: "Auth0",
  welcome: "Welcome %s!",
  windowsAuthInstructions: "You are connected from your corporate network&hellip;",
  windowsAuthLabel: "Windows Authentication",
  mfaInputPlaceholder: "Code",
  mfaLoginTitle: "2-Step Verification",
  mfaLoginInstructions: "Please enter the verification code generated by your mobile application.",
  mfaSubmitLabel: "Log In",
  mfaCodeErrorHint: "Use %d numbers"
};
