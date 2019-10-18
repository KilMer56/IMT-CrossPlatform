import { AJOUTER_LIVRE, SUPPRIMER_LIVRE } from "../actions";

import uuid from 'uuid/v4'

const etatInitial = {
  livres : [ { nom: 'Livre 1', auteur : 'Auteur 1', id: uuid()}]
}

const livreReducer = (etat = etatInitial, action) => {
    switch (action.type) {
        case AJOUTER_LIVRE:
            const {livre : nouveauLivre} = action

            nouveauLivre.id = uuid()
            return {
                livres: [
                    ...etat.livres, nouveauLivre
                ]
            }
            
        case SUPPRIMER_LIVRE:
            const {livre : livreASupprimer} = action;

            return {
                livres: etat.livres.filter(livre => livre.id != livreASupprimer.id)
            }

        default:
            return etat
    }
}

export default livreReducer
