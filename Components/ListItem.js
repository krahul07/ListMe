import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Button, TouchableHighlightBase, TouchableHighlight} from 'react-native'; 

const ListItem = (props) =>{
    return(
        <View style = {styles.blockStyle}>
            <Text key ={props.obj.id} style={styles.itmStyle}> {props.obj.item} </Text>
            <TouchableOpacity>
                <Text key={props.obj.id} style = {styles.btnStyle} onPress={() => props.deleteItem(props.obj.id)}>X</Text>
            </TouchableOpacity>
        </View>
    ); 
}

export default ListItem; 

const styles = StyleSheet.create({
    blockStyle:{
        flex:1,
        flexDirection:'row', 
    },
    itmStyle:{
        flex:1,
        color: "blue",
        padding: 15,
        fontSize: 30,
        backgroundColor: "lightyellow",
        borderBottomColor: "#eca", 
        borderBottomWidth: 1,
    }, 
    btnStyle:{
        marginLeft:0,
        marginRight:0,
        fontSize:30,
        padding:15,
        paddingRight:25,
        paddingLeft:25,
        color:'red',
        backgroundColor:'lightyellow', 
        borderColor: "#eca", 
        borderWidth: 1,
    }
    
})