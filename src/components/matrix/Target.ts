import { bind, div } from 'bitterify/lib';
import { btn, dialog } from '../functions';

export function Target() {
  const visible = bind(false, 'boolean');

  const Button = div([
    btn(() => (visible.value = true), 'Objetivo', { type: 'primary' }),
  ]).setClasses('flex justify-end mt-4');

  const Dialog = dialog(
    visible,
    'Objetivos',
    div(['el objetivo es escribir algo aqui']),
  );

  return div([Button, Dialog]);
}
