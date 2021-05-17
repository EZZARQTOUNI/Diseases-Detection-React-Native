import React, { useState,useEffect } from 'react'
import {Animated,Text,SafeAreaView,View,Image,StyleSheet,Dimensions,TouchableOpacity,} from 'react-native';

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

const ___ ={
    getWidth,getHeight,isPortrait
}
export default getWidth;