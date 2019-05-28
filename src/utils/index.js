import { Dimensions, Platform } from 'react-native';

export function em(size) {
    const designWidth = 375;
    let winSize = Dimensions.get("window");
    let responsiveSize = winSize.width * size / designWidth;
    return Platform.OS === "ios" ? responsiveSize : Math.round(responsiveSize);
}