import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../assets/images/home.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/lupe.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/orders.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/images/profile.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    menuList: {
        flexGrow: 1
    },
    footer:{
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: 10
    },
    footericon: {
        width: 30,
        height: 30
    }
})

export default Footer;