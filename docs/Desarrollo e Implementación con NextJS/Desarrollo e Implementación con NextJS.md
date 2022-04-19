---
sidebar_position: 1
---

Instalar Next.js es sumamente sencillo, sin embargo, hay que tomar en consideración que todo este entorno de trabajo gira alrededor de JavaScript. Es por ello que contar con los conocimientos básicos en HTML, CSS y JavaScript te va a permitir aprovechar de una manera más eficiente la librería de React. 

Por consiguiente, aprender React es fundamental para automatizar el código y aumentar la productividad. De aquí la importancia de desarrollar la habilidades necesarias para dominar la base de JavaScript. 

# Instalación y configuración de Next.js

Para crear un proyecto en React y Next.js es necesario utilizar un Administrador de Paquetes de nodos (*nmp*: Node Package Manager). Esto te permitirá instalar paquetes de manera local para agregar Next.js a tus proyectos.

## Paso 1: Instalar Node.js
Node.js es un **Administrador de paquetes de nodos** que cuenta con un entorno de ejecución para JavaScript. Puedes instalar Node.js desde este enlace: [Descargar Node.js](https://nodejs.org/es/).

## Paso 2: Crear un archivo package.json 
Crea una carpeta donde vas a almacenar y trabajar con el proyecto. Por ejemplo: *d:\workspace\proyecto-Nextjs*.
Dentro de esta carpeta crea un archivo *packege.json* este archivo servirá de base para la instalación de las dependencias del proyecto. Dicho archivo *packege.json* solo debe contener las llaves de apertura y cierre en este momento. 

*packege.json*
```json
{

}
```

## Paso 3: Instalar las dependencias para el proyecto 
Desde el terminal ejecuta el siguiente comando:

```
$ run npm install react react-dom next
```


## Paso 4: Instalar las dependencias para el proyecto   

Luego de instalar *react react-dom next*, el archivo *packege.json* va a contener la siguiente información: 

*packege.json*
```json
{
  "dependencies": {
    "next": "^12.1.4",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```
Además, en tu carpeta también vas a encontrar nuevas carpetas:
- node_modules
- package-lock.json


## Paso 5: Configurar el archivo *packege.json* para trabajar con localHost  

Cuando trabajas en un entorno local vas a necesitar un script que se encargue de abrir el proyecto en tu navegador (localhost). Por lo que tendrás que agregarle *"scripts": {"dev": "next dev"}* para su posterior uso.  

*packege.json* 
```json
{
    "scripts": {
        "dev": "next dev"
      },
    "dependencies": {
        "next": "^12.1.4",
        "react": "^18.0.0",
        "react-dom": "^18.0.0"
    }
}
```

## Paso 6: Crear el componente principal
Dentro de tu proyecto es necesario crear el componente principal para que la aplicación Next.js lo pueda identificar. Este archivo debe estar dentro de una carpeta Pages la cual debes crear en tu proyecto.
Luego crea un archivo index.js o index.jsx, cualquiera de los dos es válido. 

```
Ruta del proyecto: /d/workspace/proyecto-Nextjs

Carpetas y archivos:
- node_modules
- pages                <------- nueva carpeta
  - index.js           <------- componente principal
- package-lock.json
- package.json

```

El pasosiguiente es abrir el archivo index.js y agregar la función que se va a exportar como componente React principal. Esto permite indicarle a Next.js cual es componente principal de dicha página.


*index.js*
```javascript
export default function HomePage(){    
    return(
        <section>
            <h1>Desarrollo Web</h1> 
        </section>
    )
}
```

## Paso 7: Visualizar el proyecto en el Localhost de tu navegador

En esta etapa todo debe trabajar correctamente. Así que desde tu terminal o consola ejecuta el comando *npm run dev* para abrir el proyecto en el localhost:3000 de tu navegador.

```
$ npm run dev
```

A partir de ahora, todo cambio que realices al código se verá reflejado de manera automática en tu navegador. Esta función viene incorporada con Next.js y se le conoce con el nombre de **Actualización rápida** (*Fast Refresh*).  

**¡Felicitaciones!** Haz creado la base para tu primera aplicación Next.js. 

Para completar el ciclo de desarrollo web e implementación para la evaluación y puesta en marcha de tu proyecto solo faltan dos pasos más. El primero, utilizar un repositorio en la nube y controlador de versiones como GitHub; el segundo paso, importar el proyecto desde dicho repositorio a la plataforma de Vercel para implementar y mostrar el resultado de la aplicación web. 

## Paso 8: Crear el archivo .gitignore

Antes de subir tu código a GitHub es necesario crear un archivo: *.gitignore*. En este archivo se indica cuales son las carpetas y los archivos que no se necesitan subir al repositorio. Puedes copiar el siguiente contenido para tu proyecto:

*.gitignore*
```javascript
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## Paso 9: Instalar GitHub e importar tu proyecto a un repositorio en Github

- **Registrate e Instala GitHub**: Github es un repositorio en la nube donde podrás almacenar tu código de manera pública o privada. Además, este repositorio ilimitado tiene un control de versiones y te servirá de puente para importar tu proyecto a la plataforma de Vercel. Registrate e instala GitHub en tu computador desde el siguiente enlace: [Github.com](https://github.com/).

- **Crea un acceso personal a la API de GitHUB**: Este *token* se utiliza en lugar de una contraseña para Git a través de HTTPS. El *Personal access tokens* lo vas a utilizar al momento de subir una actualización al repositorio de GitHub como medida de seguridad y es obligatorio. En el siguiente enlace podrás administrar o generar un nuevo *token*: [Fichas de Acceso Personal](https://github.com/settings/tokens).  

- **Crea un nuevo repositorio en GitHub**: Antes de subir tu código a la nube es necesario crear un nuevo repositorio en Github. Para este proyecto se creó el repositorio Aprende-Nextjs.

- **Utiliza **Git Bash** como terminal para gestionar tu repositorio en github**: Abre tu terminal o consola para configurar y subir los archivos al repositorio en Github. 

```
$ cd d:                           <---Unidad local 
$ cd workspace\aprende-Nextjs     <---Carpeta del Proyecto
$ git init 
$ git add .
$ git commit -m "firt commit"
$ git remote add origin https://github.com/nombrecuenta/aprende-nextjs
$ git push -u origin main
```

- **Verificar que el código se subió de manera correcta al repositorio de GitHub**: *git push* se encarga de actualizar y subir el código de tu proyecto desde tu máquina local hasta un repositorio en la nube. Es la manera más eficiente de mantener actualizado tu código y compartirlo con tu equipo de trabajo.   

## Paso 10: Implementar tu proyecto Next.js en Vercel 
El último paso para completar el ciclo de desarrollo web de tu proyecto es implementar Next.js en producción. Para ello lo ideal es usar la plataforma Vercel desarrollada por los creadores de Next.js. Estos son los pasos a seguir:

- **Crear una cuenta en [vercel]**(https://vercel.com/signup), para ello utiliza GitHub.
- **Procede a importar el repositorio de Git a Vercel** desde el siguiente enlace: [Importar Repositorio](https://vercel.com/new).
- **Compilación del Proyecto**: Vercel va a detectar de manera automática que tienes una aplicación Next.js. De esta manera, se crea una configuración de compilación óptima para tu proyecto. 
- **URL de implementación**: Al finalizar la configuración de compilación vas a obtener una URL de implementación. 

**¡Felicidades!** Acabas de implementar tu aplicación Next.js en producción. 
