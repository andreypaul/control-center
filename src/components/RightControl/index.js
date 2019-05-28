import React, {Component} from 'react';
import { Animated,  TouchableWithoutFeedback, View, Easing, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { em } from "../../utils";

const pauseIcon = require('./../../assets/img/icons/active/pause.png');
const prevIcon = require('./../../assets/img/icons/active/prev.png');
const nextIcon = require('./../../assets/img/icons/active/next.png');
const playIcon = require('./../../assets/img/icons/inActive/play.png');

export default class RightControl extends Component {

    state = {
        animWidth: new Animated.Value(em(160)),
        animHeight: new Animated.Value(em(160)),
        animTop: new Animated.Value(em(80)),
        animPaddingTop: new Animated.Value(em(80)),
        animRight: new Animated.Value(em(10)),
        animMarginHorizontal: new Animated.Value(em(10)),
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
                this.state.animRight,
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
                this.state.animRight,
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
                    toValue: em(165),
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
                        toValue: em(160),
                        duration: 200,
                        easing:Easing.back(2)
                    }
                ),
            ]).start()
        });
    };

    render() {

        const { animWidth, animHeight, animTop, animRight } = this.state;

        const animatedStyles = {
            width: animWidth,
            height: animHeight,
            top: animTop,
            right: animRight,
        };

        return(
            <TouchableWithoutFeedback onPress={this.state.isShowAnimation ?  this.onHideAnimation : this.onPress}
                                      onLongPress={this.state.isShowAnimation ? this.onHideAnimation : this.onShowAnimation}>
                <Animated.View style={[styles.container, animatedStyles]}>
                    <Text style={styles.text}>Музыка</Text>
                    <View style={styles.player}>
                        <PlayerButton source={prevIcon}/>
                        <Button active={pauseIcon} inActive={playIcon}/>
                        <PlayerButton source={nextIcon}/>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

const PlayerButton = ({source}) => {
    return(
        <TouchableOpacity>
            <Image source={source} style={styles.playerButton}/>
        </TouchableOpacity>
    )
};