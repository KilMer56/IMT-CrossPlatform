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

    addLieu = (voyage, lieu) => {
        let newList = this.state.voyages.map(trip => {
            if(trip == voyage){
                trip.lieux.push(lieu);
            }

            return trip;
        });

        this.setState({
            voyages: newList
        })
    }

    render() {
        return (
            <MenuPrincipal
                screenProps={{
                    listeClients : this.state.listeClients,
                    voyages: this.state.voyages,
                    addVoyage: (voyage) => this.addVoyage(voyage),
                    addLieu: (voyage, lieu) => this.addLieu(voyage, lieu)
                }}
            />
        );
    }
}

