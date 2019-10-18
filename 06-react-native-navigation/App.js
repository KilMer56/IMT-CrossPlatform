import React from 'react';

import MenuPrincipal from "./src/MenuPrincipal";


export default class App extends React.Component {

    state = {
        voyages: [],
        listeClients: []
    }

    addVoyage = (voyage) => {
        let newList = this.state.voyages;
        
        newList.push(voyage);

        this.setState({
            voyages: newList
        })
    }

    render() {
        return (
            <MenuPrincipal screenProps={{listeClients : this.state.listeClients}} addVoyage={(voyage) => addVoyage(voyage)}/>
        );
    }
}

