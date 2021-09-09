import { bind, div } from 'bitterify/lib';
import { IBlock } from '../../interfaces';
import { dialog } from '../functions';
import { Info } from './Info';

export function Block(block: IBlock) {
  const visible = bind(false, 'boolean');

  const Cell = div([block.denomination]).setClasses(
    `cursor-pointer m-0.5 w-16 h-16 flex justify-center opacity-50 items-center hover:opacity-100`,
  );

  if (block.value && block.value >= 4)
    Cell.addClasses('bg-green-600 text-white');
  else if (block.value && block.value >= 3)
    Cell.addClasses('bg-yellow-400 text-white');
  else if (block.value && block.value >= 2)
    Cell.addClasses('bg-red-600 text-white');
  else Cell.addClasses('bg-gray-100 text-gray-900');

  Cell.addEvent('click', () => (visible.value = true));

  if (block.column === block.file)
    Cell.removeClasses('opacity-50').addClasses('opacity-90');

  return div([
    Cell,
    dialog(visible, `${block.file}-${block.column}`, Info(block)),
  ]);
}
