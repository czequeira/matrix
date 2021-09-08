import { b, dialog as bDialog, div } from 'bitterify/lib';
import { Bind } from 'bitterify/lib/core/classes';
import { Child } from 'bitterify/lib/core/types';
import { icon } from './icon';

export function dialog(visible: Bind, title: string, content: Child) {
  return bDialog(visible, [
    div([
      div(),
      b(title),
      icon('M6 18L18 6M6 6l12 12', 'h-4 w-4 cursor-pointer').addEvent(
        'click',
        () => (visible.value = false),
      ),
    ]).setClasses('flex justify-between'),
    content,
  ]).setClasses('w-2/4');
}
