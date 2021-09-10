import { div, h3 } from 'bitterify/lib';
import { btn, modal } from '../components/functions';

export const About = div([
  h3('About'),
  btn(() => {
    modal();
  }, 'open'),
]);
