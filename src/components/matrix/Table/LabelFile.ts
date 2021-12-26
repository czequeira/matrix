import { a, div } from 'bitterify/lib';
import { Bind } from 'bitterify/lib/core/classes';
import { IFile } from '../../../interfaces';

function LabelCell(i: IFile, isLast: boolean) {
  const Cell = div([
    a(i.file, '#about')
      .title(`Ver información sobre ${i.file}`)
      .setClasses('transform rotate-180')
      .setStyle('writing-mode', 'vertical-lr'),
  ]).setClasses('mx-0.5 py-2 w-14 lg:w-16 hidden md:flex justify-center');
  if (isLast) Cell.addClasses('items-start');
  return Cell;
}

export function LabelFile(data: Bind, isLast = false) {
  return div([
    div(),
    ...(data.value?.files?.map((i: IFile) => LabelCell(i, isLast)) || 'vacio'),
    div(),
  ]).setClasses('flex justify-center');
}
