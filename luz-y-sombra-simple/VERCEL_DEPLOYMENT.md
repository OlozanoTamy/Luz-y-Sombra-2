# Desplegar en Vercel (Gratis)

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en **+** (esquina superior derecha)
3. Selecciona **New repository**
4. Nombre: `luz-y-sombra`
5. Selecciona **Public**
6. Haz clic en **Create repository**

## Paso 2: Subir Código a GitHub

En tu terminal, ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/luz-y-sombra.git
git branch -M main
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

## Paso 3: Desplegar en Vercel

1. Ve a https://vercel.com
2. Haz clic en **Sign Up** y conecta con GitHub
3. Haz clic en **Import Project**
4. Selecciona tu repositorio `luz-y-sombra`
5. Haz clic en **Deploy**

**¡Tu sitio estará en vivo en:** `https://luz-y-sombra.vercel.app`

## Paso 4: Configurar Variables de Entorno

1. En Vercel, ve a **Settings → Environment Variables**
2. Añade las 6 variables de Firebase (las que copiaste)
3. Haz clic en **Save**

## Paso 5: Redeploy

1. Ve a **Deployments**
2. Haz clic en los **...** del despliegue más reciente
3. Selecciona **Redeploy**

¡Listo! Tu sitio está en vivo con Firebase. 🚀
