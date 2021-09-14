import { div } from 'bitterify/lib';
import { title1 } from '../components/functions';
import { Table, Target } from '../components/matrix';
import { populateTable } from '../store';

export const Home = div([
  title1('Proceso de dirección docente educativa'),
  //  title2('primer ciclo'),
  //  title3('etapa propedeutica'),
  Table,
  Target(),
]).onMounted(populateTable);
