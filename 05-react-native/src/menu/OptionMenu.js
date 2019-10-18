import React from 'react'
import {Text, TouchableHighlight, StyleSheet} from 'react-native'

/**
 * Composant représentant une option de menu.
 *
 *
 *
 */
const OptionMenu = ({nom, action, isSelected}) => (
    <TouchableHighlight
        underlayColor='#efefef'
        style={[
            styles.item,styles.selected,
            styles.border,
            styles.selected]}
        onPress={action}>
        <Text style={isSelected ? [styles.itemText, styles.bold] : styles.itemText}>
            {nom}
        </Text>

    </TouchableHighlight>
)

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})
export default OptionMenu