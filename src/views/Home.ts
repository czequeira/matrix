import { bind, button, div, input } from 'bitterify/lib';
import { dialog, title1, title2, title3 } from '../components/functions';
import { Table } from '../components/matrix';

const visible = bind(false, 'boolean');
const newObjteive = bind('', 'string');

export const Home = div([
  title1('Proceso de dirección educacional'),
  title2('primer ciclo'),
  title3('etapa propedeutica'),
  Table(),
  div([
    button(() => (visible.value = true), 'Objetivo').setClasses(
      'ring bg-blue-600',
    ),
  ]).setClasses('flex justify-end'),
  dialog(
    visible,
    'Objetivos',
    div([
      'el objetivo es escribir algo aqui',
      input(newObjteive, 'escribir nuevo objetivo'),
    ]),
  ),
]);
