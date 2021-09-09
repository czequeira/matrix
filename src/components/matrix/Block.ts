import { div } from 'bitterify/lib';
import { IBlock } from '../../interfaces';

export function Block(block: IBlock) {
  let color = 'bg-white';
  if (block.value && block.value >= 2) color = 'bg-red-600';
  if (block.value && block.value >= 3) color = 'bg-yellow-600';
  if (block.value && block.value >= 4) color = 'bg-green-600';

  const item = div([block.denomination]).setClasses(`m-1 w-12 h-12 ${color}`);

  if (block.column === block.file) item.addClasses('ring');

  return item;
}
