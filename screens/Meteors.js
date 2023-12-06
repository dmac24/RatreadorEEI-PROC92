import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from "axios";
import { Alert } from 'react-native';

export default class MeteorScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            meteors: {},
        };
    }

    componentDidMount(){
        this.getMeteors();
    }

    getMeteors = () => {
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?&api_key=BaVHfIuB7exqsemdiqLpIA7WoGrhgwgYhtlTsHJL")
        .then((response) => {this.setState({meteors: response.data.near_earth_objects})
        console.log(Object.keys(this.state.meteors));
    })
        .catch(error => {Alert.alert(error.message)})
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>¡Pantalla de meteoritos!
                    https://api.nasa.gov/neo/rest/v1/feed?&api_key=BaVHfIuB7exqsemdiqLpIA7WoGrhgwgYhtlTsHJL
                    </Text>
            </View>
        )
    }
}
