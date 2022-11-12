import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (e: Event) => {
  e.preventDefault();

  const target = e.target as HTMLFormElement;

  // Funções de Validação
  hideErrorMessages(target);
  checkForEmptyFields(username, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);

  // Função de envio do formulário após passagem de validação
  if (shouldSendForm(target)) console.log('Formulário Enviado');
};

form.addEventListener('submit', submitEventFn);

// Validar se os campos estão vazios
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Esse campo é Obrigatório');
  });
}

// Validar o email
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Campo de Email inválido');
}

// Validar se senhas são iguais
function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas diferentes');
    showErrorMessage(password2, 'Senhas diferentes');
  }
}

// Remover as mensagens de Erros dos inputs
function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

// Mostrar mensagens de Erros abaixo dos inputs
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

// Enviar o formulário caso nenhum erro encontrado na estrutura form
function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
