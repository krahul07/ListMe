import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) =>{

    return(
        <View style={styles.HeaderView}>
            <Text style={styles.HeaderText}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    HeaderView:{ 
        backgroundColor: 'darkblue',
        alignItems: 'center', 
    },
    HeaderText:{
        fontSize: 30,
        textTransform:'uppercase',
        color:'yellow',
        padding: 10,
        fontWeight:'bold',
    }
});

export default Header; 