import { b, div } from 'bitterify/lib';
import { Child } from 'bitterify/lib/core/types';
import { icon } from './icon';

function createHeader(title: Child = '') {
  const Title = typeof title === 'string' ? b(title) : title;
  return div([
    div(),
    Title,
    icon('M6 18L18 6M6 6l12 12', 'h-4 w-4 cursor-pointer').addEvent(
      'click',
      closeModal,
    ),
  ]).setClasses('flex justify-between items-center mb-4');
}

function createModal(Header: Child, Body: Child = '') {
  return div([Header, Body]).setClasses(
    'bg-white shadow-xl max-w-2xl w-full rounded p-2 text-gray-800',
  );
}

export const Overlay = div()
  .setClasses(
    'bg-black bg-opacity-20 fixed inset-0 hidden justify-center items-center p-4',
  )
  .addEvent('click', closeModal);

export function closeModal() {
  Overlay.removeClasses('flex').addClasses('hidden');
}

export function modal(title?: Child, body?: Child) {
  const Header = createHeader(title);
  const Modal = createModal(Header, body);
  Overlay.removeClasses('hidden').addClasses('flex');
  Overlay.setChildren([Modal]);
}
