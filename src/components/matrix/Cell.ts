import { bind, button, dialog, div } from 'bitterify/lib';
import { IData } from '../../interfaces';

const visible = bind(false, 'boolean');

function Dialog(data: IData) {
  return dialog(visible, [data.denomination]);
}

function Button() {
  return button(() => {
    alert('funciona');
    // visible.value = true;
  }, 'click');
}

export function Cell(data: IData) {
  return div([Button(), Dialog(data)]);
}
