import { a, div } from 'bitterify/lib';
import { IFile } from '../../../interfaces';
import { data, loading } from '../../../store';
import { spinner } from '../../functions';
import { Block } from './Block';
import { File } from './Filte';
import { LabelFile } from './LabelFile';

const Content = div(
  (data) =>
    !!data.value
      ? [
          // primera fila
          LabelFile(data),
          // la matrix
          ...data.value?.files?.map((i: IFile) => File(i)),
          // ultima fila
          LabelFile(data, true),
        ]
      : ['vacio'],
  data,
).setClasses('ring-2 ring-primary rounded');

export const Table = div([
  spinner(loading, Content, 'flex justify-center'),
]).setClasses('flex justify-center mt-6');
