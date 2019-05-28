import React, {Component} from 'react';
import {
    StyleSheet,
    ImageBackground,
    StatusBar,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import {em} from "./utils";
import LeftControl from "./components/LeftControl";
import RightControl from "./components/RightControl";
import {Button} from "./components/Button";

const imageBackground = require('./assets/img/background.png');

const rotateModeActiveIcon = require('./assets/img/icons/active/rotateMode.png');
const rotateModeInActiveIcon = require('./assets/img/icons/inActive/rotateMode.png');

const sleepModeActiveIcon = require('./assets/img/icons/active/sleepMode.png');
const sleepModeInActiveIcon = require('./assets/img/icons/inActive/sleepMode.png');

const safariActiveIcon = require('./assets/img/icons/active/safari.png');
const safariInActiveIcon = require('./assets/img/icons/inActive/safari.png');

const lanternActiveIcon = require('./assets/img/icons/active/lantern.png');
const lanternInActiveIcon = require('./assets/img/icons/inActive/lantern.png');

const photoActiveIcon = require('./assets/img/icons/active/photo.png');
const photoInActiveIcon = require('./assets/img/icons/inActive/photo.png');

const calcActiveIcon = require('./assets/img/icons/active/calc.png');
const calcInActiveIcon = require('./assets/img/icons/inActive/calc.png');

export default class App extends Component<Props> {

    onHideAnimation = () => {
        console.log('refs', this.refs);
        this.refs.leftControl.onHideAnimation();
        this.refs.rightControl.onHideAnimation();
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onHideAnimation}>
            <ImageBackground
                onPress={this.onPress}
                style={styles.container}
                source={imageBackground}
            >
                <StatusBar barStyle={'light-content'}/>
                <LeftControl ref='leftControl'/>
                <RightControl ref='rightControl'/>
                <View style={styles.sleepRotateModeWrapper}>
                    <Button active={rotateModeActiveIcon} inActive={rotateModeInActiveIcon}/>
                    <Button active={sleepModeActiveIcon} inActive={sleepModeInActiveIcon}/>
                </View>
                <View style={styles.footerWrapper}>
                    <Button active={lanternActiveIcon} inActive={lanternInActiveIcon}/>
                    <Button active={safariActiveIcon} inActive={safariInActiveIcon}/>
                    <Button active={calcActiveIcon} inActive={calcInActiveIcon}/>
                    <Button active={photoActiveIcon} inActive={photoInActiveIcon}/>
                </View>
            </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: em(25),
        backgroundColor: '#FFF'
    },
    sleepRotateModeWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        top: em(250),
        left: em(20),
        zIndex: 0
    },
    footerWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        top: em(450),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: em(20),
        zIndex: 0
    }
});
