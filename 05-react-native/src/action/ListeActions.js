import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, doneAction, deleteAction}) => {
    return (
        <View>
            {actions.map((action, index) => {
                return <UneAction key={index} action={action} doneAction={() => doneAction(action)} deleteAction={() => deleteAction(action)}/>;
            })}
        </View>
    )
}

export default ListeActions