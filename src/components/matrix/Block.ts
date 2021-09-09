import { bind, div } from 'bitterify/lib';
import { IBlock } from '../../interfaces';
import { dialog } from '../functions';
import { Info } from './Info';

export function Block(block: IBlock) {
  const visible = bind(false, 'boolean');

  let color = 'bg-white';
  if (block.value && block.value >= 2) color = 'bg-red-600';
  if (block.value && block.value >= 3) color = 'bg-yellow-600';
  if (block.value && block.value >= 4) color = 'bg-green-600';

  const button = div([block.denomination]).setClasses(
    `cursor-pointer m-1 w-12 h-12 ${color} flex justify-center items-center`,
  );

  button.addEvent('click', () => (visible.value = true));

  if (block.column === block.file) button.addClasses('ring');

  return div([button, dialog(visible, block.denomination, Info(block))]);
}
