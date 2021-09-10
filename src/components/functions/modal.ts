import { b, div } from 'bitterify/lib';
import { icon } from './icon';

const Modal = div([
  div([
    div(),
    b('Hola'),
    icon('M6 18L18 6M6 6l12 12', 'h-4 w-4 cursor-pointer').addEvent(
      'click',
      closeModal,
    ),
  ]).setClasses('flex justify-between items-center mb-4'),
]).setClasses('bg-white shadow-xl max-w-2xl w-full rounded p-2 text-gray-800');

export const Overlay = div([Modal])
  .setClasses(
    'bg-black bg-opacity-20 absolute inset-0 hidden justify-center items-center p-4',
  )
  .addEvent('click', closeModal);

export function closeModal() {
  Overlay.removeClasses('flex').addClasses('hidden');
}

export function modal() {
  Overlay.removeClasses('hidden').addClasses('flex');
}
