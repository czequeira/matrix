import { bind, table, tableColumn } from 'bitterify/lib';
import { IData } from '../../interfaces';
import { Cell } from './Cell';

const dataMocked: IData[] = [
  { denomination: 'algo aqui' },
  { denomination: 'otra cosa' },
  { denomination: 'otra mas' },
];

const data = bind(dataMocked);

export const Table = table(
  data,
  data.value.map((i: IData) => tableColumn(i.denomination, Cell)),
).setClasses('border border-separate table-fixed w-full');
