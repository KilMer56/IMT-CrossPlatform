import React from 'react'
import {Text, View} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import ListerVoyages from './ListerVoyages'
import AjouterVoyage from './AjouterVoyage'


const MenuPrincipal = createBottomTabNavigator({
    ListerVoyages: { screen: ListerVoyages },
    AjouterVoyage: { screen: AjouterVoyage }
})

// const MenuPrincipal = () => {
//     return (<View style={{marginTop:100}}>
//         <Text>Menu principal</Text>
//     </View>)
// }

export default MenuPrincipal