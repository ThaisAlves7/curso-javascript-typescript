// Condicional => Recomendado
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion  => Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement  => Recomendado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Non-null assertion(!) => NÃO Recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion => NÃO Recomendado
const body4 = (document.querySelector('body') as unknown) as number;
