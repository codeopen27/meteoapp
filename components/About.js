import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class About extends React.Component {

search () {
    console.log(this.props.navigation)
}

    render () {
        return (
<View style={style.view}>
            <Text style={style.title}>A propos de moi</Text>
            <Text>Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Vel perspiciatis adipisci atque unde officiis vero. Perspiciatis eaque debitis ab consectetur quia sequi omnis distinctio autem repellat! Ad inventore omnis illum.
                 
                 </Text>
                <Button> style={style.button} onPress={() => this.search()} title="Rechercher une ville"</Button>
            </View>
        )
    }
}
const style = StyleSheet.create ({
    view: {
        margin: 20
    },
title: {
    fontSize: 22,
    marginBottom: 20
}

})