import { bind, div } from 'bitterify/lib';
import { btn, dialog } from '../functions';

export function Target() {
  const visible = bind(false, 'boolean');

  const Button = div([
    btn(() => (visible.value = true), 'Objetivo'),
  ]).setClasses('flex justify-end');

  const Dialog = dialog(
    visible,
    'Objetivos',
    div(['el objetivo es escribir algo aqui']),
  );

  return div([Button, Dialog]);
}
