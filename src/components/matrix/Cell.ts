import { bind, button, div } from 'bitterify/lib';
import { IData } from '../../interfaces';
import { dialog } from '../functions';

export function Cell(data: IData) {
  const visible = bind(false, 'boolean');

  function Button() {
    return button(() => {
      visible.value = true;
    }, 'click');
  }
  return div([Button(), dialog(visible, data.denomination, 'hola')]);
}
