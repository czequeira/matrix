import { div } from 'bitterify/lib';

export const GlobalSpinner = div([
  div().setClasses(
    'w-12 h-12 border-4 rounded-full border-t-primary animate-spin',
  ),
]).setClasses(
  'bg-black bg-opacity-60 fixed inset-0 hidden justify-center items-center',
);

export function setGlobalSpinner() {
  GlobalSpinner.removeClasses('hidden').setClasses('flex');
}

export function unsetGlobalSpinner() {
  GlobalSpinner.removeClasses('flex').setClasses('hidden');
}
