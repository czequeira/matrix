import { bind, button, div, input } from 'bitterify/lib';
import { IData } from '../../interfaces';
import { dialog } from '../functions';

export function Cell(data: IData) {
  const visible = bind(false, 'boolean');
  const note = bind('', 'string');
  const evaluation = Math.random() * 5;
  let color = 'white';
  if (evaluation >= 1) color = 'red';
  if (evaluation >= 3) color = 'yellow';
  if (evaluation >= 4) color = 'green';

  function Button() {
    return div([data.denomination.substr(0, 2)])
      .setClasses(`cursor-pointer h-6 bg-${color}-600 flex justify-center`)
      .addEvent('click', () => (visible.value = true));
  }
  return div([
    Button(),
    dialog(
      visible,
      data.denomination,
      div([
        `Evaluacion: ${evaluation}`,
        input(note, 'nota nueva'),
        button(() => {}, 'guardar'),
      ]).setClasses('block'),
    ),
  ]).setClasses('border');
}
