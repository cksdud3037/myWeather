import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        icon: "weather-lightning",
        color: ['#020025', '#3c2cd5'],
        title: "오우쒯,,",
        name: "천둥번개가 쳐요"
    },
    Drizzle: {
        icon: "weather-pouring",
        color: ['#1c1683', '#bcbad2'],
        title: "오우쒯,,",
        name: "이슬비가 내려요"
    },
    Rain: {
        icon: "weather-rainy",
        color: ['#1c1683', '#352ea8', '#4237c7', '#bcbad2'],
        title: "오우쒯,,",
        name: "비가 와요"
    },
    Snow: {
        icon: "weather-snowy-heavy",
        color: ['#c6edff', '#f1fbff', '#ffe6e6'],
        title: "오우쒯,,",
        name: "눈이 와요"
    },
    Clear: {
        icon: "weather-sunny",
        color: ['#2980B9', '#6DD5FA'],
        title: "오우쒯,,",
        name: "날씨 좋아요"
    },
    Clouds: {
        icon: "weather-cloudy",
        color: ['#dff07b', '#c9e7c1'],
        title: "오우쒯,,",
        name: "구름이 많아요"
    },
    Mist: {
        icon: "weather-fog",
        color: ['#dff07b', '#c9e7c1'],
        title: "오우쒯,,",
        name: "약간 안개가 있어요"
    },
    Smoke: {
        icon: "weather-fog",
        color: ['#606c88', '#3f4c6b'],
        title: "오우쒯,,",
        name: "미세먼지가 많아요"
    },
    Haze: {
        icon: "weather-hazy",
        color: ['#403B4A', '#E7E9BB'],
        title: "오우쒯,,",
        name: "하늘이 흐릿해요"
    },
    Dust: {
        icon: "weather-fog",
        color: ['#606c88', '#3f4c6b'],
        title: "오우쒯,,",
        name: "미세먼지가 많아요"
    },
    Fog: {
        icon: "weather-fog",
        color: ['#757F9A', '#D7DDE8'],
        title: "오우쒯,,",
        name: "안개가 껴요"
    },
    Sand: {
        icon: "weather-fog",
        color: ['#e9d362', '#333333'],
        title: "오우쒯,,",
        name: "중국에서 황사가 와요"
    },
    Ash: {
        icon: "weather-fog",
        color: ['#274046', '#E6DADA'],
        title: "오우쒯,,",
        name: "미세먼지가 진짜 심해요 "
    },
    Squall: {
        icon: "weather-partly-rainy",
        color: ['#0052D4', '#4364F7', '#6FB1FC'],
        title: "오우쒯,,",
        name: "소나기가 내려요"
    },
    Tornado: {
        icon: "weather-tornado",
        color: ['#1F1C2C', '#928DAB'],
        title: "오우쒯,,",
        name: "태풍이 불어요"
    },
}

export default function Weather({temp, condition, city}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].color}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Text style={styles.city}>{city}</Text>
                <MaterialCommunityIcons name={weatherOptions[condition].icon} size={100} color="white"/>
                <Text style={styles.temp}>{condition}, {temp}º</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].name}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
    ]).isRequired,
    city: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    city: {
        fontSize: 46,
        color: '#fff'
    },
    temp: {
        fontSize: 28,
        color: '#fff'
    },
    title: {
        fontSize: 44,
        marginBottom: 10,
        fontWeight: '300',
        color: '#fff',
        textAlign: "left"
    },
    subTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
});
