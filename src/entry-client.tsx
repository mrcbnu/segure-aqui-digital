import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { getRouter } from './router' // Mudamos de createRouter para getRouter

// Inicializamos usando o nome que o framework espera
const router = getRouter()

hydrateRoot(document, <StartClient router={router} />)