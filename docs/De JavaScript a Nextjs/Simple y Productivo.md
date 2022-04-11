---
sidebar_position: 1
---

# Aumenta tu productividad con Next.js 

La imagen de abajo representa una página web muy sencilla y sin CSS. Se va a usar como ejemplo para comparar el código que se crea al usar un método imperativo y en otro caso un método declarativo. Dicha página contiene una lista de elementos y un botón con un contador. 

![Lista construida con HTML ](/img/tutorial/001.jpg)

Al analizar dicha página verás un título `<h1>` y una lista `<ul>` con tres elementos `<li>`. Además, de un botón `<button>` que contiene  un contador que se incrementa cada vez que es pulsado.

Por tanto, toca recrear el código de la imagen de cuatro maneras diferentes para llegar al mismo resultado. Esto tiene la finalidad de evolucionar con el desarrollo web en la medida que se incorporan otras tecnologías para mejorar la productividad. ¿Cómo hacerlo de manera eficiente? Manipulando el DOM HTML con la adopción de procesos ya existentes y disponibles. Como lo son el uso de una biblioteca de funciones y el empleo de un *framework* o entorno eficiente de trabajo. 

Para comprender cuales son los beneficios de dicha adopción es necesario comparar el proceso de desarrollo programático. Esto implica, partir del uso de **HTML y JavaScript** tradicional e imperativo y pasar al uso eficiente y declarativo de **React y Next.js**.

### De la Programación Imperativa a la Programación Declarativa

Este ejemplo simple es ideal para mostrar las diferentes alternativas o escenarios que tiene un desarrollador para recrear esta simple página. Así que puedes utilizar HTML y JavaScript de manera imperativa para su construcción o adoptar un enfoque de programación declarativa con React y Next.js. 

Para efectos didácticos, verás 4 escenarios donde se destaca como el código y la organización del proyecto se vuelve más eficiente al incorporar el uso de React y Next.js.

## Escenario 1. HTML (estático)

[Objetivo] **Crear una lista con HTML**: Un simple archivo .html estático. 

Una de estas alternativas es crear las etiquetas de manera directa en la estructura del HTML.  
 
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


## Escenario 2. HTML y JavaScript (Imperativo)

[Objetivo] **Crear una lista con HTML y JavaScript**: Utilizar JavaScript para crear directamente los elementos de HTML y el contenido, mediante un script que manipule el Modelo de Objeto del Documento (DOM: *Document Object Model*). (Cuando dominas lo básico del lenguaje de JavaScript y te toca codificarlo todo)

Se puede crear todo el contenido con JavaScript mediante la manipulación de la estructura y los objetos del documento. Ahora, con este entorno programable tenemos más control. Imagina, que las lista se podría alimentar con información de una base de datos, un archivo *json* o utilizar un arreglo (array).  

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

No obstante, mucho del código que creamos desde cero y de manera imperativa se puede estandarizar mediante funciones reutilizables. En el siguiente escenario vamos a pasar de la de la programación imperativa a la programación declarativa.  

## Escenario 3. Biblioteca React (declarativo)

[Objetivo] **Crear una lista con React**: Utilizar React como biblioteca de JavaScript para crear una interface interactiva con componentes reutilizables. (Cuando descubres que se puede trabajar con componentes y eventos)

En este punto, decubriras la importancia que tiene pasar de la programación imperativa a la declarativa para acelerar el proceso de desarrollo. En la actualidad React es una biblioteca declatativa con componentes reutilizables que te facilitan la programación. Sobre todo cuando debes trabajar con eventos y la manipulación de los objetos para el HTML.

De esta manera, con React aumentas tu productividad y no tienes que reinventar una solución o construir un proceso con código puro y duro con un enfoque desafiante e imperativo en JavaScript.   

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

## Escenario 4. React y Next.js como su Framework (declarativo y eficiente)

[Obejtivo] **Crear una lista con React y Next.js**: Utilizar Next.js como un framework para manejar las herramientas y la configuración necesaria para React. 

Utilizar Next.js significa aumentar la productividad ya que es un entorno de trabajo que se encarga entre muchas otros procesos de: compilar, empaquetar, minimizar y dividir el código. De esta manera, se pueden crear aplicaciones web interactivas, dínamicas y de alto rendimiento.

![Lista Simple](/img/tutorial/001.jpg)

#### Archivo: page/index.jsx
```javascript
import { useState } from 'react'

function Header({title}){
    const textH1 = "Título Predeterminado (default title)"
    return <h1>{title ? title : textH1}</h1>
}

export default function HomePage(){
    const arrayList = ["HTML","CSS","JavaScript","Node.js","React","Next.js"]

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




