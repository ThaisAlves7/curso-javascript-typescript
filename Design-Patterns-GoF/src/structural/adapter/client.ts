import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import {
  EmailValidatorProtocol,
  EmailValidatorFnProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('É Inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('É Inválido (FN)');
  }
}

const emailTeste = 'Luizomf@gmail.com';

validaEmailClass(new EmailValidatorClassAdapter(), emailTeste);
validaEmailFn(emailValidatorFnAdapter, emailTeste);
