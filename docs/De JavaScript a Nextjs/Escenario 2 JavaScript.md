---
sidebar_position: 3
---

# Escenario 2. HTML y JavaScript (Imperativo)

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