import React from 'react'
import style from './Style'
import { TextInput, Button, View } from 'react-native'
import List from './List'


export default class Home extends React.Component {

static navigationOptions = {
    title: 'Rechercher une ville',
}

    constructor (props) {
        super (props)
        this.state = {

            city: 'Le Mans'
        }
    }

    setCity (city) {
        this.setState({city})
    }

    submit () {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }
    render () {

        return  (
            <View>
<TextInput
underlineColorAndroid='transparent'
onChangeText={(Text) => this.setCity(Text)}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.city}
      />

<Button style={style.button} onPress={() => this.submit()} title="Rechercher"/>
</View>
        )
    }
}