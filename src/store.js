import createStore from "redux-zero";
import data from './data/Data';

const chatComent = [{
        msg: 'Hola, Que necesitas Reportar?',
        description: 'accidente, siniestro'
    }

];
const wordsIdentify = ["choque", "accidente", "heridos", "muerte", "murio", "muerto", "muertos"];
const initialState = {
    chatComent: chatComent,
    wordsIdentify: wordsIdentify,
    selected: 0,
    next: false,
    parts: [],
    properties: data.properties,
    activeProperty: data.properties[0],
    targetPlace: null,
    isRouting: false,
    info: {
        user: null,
        email: null,
        location: null,
        typeDamage: null,
        description: null,
        damagedParts: [],
    }
};

const store = createStore(initialState);
export default store;