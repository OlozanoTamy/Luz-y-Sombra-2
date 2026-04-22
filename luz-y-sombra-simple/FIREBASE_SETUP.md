# Configuración de Firebase para Luz & Sombra

## Paso 1: Crear Proyecto en Firebase

1. Ve a https://console.firebase.google.com
2. Haz clic en "Crear un proyecto"
3. Nombre: `luz-y-sombra`
4. Acepta los términos y crea el proyecto

## Paso 2: Obtener Credenciales

1. En Firebase Console, ve a **Configuración del proyecto** (engranaje)
2. Ve a la pestaña **Aplicaciones**
3. Haz clic en el ícono web (`</>`)
4. Copia la configuración:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "luz-y-sombra.firebaseapp.com",
  projectId: "luz-y-sombra",
  storageBucket: "luz-y-sombra.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## Paso 3: Crear Firestore Database

1. En Firebase Console, ve a **Firestore Database**
2. Haz clic en **Crear base de datos**
3. Selecciona **Iniciar en modo de prueba**
4. Selecciona región: `us-central1`
5. Haz clic en **Crear**

## Paso 4: Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```
VITE_FIREBASE_API_KEY=AIzaSyD...
VITE_FIREBASE_AUTH_DOMAIN=luz-y-sombra.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=luz-y-sombra
VITE_FIREBASE_STORAGE_BUCKET=luz-y-sombra.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

## Paso 5: Verificar que Funciona

```bash
npm install
npm run dev
```

Ve a http://localhost:5173 y prueba el formulario de contacto.

¡Listo! 🎉
