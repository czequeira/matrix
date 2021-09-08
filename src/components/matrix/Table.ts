import { bind, div, table, tableColumn } from 'bitterify/lib';

const data = bind([
  {
    denomination: 'algo aqui',
  },
  { denomination: 'otra cosa' },
  { denomination: 'otra mas' },
]);

export const Table = table(
  data,
  data.value.map((i: any) => tableColumn(i.denomination, () => div(['hola']))),
);
