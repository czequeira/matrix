import { div } from 'bitterify/lib';
import { Bind } from 'bitterify/lib/core/classes';
import { Child } from 'bitterify/lib/core/types';

export function spinner(
  loading: Bind,
  content: Child,
  contentClasses = 'w-auto h-auto overflow-auto',
) {
  const Mask = div([
    div().setClasses(
      'w-8 h-8 border-4 rounded-full border-t-primary animate-spin',
    ),
  ]).setClasses(
    'bg-black bg-opacity-30 absolute inset-0 hidden justify-center items-center',
  );

  loading.subscribeCallback(`spinning ${Math.random()}`, (bind) => {
    if (bind.value) Mask.removeClasses('hidden').addClasses('flex');
    else Mask.removeClasses('flex').addClasses('hidden');
  });

  return div([Mask, div([content]).setClasses(contentClasses)]).setClasses(
    'relative',
  );
}
