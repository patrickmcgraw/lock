export default {
  error: {
    forgotPassword: {
      "too_many_requests": "Вы достигли предельного числа запросов на восстановление пароля. Пожалуйста, подождите перед повторной попыткой.",
      "lock.fallback": "Произошла непредвиденная ошибка при запросе на восстановление пароля. Приносим свои извинения."
    },
    login: {
      "blocked_user": "Пользователь заблокирован.",
      "invalid_user_password": "Неверный пароль.",
      "lock.fallback": "Произошла непредвиденная ошибка при попытке авторизации. Приносим свои извинения.",
      "lock.invalid_code": "Неверный код.",
      "lock.invalid_email_password": "Неверный адрес электронной почти или пароль.",
      "lock.invalid_username_password": "Неверное имя пользователя или пароль.",
      "lock.network": "Нет доступа к серверу. Пожалуйста, проверьте подключение и повторите попытку.",
      "lock.popup_closed": "Всплывающее окно закрыто, попробуйте еще раз.",
      "lock.unauthorized": "Недостаточно полномочий, попробуйте еще раз.",
      "password_change_required": "Необходимо обновить пароль, посколько Вы совершаете вход в первый раз, или срок действия пароля истек.", // TODO: verify error code
      "password_leaked": "Эта учетная запись была заблокирована, поскольку произошла утечка Вашего пароля на другом веб-сайте. На Ваш электронный адрес отправлена инструкция по восстановлению учетной записи.",
      "too_many_attempts": "Ваш аккаунт был заблокирован после нескольких последовательных попыток входа в систему." // needs review
    },
    passwordless: {
      "bad.email": "Недействительный адрес электронной почты",
      "bad.phone_number": "Недействительный номер телефона",
      "lock.fallback": "Произошла непредвиденная ошибка. Приносим свои извинения"
    },
    signUp: {
      "invalid_password": "Неверный пароль.", // needs review
      "lock.fallback": "Произошла непредвиденная ошибка при попытке создания учетной записи. Приносим свои извинения.",
      "password_dictionary_error": "Пароль слишком общий", // needs review
      "password_no_user_info_error": "Пароль основывается на информации о пользователе.", // needs review
      "password_strength_error": "Пароль слишком слабый.",
      "user_exists": "Пользователь уже существует.",
      "username_exists": "Имя пользователя уже существует."
    }
  },
  success: { // success messages show above the form or in a confirmation pane
    logIn: "Спасибо, что вошли.",
    forgotPassword: "Мы отправили Вам сообщение для восстановления пароля.",
    magicLink: "Мы отправили Вам ссылку для входа<br />в %s.",
    signUp: "Спасибо, что зарегистрировались."
  },
  blankErrorHint: "Поле не может быть пустым",
  codeInputPlaceholder: "Ваш код",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "или",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "или",
  emailInputPlaceholder: "yours@example.com",
  enterpriseLoginIntructions: "Используйте учетные данные Вашей корпоративной учетной записи для входа.",
  enterpriseActiveLoginInstructions: "Пожалуйста, введите Ваши корпоративные учетные данные по ссылке %s.",
  failedLabel: "Не удалось совершить действие!",
  forgotPasswordAction: "Не помните пароль?",
  forgotPasswordInstructions: "Пожалуйста, введите Ваш адрес электронной почты. Мы отправим Вам сообщение для восстановления пароля.",
  forgotPasswordSubmitLabel: "отправить по электронной почте",  // needs review
  invalidErrorHint: "Недействительные данные",
  lastLoginInstructions: "В прошлый раз Вы вошли под",
  loginAtLabel: "Войдите по ссылке %s",
  loginLabel: "Вход",
  loginSubmitLabel: "авторизоваться", // needs review
  loginWithLabel: "Вход через %s",
  notYourAccountAction: "Не Ваша учетная запись?",
  passwordInputPlaceholder: "Ваш пароль",
  passwordStrength: {
    containsAtLeast: "Содержать как минимум %d вида символов из следующих %d-х:",
    identicalChars: "Не более чем %d идентичных символа в ряд (например, \"%s\" не допускается)",
    nonEmpty: "Пароль не может быть пустым",
    numbers: "Цифры (0-9)",
    lengthAtLeast: "Как минимум %d символов",
    lowerCase: "Строчные буквы (a-z)",
    shouldContain: "Должен содержать:",
    specialCharacters: "Специальные символы (например !@#$%^&*)",
    upperCase: "Прописные буквы (A-Z)"
  },
  passwordlessEmailAlternativeInstructions: "Либо введите адрес электронной почты, чтобы войти<br>или зарегистрироваться",
  passwordlessEmailCodeInstructions: "Сообщение с кодом отправлено на %s.",
  passwordlessEmailInstructions: "Введите адрес электронной почты, чтобы войти<br>или зарегистрироваться",
  passwordlessSMSAlternativeInstructions: "Либо введите Ваш номер телефона, чтобы войти<br>или зарегистрироваться",
  passwordlessSMSCodeInstructions: "СМС с кодом было отправлено<br>на %s.",
  passwordlessSMSInstructions: "Введите Ваш номер телефона, чтобы войти<br>или зарегистрироваться",
  phoneNumberInputPlaceholder: "Ваш номер телефона",
  resendCodeAction: "Не получили код?",
  resendLabel: "Отправить повторный запрос",
  resendingLabel: "Повторная отправка...",
  retryLabel: "Повторить попытку",
  sentLabel: "Отправлено!",
  signUpLabel: "Зарегистрироваться",
  signUpTerms: "",
  signUpWithLabel: "Зарегистрироваться через %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Единый вход включен",
  submitLabel: "Отправить", // needs review
  unrecoverableError: "Произошла непредвиденная ошибка.<br />Пожалуйста, обратитесь в службу технической поддержки.",
  usernameFormatErrorHint: "Используйте 1-15 букв, цифр и \"_\"",
  usernameInputPlaceholder: "Ваше имя пользователя",
  useranmeOrEmailInputPlaceholder: "электронной почты/пользователя", // TODO review
  title: "Auth0",
  welcome: "Добро пожаловать, %s!",
  windowsAuthInstructions: "Вы подключены через корпоративную сеть&hellip;",
  windowsAuthLabel: "Аутентификация Windows"
};
