import { div } from 'bitterify/lib';
import { IBlock } from '../../../interfaces';
import { modal } from '../../functions';
import { Info } from './Info';

export function Block(block: IBlock) {
  const Cell = div([block.denomination]).setClasses(
    `cursor-pointer text-primary transition m-0.5 w-16 h-16 flex justify-center bg-opacity-50 items-center hover:bg-opacity-100`,
  );

  if (block.value && block.value >= 4) Cell.addClasses('bg-success');
  else if (block.value && block.value >= 3) Cell.addClasses('bg-warning');
  else if (block.value && block.value >= 2) Cell.addClasses('bg-danger');
  else Cell.addClasses('bg-gray-100');

  Cell.addEvent('click', () =>
    modal(`${block.file}-${block.column}`, Info(block)),
  );

  if (block.column === block.file)
    Cell.removeClasses('bg-opacity-50').addClasses(
      'ring-2 ring-primary bg-opacity-90 font-bold',
    );

  Cell.title(`${block.file}-${block.column}`);

  return Cell;
}
