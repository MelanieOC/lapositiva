import React, { Component } from 'react';
import {
    NavLink, Redirect
} from 'react-router-dom';
import { chat } from './actions';
const conversacion = [
    '¿Qué pasó?',
    'Ten calma, y sigue los siguientes pasos que te voy a indicar'
]
export class ChatReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conver: [conversacion[0]],
            res: [],
            next:false
        }
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
            setTimeout(() => {
                this.setState({
                    next: true
                });
            }, 3500)
            this.textInput.value = '';
        }

        return (
            <div id='chat' >
                <ul className="chat-thread" ref={(div) => { this.listElement = div }} >
                    {this.state.conver.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div className="chat-window" >
                    <input className="chat-window-message"
                        placeholder='Escribe aquí'
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
                {
                    this.state.next && <Redirect to="/map" />
                }
            </div>
        )
    }
}
const HTMLprint = ({ chatComent, next }) => {
    console.log('next', next)
    return (
        <div>
            {
                chatComent.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.msg}
                        </div>
                    )
                })
            }
            {
                next && <Redirect to="/map" />
            }
        </div>
    )
}