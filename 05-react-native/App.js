import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        viewMode: "all"
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        this.setState({
            texteSaisie: nouvelleSaisie
        })
        console.log('la saisie à changée', nouvelleSaisie)
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        console.log('Vous avez cliqué sur Valider !')
        if(this.state.texteSaisie.length > 0){
            let newList = this.state.actions;
        
            newList.push({
                titre: this.state.texteSaisie,
                finished: false
            });
    
            this.setState({
                texteSaisie: '',
                actions: newList
            });
    
            console.log(newList);
        }
    }

    supprimerAction(actionToDelete) {
        this.setState({
            actions: this.state.actions.filter(action => action != actionToDelete)
        });
    }

    changeFinished(action){
        let indexOf = this.state.actions.indexOf(action);
        
        this.setState({
            actions: this.state.actions.map((action, index) => {
                if(index == indexOf) {
                    action.finished = !action.finished;
                }

                return action;
            })
        });
    }

    displayList() {
        switch(this.state.viewMode){
            case 'active':
                return this.state.actions.filter(action => !action.finished);
            case 'finished':
                return this.state.actions.filter(action => action.finished);
            default: 
                return this.state.actions;
        }
    }

    setDisplayMode(mode) {
        this.setState({
            viewMode: mode
        })
    }

    render() {
        const {texteSaisie} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions
                        actions={this.displayList()}
                        doneAction={(action) => this.changeFinished(action)}
                        deleteAction={(action) => this.supprimerAction(action)}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu action={(mode) => this.setDisplayMode(mode)} current={this.state.viewMode}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})