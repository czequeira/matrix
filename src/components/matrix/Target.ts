import { div } from 'bitterify/lib';
import { btn, modal } from '../functions';

export function Target() {
  const Button = div([
    btn(() => modal('Objetivos', 'Escribir un objetivo aqui'), 'Objetivo', {
      type: 'primary',
    }),
  ]).setClasses('flex justify-end mt-4');

  return Button;
}
