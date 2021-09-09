import { button } from 'bitterify/lib';

export function btn(fn: () => void, content?: string) {
  return button(fn, content).setClasses('ring p-1 m-1 ring rounded');
}
