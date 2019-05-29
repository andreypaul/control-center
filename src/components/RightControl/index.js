import React, {Component} from 'react';
import {
    Animated,
    TouchableWithoutFeedback,
    View,
    Easing,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { em } from "../../utils";

const pauseIcon = require('./../../assets/img/icons/active/pause.png');
const prevIcon = require('./../../assets/img/icons/active/prev.png');
const nextIcon = require('./../../assets/img/icons/active/next.png');
const playIcon = require('./../../assets/img/icons/inActive/play.png');

const top = Dimensions.get('window').height/4;
const right = Dimensions.get('window').width/100;
const duration = 200;

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
        this.props.hideLeftControl();
        Animated.parallel([
            Animated.timing(
                this.state.animTop,
                {
                    toValue: em(top),
                    duration
                }
            ),
            Animated.timing(
                this.state.animRight,
                {
                    toValue: em(right),
                    duration
                }
            ),
            Animated.timing(
                this.state.animHeight,
                {
                    toValue: em(350),
                    duration
                }
            ),
            Animated.timing(
                this.state.animWidth,
                {
                    toValue: em(350),
                    duration
                }
            ),
        ]).start();
        this.setState({
            isShowAnimation: true,
        });
        this.props.hideContent();
    };

    onHideAnimation = () => {
        this.props.showContent();
        this.props.showLeftControl();
        Animated.parallel([
            Animated.timing(
                this.state.animTop,
                {
                    toValue: em(80),
                    duration
                }
            ),
            Animated.timing(
                this.state.animRight,
                {
                    toValue: em(10),
                    duration
                }
            ),
            Animated.timing(
                this.state.animHeight,
                {
                    toValue: em(160),
                    duration
                }
            ),
            Animated.timing(
                this.state.animWidth,
                {
                    toValue: em(150),
                    duration
                }
            ),
        ]).start(() => {
            this.setState({
                isShowAnimation: false
            })
        });
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
            opacity: this.props.controlOpacity
        };
        return(
            <TouchableWithoutFeedback
                onPress={this.state.isShowAnimation ?  this.onHideAnimation : this.onPress}
                onLongPress={this.state.isShowAnimation ? this.onHideAnimation : this.onShowAnimation}
            >
                <Animated.View style={[styles.container, animatedStyles, {zIndex: this.state.isShowAnimation? 4 : 2}]}>
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