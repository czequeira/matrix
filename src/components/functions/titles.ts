import { h1, h2, h3 } from 'bitterify/lib';

export function title1(text: string) {
  return h1(text).setClasses('mt-2 text-4xl text-primary font-extrabold');
}

export function title2(text: string) {
  return h2(text).setClasses('mt-2 text-2xl text-primary font-extrabold');
}

export function title3(text: string) {
  return h3(text).setClasses('mt-1 text-xl text-primary font-bold');
}
