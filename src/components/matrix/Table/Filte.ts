import { a, div } from 'bitterify/lib';
import { IFile } from '../../../interfaces';
import { Block } from './Block';

export function File(i: IFile) {
  return div([
    div([a(i.file, '#about')]).setClasses('px-2 flex items-center'),
    ...i.blocks.map((b) => Block(b)),
    div([a(i.file, '#asd')]).setClasses('px-2 flex items-center'),
  ]).setClasses('flex justify-center');
}
