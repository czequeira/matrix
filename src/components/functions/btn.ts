import { button } from 'bitterify/lib';

interface IConfig {
  type?: string;
}

export function btn(fn: () => void, content?: string, config?: IConfig) {
  const Button = button(fn, content).setClasses(
    'ring py-2 px-4 m-2 rounded hover:opacity-80',
  );

  if (config?.type === 'primary')
    Button.addClasses('bg-green-500 ring-green-500 text-white');
  else Button.addClasses('bg-white ring-green-500 text-green-600');

  return Button;
}
