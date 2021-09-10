import { div } from 'bitterify/lib';
import { IBlock } from '../../interfaces';
import { modal } from '../functions';
import { Info } from './Info';

export function Block(block: IBlock) {
  const Cell = div([block.denomination]).setClasses(
    `cursor-pointer text-gray-800 transition m-0.5 w-16 h-16 flex justify-center bg-opacity-50 items-center hover:bg-opacity-100`,
  );

  if (block.value && block.value >= 4)
    Cell.addClasses('bg-success ring-success');
  else if (block.value && block.value >= 3)
    Cell.addClasses('bg-warning ring-warning');
  else if (block.value && block.value >= 2)
    Cell.addClasses('bg-danger ring-danger');
  else Cell.addClasses('bg-gray-100 ring-gray-300');

  Cell.addEvent('click', () =>
    modal(`${block.file}-${block.column}`, Info(block)),
  );

  if (block.column === block.file)
    Cell.removeClasses('bg-opacity-50').addClasses('ring bg-opacity-90');

  return Cell;
}
