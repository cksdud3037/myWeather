import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from './assets/1.png';

export default function flexTest() {

    return (
        <View style={styles.container}>
            {/*<Text style={styles.text}>오호라 <Text style={styles.bold}>React-Native</Text> 재밌넹</Text>*/}
            {/*<Image source={logo} style={{width: 300, height: 300}}/>*/}
            <StatusBar style="light" hidden={true}/>
            <Text style={styles.text}>flex test</Text>
            <View style={styles.first}/>
            <View style={styles.second}/>
            <View style={styles.third}/>
            <View style={styles.fourth}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        // marginTop: 10,

    },
    text: {
        color: 'black',
        fontSize: 24,
        margin: 25,
        fontWeight: '200'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 48,
        color: '#61dafb'
    },
    first: {
        backgroundColor: '#ff7979',
        flex: 1,
        // alignSelf: 'stretch',
        width: '100%'
    },
    second: {
        backgroundColor: '#f6e58d',
        flex: 2,
        // alignSelf: 'stretch',
        width: '100%'
    },
    third: {
        backgroundColor: '#7ed6df',
        flex: 3,
        // alignSelf: 'stretch',
        width: '100%'
    },
    fourth: {
        backgroundColor: '#686de0',
        flex: 4,
        // alignSelf: 'stretch',
        width: '100%'
    }
});
