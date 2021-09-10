import { app } from 'bitterify/lib';
import { Overlay } from './components/functions';
import { Router } from './router';

app([Router, Overlay]).addLinks(['css/tailwindcss.css']);
