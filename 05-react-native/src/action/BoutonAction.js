import React from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

/**
 * Le composant BoutonAction est paramétrable via son nom.
 *
 * Si le nom vaut 'Supprimer' alors le libellé du bouton sera 'Supprimer'.
 *
 * TODO 1. Modifier le code pour que le bouton soit configurable via son nom.
 *
 * TODO 2. Si l'action sur lequel s'applique ce bouton est terminé, alors appliquer le style 'termine' à l'élément <Text>
 *
 * TODO 3. Si le nom du bouton est 'Supprimer', alors appliquer le style 'supprimer' à l'élément <Text>
 *
 */
const BoutonAction = ({nom, finished, action}) => (
    <TouchableHighlight
        underlayColor='#efefef'
        style={styles.bouton}
        onPress={action}>
        <Text style={getStyle(nom, finished)}>
            {nom}
        </Text>
    </TouchableHighlight>
)

const getStyle = (nom, finished) => {
    if(nom == 'Terminer'){
        if(finished) {
            return [styles.texte, styles.termine];
        }
        else {
            return styles.texte;
        }
    }
    else {
        return [styles.texte, styles.supprimer];
    }
}

const styles = StyleSheet.create({
    bouton: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
    },
    texte: {
        color: '#666666',
    },
    termine: {
        color: 'green',
        fontWeight: 'bold',
    },
    supprimer: {
        color: 'rgba(175, 47, 47, 1)',
    },
})
export default BoutonAction