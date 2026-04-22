# Luz & Sombra - Versión Simple para Vercel

Sitio web profesional para cortinas y persianas en Bogotá, optimizado para Vercel.

## 🚀 Características

- ✨ React 19 + TypeScript
- 🎨 Tailwind CSS 4
- 🔥 Firebase Firestore para base de datos
- 📱 Responsive y mobile-first
- ⚡ Optimizado para Vercel
- 📧 Formulario de contacto funcional

## 📋 Instalación Local

```bash
# Instalar dependencias
npm install

# Crear archivo .env.local
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración de Firebase

1. Ve a https://console.firebase.google.com
2. Crea un nuevo proyecto
3. Habilita Firestore Database
4. Copia las credenciales a `.env.local`:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## 🌐 Desplegar en Vercel

1. Sube el código a GitHub
2. Ve a https://vercel.com
3. Conecta tu repositorio
4. Configura las variables de entorno
5. ¡Deploy!

## 📁 Estructura del Proyecto

```
src/
├── components/      # Componentes React
├── lib/            # Utilidades (Firebase, servicios)
├── App.tsx         # Componente principal
├── main.tsx        # Entrada de la aplicación
└── index.css       # Estilos globales
```

## 🛠️ Tecnologías

- React 19
- TypeScript
- Tailwind CSS 4
- Firebase Firestore
- Vite

## 📞 Soporte

Para problemas, revisa:
- Los logs de Vercel
- La consola del navegador (F12)
- Firebase Console para verificar datos

¡Mucho éxito con Luz & Sombra! 🚀
