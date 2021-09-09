import { div, h3 } from 'bitterify/lib';
import { IBlock } from '../../interfaces';

export function Info(block: IBlock) {
  const value = div([h3(`${block.value}`.substr(0, 4))]);
  value.setClasses('flex justify-center');

  const note = div([block.note || 'No hay notas']);

  return div([value, note]);
}