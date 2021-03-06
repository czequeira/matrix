import { a, div } from 'bitterify/lib';
import { IFile } from '../../../interfaces';
import { Block } from './Block';

export function File(i: IFile) {
  return div([
    div([
      a(i.file, '#about').title(`Ver información sobre ${i.file}`),
    ]).setClasses('px-2 hidden md:flex items-center'),
    ...i.blocks.map((b) => Block(b)),
    div([
      a(i.file, '#asd').title(`Ver información sobre ${i.file}`),
    ]).setClasses('px-2 hidden md:flex items-center'),
  ]).setClasses('flex justify-center');
}
