import { select as bSelect } from 'bitterify/lib';
import { ISelectOptions } from 'bitterify/lib/components/utils';
import { Bind } from 'bitterify/lib/core/classes';

export function select(bind: Bind, options: ISelectOptions[]) {
  return bSelect(bind, options).setClasses(
    'py-1 px-2 ring-2 bg-white ring-gray-300 focus:ring-primary rounded w-full',
  );
}
