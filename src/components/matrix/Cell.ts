import { bind, div } from 'bitterify/lib';
import { IData } from '../../interfaces';
import { dialog } from '../functions';

export function Cell(data: IData) {
  const visible = bind(false, 'boolean');

  function Button() {
    return div([])
      .setClasses('cursor-pointer h-6')
      .addEvent('click', () => (visible.value = true));
  }
  return div([Button(), dialog(visible, data.denomination, 'hola')]).setClasses(
    'border',
  );
}
