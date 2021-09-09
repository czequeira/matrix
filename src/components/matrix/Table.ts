import { bind, div } from 'bitterify/lib';
import { IFile, ITable } from '../../interfaces';
import { Block } from './Block';

const columns = [
  'comunicacion',
  'logistica',
  'observacion',
  'asociacion',
  'educacion',
  'economia',
  'constabilidad',
  'verificacion',
  'periodicidad',
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
  return div(
    data.value.files.map((i: IFile) =>
      div(i.blocks.map((b) => Block(b))).setClasses('flex justify-center'),
    ),
  );
}
