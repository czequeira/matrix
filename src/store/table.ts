import { bind } from 'bitterify/lib';
import { ITable } from '../interfaces';

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

export const data = bind(mocked);
export const loading = bind(true, 'boolean');

export function populateTable() {
  loading.value = true;
  setTimeout(() => {
    data.value = mocked;
    loading.value = false;
  }, 1000);
}
