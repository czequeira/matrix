import { bind, button, div, h2, h3, h4, input } from 'bitterify/lib';
import { dialog } from '../components/functions';
import { Table } from '../components/matrix';

const visible = bind(false, 'boolean');
const newObjteive = bind('', 'string');

export const Home = div([
  h2('Proceso de dirección educacional'),
  h3('primer ciclo'),
  h4('etapa propedeutica'),
  Table,
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
