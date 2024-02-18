import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

//FORMA CON UNA VARIABLE QUE NO CAMBIA (FUNCION)
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

//FORMA CON UNA VARIABLE QUE CAMBIA
//STATE = ALGO QUE VA A CAMBIAR
//RENDER = BUILD AND RETURN HTML

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  update = () => {
    //OBJETIVO CAMBIAR EL STATE
    //SETSTATE ES UN METODO YA LISTO
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.update}>
        Hello
        {this.props.name} {this.state.counter}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
