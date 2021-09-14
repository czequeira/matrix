import { app } from 'bitterify/lib';
import { GlobalSpinner, Overlay } from './components/functions';
import { Router } from './router';

app([Router, Overlay, GlobalSpinner]).addLinks(['css/tailwindcss.css']);
