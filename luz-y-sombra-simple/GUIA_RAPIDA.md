# 🚀 Guía Rápida: Desplegar Luz & Sombra en 20 Minutos

## ✅ Paso 1: Firebase (5 minutos)

- [ ] Ve a https://console.firebase.google.com
- [ ] Crea un proyecto llamado `luz-y-sombra`
- [ ] Ve a "Firestore Database" y crea una base de datos
- [ ] Selecciona "Modo de prueba" y región `us-central1`
- [ ] Ve a Configuración → Aplicaciones → Web
- [ ] **Copia todas las credenciales** en un documento

## ✅ Paso 2: GitHub (5 minutos)

- [ ] Ve a https://github.com
- [ ] Crea un nuevo repositorio llamado `luz-y-sombra`
- [ ] Selecciona **Public**
- [ ] En tu terminal, ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/luz-y-sombra.git
git branch -M main
git push -u origin main
```

## ✅ Paso 3: Vercel (5 minutos)

- [ ] Ve a https://vercel.com
- [ ] Haz clic en "Sign Up" y conecta con GitHub
- [ ] Haz clic en "Import Project"
- [ ] Selecciona tu repositorio `luz-y-sombra`
- [ ] Haz clic en "Deploy"
- [ ] **Tu sitio estará en:** `https://luz-y-sombra.vercel.app`

## ✅ Paso 4: Variables de Entorno (5 minutos)

- [ ] En Vercel, ve a Settings → Environment Variables
- [ ] Añade estas 6 variables (de Firebase):
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`
- [ ] Haz clic en "Save"

## ✅ Paso 5: Redeploy (2 minutos)

- [ ] En Vercel, ve a Deployments
- [ ] Haz clic en los **...** del despliegue más reciente
- [ ] Selecciona "Redeploy"
- [ ] Espera a que termine

## ✅ Verificar que Funciona

1. Ve a tu sitio: `https://luz-y-sombra.vercel.app`
2. Desplázate hasta "Contáctanos"
3. Completa el formulario
4. Haz clic en "Enviar Solicitud"
5. Deberías ver "¡Mensaje enviado exitosamente!"

## 🎉 ¡Listo!

Tu sitio está en vivo. Ahora puedes:
- Cambiar el contenido editando los archivos
- Hacer commit y push a GitHub
- Vercel se redesplegará automáticamente

¡Mucho éxito! 🚀
