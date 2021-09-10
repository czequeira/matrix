import { a, bind, div } from 'bitterify/lib';
import { IFile, ITable } from '../../interfaces';
import { Block } from './Block';
import { LabelFile } from './LabelFile';

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
      LabelFile(data),
      // la matrix
      ...data.value.files.map((i: IFile) =>
        div([
          div([a(i.file, '#about')]).setClasses('px-2 flex items-center'),
          ...i.blocks.map((b) => Block(b)),
          div([a(i.file, '#asd')]).setClasses('px-2 flex items-center'),
        ]).setClasses('flex justify-center'),
      ),
      // ultima fila
      LabelFile(data, true),
    ]).setClasses('ring ring-primary rounded'),
  ]).setClasses('flex justify-center mt-6');
}
