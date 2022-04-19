---
sidebar_position: 4
---

# Escenario 3. Biblioteca React (declarativo)

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