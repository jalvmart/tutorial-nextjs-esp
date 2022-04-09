---
sidebar_position: 1
---

# Cómo aumentar la productivo con React y Next.js 

Todo | Parte | Todo
![Lista Simple](/img/tutorial/001.jpg)

La siguiente imagen corresponde a una página web que muestra una título `<h1>` y una lista `<ul>` con tres elementos `<li>`. Además, de un botón donde los usuarios pueden indicar si le gusta el contenido.  

Con este sencillo ejemplo podemos evaluar cual es la manera más productiva de trabajar con un proyecto web. El objetivo de este ejercicio es recrear está simple página de cuatro maneras distintas. vas a descubrir como Next.js es la opción más eficiente. 

Así que lo siguente que haremos a continuación es obtener los resultados para estos cuatro procesos:

1. **Crear una lista con HTML**: Crear un simple archivo .html  
2. **Crear una lista con HTML y JavaScript**: Utilizar JavaScript para crear directamente los elementos de HTML y el contenido, mediante un script que manipule el Modelo de Objeto del Documento (DOM: *Document Object Model*).
3. **Crear una lista con React**: Utilizar React como biblioteca de JavaScript para crear una interface interactiva.
4. **Crear una lista con React y Next.js**: Utilizar Next.js como un framework para manejar las herramientas y la configuración necesaria para React. 

## 1. Crear una lista con HTML 
![Lista Simple con HTML](/img/tutorial/002.jpg)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Desarrollo Web Básico</h1>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</body>
</html>
```

## 2. Crear una lista con HTML y JavaScript 
![Lista Simple con HTML y JavaScript](/img/tutorial/003.jpg)

#### Archivo: index.html [Código](https://github.com/jalvmart/Curso01-P02-JavaScript-DOM-ejemplo01)
```html
<html>
  <body>
    <div id="app"></div>
    <script src="script.js"></script>   
   </body>
</html>
```
#### Archivo: script.js
```javascript
const app = document.getElementById("app")

//Create Header Title
const newH1 = document.createElement("h1")
const newTextH1 = document.createTextNode("Desarrollo Web Básico")
newH1.appendChild(newTextH1)
app.appendChild(newH1)

//Create unordered list
const newUL = document.createElement("ul")
app.appendChild(newUL)

//Create list
const unList = document.getElementsByTagName("ul")
const newTextLI = ["HTML","CSS","JavaScript"]

for (let i = 0; i < newTextLI.length; i++){    
    let newLI = document.createElement("li")
    newLI.appendChild(document.createTextNode(newTextLI[i]))
    unList[0].appendChild(newLI)    
}
```

![Lista Simple con HTML y JavaScript](/img/tutorial/004.jpg)

#### Mejoras al Archivo: script.js
```javascript
const app = document.getElementById("app")

const newTagH1 = document.createElement("h1")
const texH1 = "Desarrollo Web Básico"
const newTexH1 = document.createTextNode(texH1)

newTagH1.appendChild(newTexH1)
app.appendChild(newTagH1)

//Create id list1 for ul
const newTagUL = document.createElement("ul")
newTagUL.id = "list1"
app.appendChild(newTagUL)

//Create list
const arrayList = ["HTML","CSS","JavaScript"]
const listUL = document.getElementById("list1")

for (let i = 0; i < arrayList.length; i++){
    const newTagLI = document.createElement("li")
    const newTexLI = document.createTextNode(arrayList[i])
    newTagLI.appendChild(newTexLI)
    listUL.appendChild(newTagLI)     
}
```


## 3. Crear una lista con React
![Lista Simple con React](/img/tutorial/005.jpg)

#### Archivo: index.html
```html
<html>
  <body>
    <div id="app"></div>   

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx" src="script.jsx"></script> 
  
   </body>
</html>
```

#### Archivo: script.jsx
```javascript
const app = document.getElementById("app")

function Header({title}){
    const textH1 = "Título por Defecto (default title)"
    return <h1>{title ? title : textH1}</h1>
}

function HomePage(){
    const arrayList = ["HTML","CSS","JavaScript"]

    const [likes, setLikes] = React.useState(0)

    function handledClick(){
        return setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Desarrollo Web Básico"/>
            <ul>
                {arrayList.map((arrayList) => (
                    <li key={arrayList}>{arrayList}</li>                
                ))}
            </ul>
            <button onClick = {handledClick}>Me gusta ({likes})</button>
        </div>
    )
}

ReactDOM.render(<HomePage />, app)
```

## 4. Crear una lista con React y Next.js 

![Lista Simple](/img/tutorial/001.jpg)

#### Archivo: page/index.jsx
```javascript
import { useState } from 'react'

function Header({title}){
    const textH1 = "Título Predeterminado (default title)"
    return <h1>{title ? title : textH1}</h1>
}

export default function HomePage(){
    const arrayList = ["HTML","CSS","JavaScript","Node.js","React.js"]

    const [likes, setLikes] = useState(0)

    function handledClick(){
        return setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Desarrollo Web"/>
            <ul>
                {arrayList.map((arrayList) => (
                    <li key={arrayList}>{arrayList}</li>                
                ))}
            </ul>
            <button onClick = {handledClick}>Me gusta ({likes})</button>
        </div>
    )
}
```

Utiliza React y Next.js para crear aplicaciones web interactivas, dínamicas y de alto rendimiento. 




