import React, {Component} from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { em } from "../../utils";


export class Button extends Component {
    state = {
        isActive: false
    };

    onPress = () => {
        this.setState({isActive: !this.state.isActive});
    };

    render() {
        return(
            <TouchableOpacity style={styles.container} onPress={this.onPress} >
                <Image source={this.state.isActive? this.props.active : this.props.inActive} style={styles.image}/>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: em(50),
        height: em(50),
        borderRadius: em(100),
        overflow: 'hidden',
        marginVertical: em(15),
        marginHorizontal: em(10),
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },
    image: {
        width: em(50),
        height: em(50)
    }
});