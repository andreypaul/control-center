import React, {Component} from 'react';
import { Animated,  TouchableWithoutFeedback, View, Easing } from "react-native";
import { Button } from "../Button";
import { em } from "../../utils";
import { styles } from "./styles";

const bluetoothActiveIcon = require('./../../assets/img/icons/active/bluetooth.png');
const bluetoothInActiveIcon = require('./../../assets/img/icons/inActive/bluetooth.png');

const wifiActiveIcon = require('./../../assets/img/icons/active/wifi.png');
const wifiInActiveIcon = require('./../../assets/img/icons/inActive/wifi.png');

const flyModeActiveIcon = require('./../../assets/img/icons/active/flyMode.png');
const flyModeInActiveIcon = require('./../../assets/img/icons/inActive/flyMode.png');

const cellularActiveIcon = require('./../../assets/img/icons/active/cellular.png');
const cellularInActiveIcon = require('./../../assets/img/icons/inActive/cellular.png');

const airDropActiveIcon = require('./../../assets/img/icons/active/airDrop.png');
const airDropInActiveIcon = require('./../../assets/img/icons/inActive/airDrop.png');

const modemModeActiveIcon = require('./../../assets/img/icons/active/modemMode.png');
const modemModeInActiveIcon = require('./../../assets/img/icons/inActive/modemMode.png');

export default class LeftControl extends Component {

    state = {
        animWidth: new Animated.Value(em(150)),
        animHeight: new Animated.Value(em(160)),
        animTop: new Animated.Value(em(80)),
        animPaddingTop: new Animated.Value(em(80)),
        animLeft: new Animated.Value(em(10)),
        animOpacity: new Animated.Value(em(0)),
        isShowAnimation: false,
    };

    onShowAnimation = () => {
        Animated.parallel([
            Animated.timing(
                this.state.animTop,
                {
                    toValue: em(250),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animLeft,
                {
                    toValue: em(2),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animHeight,
                {
                    toValue: em(350),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animWidth,
                {
                    toValue: em(350),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animOpacity,
                {
                    toValue: em(1),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animPaddingTop,
                {
                    toValue: em(0),
                    duration: 500,
                }
            ),

        ]).start();
        this.setState({
            isShowAnimation: true,
        })

    };

    onHideAnimation = () => {
        Animated.parallel([
            Animated.timing(
                this.state.animTop,
                {
                    toValue: em(80),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animLeft,
                {
                    toValue: em(10),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animHeight,
                {
                    toValue: em(160),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animWidth,
                {
                    toValue: em(150),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animOpacity,
                {
                    toValue: em(0),
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.animPaddingTop,
                {
                    toValue: em(80),
                    duration: 500,
                }
            ),
        ]).start();
        setTimeout(() => {
            this.setState({
                isShowAnimation: false
            })
        },500)
    };

    onPress = () => {
        Animated.parallel([
            Animated.timing(
                this.state.animHeight,
                {
                    toValue: em(165),
                    duration: 100,
                    easing: Easing.back(2)
                }
            ),
            Animated.timing(
                this.state.animWidth,
                {
                    toValue: em(155),
                    duration: 100,
                    easing: Easing.back(2)
                }
            ),
        ]).start( () => {
            Animated.parallel([
                Animated.timing(
                    this.state.animHeight,
                    {
                        toValue: em(160),
                        duration: 200,
                        easing: Easing.back(2)
                    }
                ),
                Animated.timing(
                    this.state.animWidth,
                    {
                        toValue: em(150),
                        duration: 200,
                        easing:Easing.back(2)
                    }
                ),
            ]).start()
        });
    };

    render() {
        const { animWidth, animHeight, animTop, animLeft, animOpacity, animPaddingTop } = this.state;

        const animatedStyles = {
            width: animWidth,
            height: animHeight,
            top: animTop,
            left: animLeft,
            paddingTop: animPaddingTop
        };

        return(
            <TouchableWithoutFeedback onPress={this.state.isShowAnimation ? this.onHideAnimation : this.onPress}
                onLongPress={this.state.isShowAnimation ? this.onHideAnimation : this.onShowAnimation}>

                <Animated.View style={[
                    styles.container, animatedStyles]}>
                    <View
                        style={[styles.iconsWrapper, {justifyContent: this.state.isShowAnimation ? 'space-around' : 'center'}]}>
                        <Button active={flyModeActiveIcon} inActive={flyModeInActiveIcon}/>
                        <Button active={cellularActiveIcon} inActive={cellularInActiveIcon}/>
                    </View>
                    <View
                        style={[styles.iconsWrapper, {justifyContent: this.state.isShowAnimation ? 'space-around' : 'center'}]}>
                        <Button active={wifiActiveIcon} inActive={wifiInActiveIcon}/>
                        <Button active={bluetoothActiveIcon} inActive={bluetoothInActiveIcon}/>
                    </View>
                    <Animated.View
                        style={[styles.iconsWrapper, {
                            opacity: animOpacity,
                            justifyContent: this.state.isShowAnimation ? 'space-around' : 'center'
                        }]}>
                        <Button active={airDropActiveIcon} inActive={airDropInActiveIcon}/>
                        <Button active={modemModeActiveIcon} inActive={modemModeInActiveIcon}/>
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}