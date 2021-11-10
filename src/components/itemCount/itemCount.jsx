//contador.jsx

import React from 'react';
import Icono from '../Icon/itemIcon';

export default class ItemCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  aumentar() {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  disminuir() {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <div>
        <p className="numero">{this.state.contador}</p>
        <button onClick={() => this.aumentar()} className="btn btn-primary me-1"><Icono iconClass="fas fa-plus"/></button>
        <button onClick={() => this.disminuir()} className="btn btn-success ms-1"><Icono iconClass="fas fa-minus"/></button>
      </div>
    );
  }
}
