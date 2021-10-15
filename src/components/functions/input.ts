import { input as bInput } from 'bitterify/lib';
import { Bind } from 'bitterify/lib/core/classes';

export function input(bind: Bind) {
  return bInput(bind).setClasses(
    'py-1 px-2 ring-2 ring-gray-300 focus:ring-primary rounded w-full',
  );
}
