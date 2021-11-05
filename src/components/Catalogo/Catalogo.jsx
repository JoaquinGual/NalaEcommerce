import React, { Component } from 'react';
import Tittle from '../Tittle/Tittle';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: 'Joita',
        }
    }
    render() { 
        return ( 
            <div>
                <Tittle name={this.state.name} clase="mt-5"/>
            </div>
         );
    }
}
 
export default Catalogo;