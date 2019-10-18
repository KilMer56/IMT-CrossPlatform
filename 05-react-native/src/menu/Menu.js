import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({action, current}) => (
    <View style={styles.menu}>
        <OptionMenu nom="Toutes" action={() => action('all')} isSelected={current == 'all'}/>
        <OptionMenu nom="Actives" action={() => action('active')} isSelected={current == 'active'}/>
        <OptionMenu nom="Terminées" action={() => action('finished')} isSelected={current == 'finished'}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu