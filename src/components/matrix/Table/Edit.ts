import { IBlock } from '../../../interfaces';
import { bind, div, form, formItem, input } from 'bitterify/lib';
import { btn, closeModal, icon, modal } from '../../functions';

function createSubmit() {
  return div([
    btn(closeModal, 'Cancelar'),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    btn(() => {}, 'Guardar', { type: 'primary' }),
  ]).setClasses('flex justify-end mt-4');
}

function createIndicator(label: string) {
  const indicator = bind('');
  return div([
    `${label}:`,
    formItem(input(indicator)).setClasses(
      'py-1 px-2 ring-2 ring-primary rounded w-full',
    ),
  ]);
}

function createForm(block: IBlock) {
  const Form = form(
    () => alert('submit'),
    [
      createIndicator('indicador1'),
      createIndicator('indicador mas largo'),
      createIndicator('otro indicador incluso mas largo aun'),
      createIndicator('otro indicador mas'),
    ],
  ).setClasses('grid gap-4 grid-cols-2');
  return div([Form, createSubmit()]).setClasses('p-4');
}

export function Edit(block: IBlock) {
  return icon(
    'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    'w-6 h-6 cursor-pointer text-gray-800',
  ).addEvent('click', () => {
    modal('Indicadores', createForm(block));
  });
}
