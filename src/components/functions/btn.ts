import { button } from 'bitterify/lib';

interface IConfig {
  type?: string;
}

export function btn(fn: () => void, content?: string, config?: IConfig) {
  const Button = button(fn, content).setClasses(
    'ring-2 py-2 px-4 m-2 rounded hover:opacity-80',
  );

  if (config?.type === 'primary')
    Button.addClasses('bg-primary ring-primary text-white');
  else Button.addClasses('bg-white ring-primary text-primary');

  return Button;
}
