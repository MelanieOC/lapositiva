import store from "./store";

export const signIn = (email, password) => {
    let clone = [...store.getState().info]
    clone.user = 'Jhon Doe';
    clone.email= email;

    store.setState({
        info: clone
    })
}

export const chat = (text) => {
    // let msg  = ;
    let clone = [...store.getState().chatComent];
    clone.push({
        msg: text
    })
    let cloneInfo = [...store.getState().info];
    cloneInfo.description = text;

    store.setState({
        chatComent: clone,
        info : cloneInfo
    });

    const cloneWords = [...store.getState().wordsIdentify];
        for(let i = 0; i < cloneWords.length ; i++){
           let  n = text.indexOf(cloneWords[i]);
           if(n != -1){
               i = cloneWords.length;
               clone.push({
        msg: 'ok'
    })
    store.setState({
        chatComent: clone,
        next: true
    });
           }
     }
        // wordsIdentify.
        // let arrayText = text.split(" ");

}
export const saveParts = (text) => {
    let clone = [...store.getState().parts];
    clone.push(text);
    store.setState({
        parts:clone
    });
    console.log('parts', store.getState().parts);
}

/**
 * Mapa
 */
export const setActiveProperty= (property) =>{
    store.setState({
        activeProperty : property
    })
		
	}

export const setTarget = (targetPlace) => {
		store.setState({targetPlace  :targetPlace})
	}

export const setIsRouting  = ()  => {
		store.setState({isRouting : true})
	}