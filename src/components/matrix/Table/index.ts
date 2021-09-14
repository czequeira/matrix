import { a, div } from 'bitterify/lib';
import { IFile } from '../../../interfaces';
import { data, loading } from '../../../store';
import { spinner } from '../../functions';
import { Block } from './Block';
import { LabelFile } from './LabelFile';

function tableContent() {
  return div(
    (data) =>
      !!data.value
        ? [
            // primera fila
            LabelFile(data),
            // la matrix
            ...(data.value?.files?.map((i: IFile) =>
              div([
                div([a(i.file, '#about')]).setClasses('px-2 flex items-center'),
                ...i.blocks.map((b) => Block(b)),
                div([a(i.file, '#asd')]).setClasses('px-2 flex items-center'),
              ]).setClasses('flex justify-center'),
            ) || ''),
            // ultima fila
            LabelFile(data, true),
          ]
        : ['vacio'],
    data,
  ).setClasses('ring-2 ring-primary rounded');
}

export const Table = div([
  spinner(loading, tableContent(), 'flex justify-center'),
]).setClasses('flex justify-center mt-6');
