import React, { useState,useEffect, Component } from 'react'
import {Text,View,  TouchableOpacity,} from 'react-native';
import {ValueCheckbox,Symptom,Languages} from './Variable';
import { Checkbox } from 'react-native-paper';
import ChatBot from 'react-native-chatbot';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage'

const CheckEZZ = (props) =>{
 
    const [checked,setchecked]=useState(false);
    const onChangeValue = () =>{
      if(!checked===true) sym+=props.value+",";
      else {sym=sym.replace(props.value+",",'');}
      setchecked(!checked);
      console.log(sym);
    }
    
    return(
      <TouchableOpacity style={{ zIndex:20,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf: 'flex-start'}} 
      onPress={()=>{onChangeValue()}} >
        <Checkbox
          uncheckedColor='#fff'
          color='#fff'
        style={{ background:'red',color:"#fff" }}
          status={checked ? 'checked' : 'unchecked'}/>
        <Text style={{ color:"#fff" }} >{props.label}</Text>
      </TouchableOpacity>
    )
}

export default CheckEZZ;