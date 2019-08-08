import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    return (
        <View style = {Styles.container}>
            <Text style= {Styles.title}>{props.title}</Text>
        </View>
    );
}
export default Header;


const Styles = {
    container : {
      backgroundColor : 'rgb(220,220,220)',
      justifyContent : 'center',
      alignItems : 'center',
      height : 60,
      paddingTop: 15,
      shadowColor: '#000000',
      shadowOffset: {whidth: 0, height: 3},
      shadowOpacity: '0.2',
    },
    title : {
        fontSize : 20,
    },
}