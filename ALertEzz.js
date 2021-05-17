import React, { useState,useEffect } from 'react'
import {Animated,Text,SafeAreaView,View,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';



const getWidth = ()=>{
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width?dim.width:dim.height;
}
const getHeight = ()=>{
    const dim = Dimensions.get('screen');
    return dim.height < dim.width?dim.width:dim.height;
}
const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
}; 

const ALertEzz = (props) =>{
    const left = new Animated.Value(getWidth());
    const show = () =>{
        Animated.spring(left, {
            toValue: 0
          }).start();
    }
    const hide = () =>{
        Animated.spring(left, {
            toValue: -getWidth()
          }).start();
        props.setshwo(false);
    }
    useEffect(()=>{show();});
    if(!props.show) return(null);
    return(
        <SafeAreaView style={Alertstyles.firtcontainer} >
            <TouchableOpacity onPress={()=>{ hide() }} style={Alertstyles.touchstyle}></TouchableOpacity>
            <Animated.View style={[Alertstyles.scecondcontainer,{left:left}]}>
                <View style={{ borderBottomWidth:1,borderBottomColor:'#9e9e9e82',padding:10,}}>
                    <Text style={{ fontSize:19,fontWeight:'bold',alignItems:'center',color:'#132b53',maxWidth:getWidth()/1.2  }}>{props.title}</Text>
                    <FontAwesome onPress={()=>{ hide() }} name="remove" color="#9e9e9e" size={25} style={{ position:'absolute',right:10,top:10 }} />
                </View>
                <ScrollView style={{ marginLeft:5,padding:5,marginTop:5,overflow:'scroll',}}>
                    <Text style={{ fontSize:17,paddingBottom:15 }}>
                        {props.description}
                    </Text>
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}
const Alertstyles = StyleSheet.create({
    firtcontainer:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0000001a',
        overflow:'hidden' ,
        zIndex:999
    },
    scecondcontainer:{
        backgroundColor:'#fff',
        margin:'2%',
        overflow:'hidden',
        maxHeight:"50%",
        minHeight:170,
        borderRadius:10,
        shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        }, 
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        minWidth:'50%',
        
    },
    touchstyle:{
        width:'100%',
        height:'100%',
        position:"absolute",
        top:0,
        left:0,
        
    }
})
export default ALertEzz;