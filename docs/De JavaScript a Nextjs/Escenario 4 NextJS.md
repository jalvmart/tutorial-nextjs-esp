---
sidebar_position: 5
---

## Escenario 4. React y Next.js como su Framework (declarativo y eficiente)

[Obejtivo] **Crear una lista con React y Next.js**: Utilizar Next.js como un framework para manejar las herramientas y la configuración necesaria para React. 

Utilizar Next.js significa aumentar la productividad ya que es un entorno de trabajo que se encarga entre muchas otros procesos de: compilar, empaquetar, minimizar y dividir el código. De esta manera, se pueden crear aplicaciones web interactivas, dínamicas y de alto rendimiento.

![Lista Simple](/img/tutorial/001.jpg)

En esta sección se muestra solo el código que es necesario crear, luego de configurar el framework. En la próxima sección se detalla paso a paso como hacer la instalación para trabajar tanto con React y Next.js.

#### Archivo: pages/index.jsx
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