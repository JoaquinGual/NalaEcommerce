import React, { Component } from 'react'

class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listado: ['Joaquin','Valentin','Alan','trini','juan','Pedro']
         };
    }
         
    
    render() { 
        const nombre = this.state.listado.map((n) => (
            <li>{n}</li>
        ))
        return ( 
            <div>
                <h1>Listado</h1>
                <ul>{nombre}</ul>
            </div>
         );
    }
}
 
export default Listado;