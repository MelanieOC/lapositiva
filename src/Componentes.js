import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import robot from './img/robot.png';
import chat from './img/chat.png';
import { Button } from 'react-bootstrap';
import { Redirect, NavLink } from 'react-router-dom';
import './Vista2.css';

const conversacion = [
    '¿Qué es lo que desea saber?',
    'Contamos con los siguientes seguros que cubren maternidad: MediSalud, MundiSalud, MedSalud.\nCada uno de ellos cubre parto normal, cesarea y parto multiple.\n¿Cuál te interesa saber más?',
    'Muy bien el seguro Medisalud tiene las siguientes características:'
]

export const Inicio = () => {
    return (
        <div id='intro'>
            <div className='title'>Asesoría <br /> Virtual</div>
            <div className='chat' >
                <img src={chat} />
                <p>Hola, soy Bot y seré tu asesor virtual</p>
            </div>
            <img className='robot' src={robot} />
            <NavLink className='btn btn-large btn-warning' to='/question' >Inicio</NavLink>
        </div>
    )
}

export const Saludo = () => {
    return (
        <div id='saludo'>
            <div className='chat' >
                <img src={chat} />
                <div>
                    <p>Para una mejor asistencia, quisiera saber cuenta con un seguro</p>
                    <div className='buttons'>
                        <NavLink className='btn  btn-primary' to='/login'>SI</NavLink>
                        <NavLink className='btn  btn-primary' to='/chat' >NO</NavLink>
                    </div>
                </div>

            </div>
            <img className='robot' src={robot} />
        </div>
    )
}

export const Pregunta = () => {
    return (
        <div id='pregunta'>
            <div className='chat' >
                <img src={chat} />
                <p>Hola, Juan. ¿En qué puedo ayudarte?</p>
            </div>
            <img className='robot' src={robot} />
            <div className='buttons'>
                <NavLink className='btn btn-info btn-large'  to='/chat' >Consulta de seguros</NavLink>
                <NavLink className='btn btn-info btn-large'  to='/ChatReport' >Reporte de incidente</NavLink>
            </div>
        </div>
    )
}
export class Vista2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conver: [conversacion[0]],
            res: []
        }
    }
    updateScroll() {
        let element = ReactDOM.findDOMNode(this.listElement);
        if (element) {
            element.scrollTop = element.scrollHeight;
        }

    }
    componentDidUpdate() {
        this.updateScroll();
    }
    render() {
        const plus = () => {
            const resp = this.textInput.value;
            this.setState((prevState, props) => ({
                res: [...prevState.res, resp],
                conver: [...prevState.conver, resp]
            }));
            let holi = this.state.res.length + 1;
            setTimeout(() => {
                this.setState((prevState, props) => ({
                    conver: [...prevState.conver, conversacion[holi]]
                }));
            }, 1500)
            this.textInput.value = '';
        }

        return (
            <div id='chat' >
                <ul className="chat-thread" ref={(div) => { this.listElement = div }} >
                    {this.state.conver.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div className="chat-window" >
                    <input className="chat-window-message"
                        defaultValue={this.textInput ? this.textInput.value : ''}
                        ref={(input) => { this.textInput = input; }}
                        onKeyDown={e => {
                            e.preventDefault;
                            if (e.keyCode === 13) {
                                plus();
                            }
                        }}
                        type="text" autoFocus />
                </div>
            </div>
        )
    }
}
