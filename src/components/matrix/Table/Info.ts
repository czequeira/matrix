import { div, h3 } from 'bitterify/lib';
import { IBlock } from '../../../interfaces';

export function Info(block: IBlock) {
  const value = div([
    h3(`${block.value}`.substr(0, 4)).setClasses(
      'text-6xl font-bold text-gray-800',
    ),
  ]);
  value.setClasses('flex justify-center');

  const note = div([block.note || 'No hay notas']).setClasses(
    'flex justify-center m-4 rounded ring ring-primary',
  );

  return div([value, note]);
}
