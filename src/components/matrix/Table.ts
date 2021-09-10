import { a, bind, div } from 'bitterify/lib';
import { IFile, ITable } from '../../interfaces';
import { Block } from './Block';
import { Target } from './Target';

const columns = [
  'Subjetivo',
  'Comunicación',
  'Caracterización',
  'Organización',
  'Logística',
  'Inmueble',
  'Planificación',
  'Evaluación',
];

const mocked: ITable = {
  table: 'propedeutica',
  files: columns.map((i) => ({
    file: i,
    blocks: columns.map((j) => ({
      denomination: `${i.substr(0, 2)}-${j.substr(0, 2)}`,
      table: 'propedeutica',
      column: j,
      file: i,
      value: Math.random() * 4 + 1,
    })),
  })),
};

const data = bind(mocked);

export function Table() {
  return div([
    div([
      // primera fila
      div([
        div(),
        ...data.value.files.map((i: IFile) =>
          div([
            div([i.file])
              .setClasses('transform rotate-180')
              .setStyle('writing-mode', 'vertical-lr'),
          ]).setClasses('mx-0.5 py-2 w-16 flex justify-center'),
        ),
        div(),
      ]).setClasses('flex justify-center'),
      // la matrix
      ...data.value.files.map((i: IFile) =>
        div([
          div([a(i.file, '#about')]).setClasses('px-2 flex items-center'),
          ...i.blocks.map((b) => Block(b)),
          div([a(i.file, '#asd')]).setClasses('px-2 flex items-center'),
        ]).setClasses('flex justify-center'),
      ),
      // ultima fila
      div([
        div(),
        ...data.value.files.map((i: IFile) =>
          div([
            a(i.file, '#about')
              .setClasses('transform rotate-180')
              .setStyle('writing-mode', 'vertical-lr'),
          ]).setClasses('mx-0.5 py-2 w-16 flex justify-center items-start'),
        ),
        div(),
      ]).setClasses('flex justify-center'),
    ]).setClasses('ring ring-gray-500'),
  ]).setClasses('flex justify-center mt-6');
}
