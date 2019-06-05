import React, { Component } from "react";
import { TiArrowBack } from "react-icons/ti";

class TodoForm extends Component {
  render() {
    return (
      <div className="text-center">
        <h3>
          Registrar Presupuesto
          <ul id="nav-mobile" className="right  hide-on-med-and-down">
            <li>
              <a className="seleccionar" href="https://7lgj0.codesandbox.io/">
                Regresar <TiArrowBack className="icon-return" />
              </a>
            </li>
          </ul>
        </h3>

        <div className="container">
          <div className="card-reg">
            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn-reg btn-primary"
            >
              REGISTRAR EGRESOS{" "}
            </button>

            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn-reg btn-primary"
            >
              REGISTRAR INGRESOS{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
