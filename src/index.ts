import { app } from 'bitterify/lib';
import { Overlay } from './components/functions';
import { GlobalSpinner } from './components/functions/global-spinner';
import { Router } from './router';

app([Router, Overlay, GlobalSpinner]).addLinks(['css/tailwindcss.css']);
