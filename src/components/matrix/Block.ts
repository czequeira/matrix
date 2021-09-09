import { div } from 'bitterify/lib';
import { IBlock } from '../../interfaces';

export function Block(block: IBlock) {
  let color = 'bg-white';
  if (block.value && block.value >= 2) color = 'bg-red-600';
  if (block.value && block.value >= 3) color = 'bg-yellow-600';
  if (block.value && block.value >= 4) color = 'bg-green-600';
  return div([block.denomination]).setClasses(`w-12 h-12 ${color}`);
}
