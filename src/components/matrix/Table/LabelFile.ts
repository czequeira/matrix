import { a, div } from 'bitterify/lib';
import { Bind } from 'bitterify/lib/core/classes';
import { IFile } from '../../../interfaces';

function LabelCell(i: IFile, isLast: boolean) {
  const Cell = div([
    a(i.file, '#about')
      .setClasses('transform rotate-180')
      .setStyle('writing-mode', 'vertical-lr'),
  ]).setClasses('mx-0.5 py-2 w-16 flex justify-center');
  if (isLast) Cell.addClasses('items-start');
  return Cell;
}

export function LabelFile(data: Bind, isLast = false) {
  return div([
    div(),
    ...data.value?.files?.map((i: IFile) => LabelCell(i, isLast)),
    div(),
  ]).setClasses('flex justify-center');
}
