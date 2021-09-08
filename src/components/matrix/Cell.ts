import { b, bind, button, dialog, div } from 'bitterify/lib';
import { IData } from '../../interfaces';

export function Cell(data: IData) {
  const visible = bind(false, 'boolean');

  function Dialog(data: IData) {
    return dialog(visible, [
      div([
        div(),
        b(data.denomination),
        button(() => (visible.value = false), 'x'),
      ]).setClasses('flex justify-between'),
    ]).setClasses('w-2/4');
  }

  function Button() {
    return button(() => {
      visible.value = true;
    }, 'click');
  }
  return div([Button(), Dialog(data)]);
}
