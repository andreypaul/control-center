import React, {Component} from 'react';
import {
    StyleSheet,
    ImageBackground,
    StatusBar,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import { em } from "./utils";
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

const durationHide = 50;
const durationShow = 100;

export default class App extends Component<Props> {

    state = {
        animOpacity: new Animated.Value(1),
        animLeftOpacity: new Animated.Value(1),
        animRightOpacity: new Animated.Value(1)
    };

    onHideAnimation = () => {
        this.refs.leftControl.onHideAnimation();
        this.refs.rightControl.onHideAnimation();
    };

    hideContent = () => {
        Animated.timing(
            this.state.animOpacity,
            {
                toValue: 0,
                duration: durationHide
            }
        ).start()
    };

    showContent = () => {
        Animated.timing(
            this.state.animOpacity,
            {
                toValue: 1,
                duration: durationShow
            }
        ).start()
    };

    hideLeftControl = () => {
        Animated.timing(
            this.state.animLeftOpacity,
            {
                toValue: 0,
                duration: durationHide
            }
        ).start()
    };

    showLeftControl = () => {
        Animated.timing(
            this.state.animLeftOpacity,
            {
                toValue: 1,
                duration: durationShow
            }
        ).start()
    };

    hideRightControl = () => {
        Animated.timing(
            this.state.animRightOpacity,
            {
                toValue: 0,
                duration: durationHide
            }
        ).start()
    };

    showRightControl = () => {
        Animated.timing(
            this.state.animRightOpacity,
            {
                toValue: 1,
                duration: durationShow
            }
        ).start()
    };



    render() {

        const {animOpacity, animRightOpacity, animLeftOpacity} = this.state;
        const animatedStyle = {opacity: animOpacity};


        return (
            <TouchableWithoutFeedback onPress={this.onHideAnimation}>
                <ImageBackground
                    onPress={this.onPress}
                    style={styles.container}
                    source={imageBackground}
                >
                    <StatusBar barStyle={'dark-content'}/>
                    <LeftControl
                        ref='leftControl'
                        animOpacity={animOpacity}
                        controlOpacity={animLeftOpacity}
                        hideRightControl={this.hideRightControl}
                        showRightControl={this.showRightControl}
                        hideContent={this.hideContent}
                        showContent={this.showContent}
                    />
                    <RightControl
                        ref='rightControl'
                        animOpacity={animOpacity}
                        controlOpacity={animRightOpacity}
                        hideLeftControl={this.hideLeftControl}
                        showLeftControl={this.showLeftControl}
                        hideContent={this.hideContent}
                        showContent={this.showContent}
                    />
                    <Animated.View style={[styles.sleepRotateModeWrapper, animatedStyle]}>
                        <Button active={rotateModeActiveIcon} inActive={rotateModeInActiveIcon}/>
                        <Button active={sleepModeActiveIcon} inActive={sleepModeInActiveIcon}/>
                    </Animated.View>
                    <Animated.View style={[styles.footerWrapper, animatedStyle]}>
                        <Button active={lanternActiveIcon} inActive={lanternInActiveIcon}/>
                        <Button active={safariActiveIcon} inActive={safariInActiveIcon}/>
                        <Button active={calcActiveIcon} inActive={calcInActiveIcon}/>
                        <Button active={photoActiveIcon} inActive={photoInActiveIcon}/>
                    </Animated.View>
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
