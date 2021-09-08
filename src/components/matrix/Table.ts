import { bind, div, table, tableColumn } from 'bitterify/lib';
import { IData } from '../../interfaces';
import { Cell } from './Cell';

const dataMocked: IData[] = [
  { denomination: 'Comunicacion' },
  { denomination: 'Caracterizacion' },
  { denomination: 'Organizacion' },
  { denomination: 'Logistica' },
  { denomination: 'Inmueble' },
  { denomination: 'Planificacion' },
  { denomination: 'Evaluacion' },
  { denomination: 'Educacion' },
  { denomination: 'Economia' },
];

const data = bind(dataMocked);

export const Table = table(data, [
  tableColumn('', (i: IData) =>
    div([i.denomination]).setClasses('flex justify-center'),
  ),
  ...data.value.map((i: IData) => tableColumn(i.denomination, Cell)),
]).setClasses('border border-separate table-fixed w-full my-4');
