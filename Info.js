import React, { useState,useEffect } from 'react';
import {View,Text,ScrollView,StyleSheet,Dimensions,Linking,} from 'react-native';
import call from 'react-native-phone-call';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Languages} from './Variable';
import { SafeAreaView } from 'react-native-safe-area-context';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const Phone=(props)=>{
    const dialCall = (phone) => {

        const args = {
            number: phone, 
            prompt: false  
          }
          call(args).catch(console.error)          
      };
    return(
    <TouchableOpacity onPress={() => dialCall(props.phone)} style={Styles.phone} activeOpacity={.9} >
        <Feather name='phone-call' color={'#247be3'} size={28} style={{paddingLeft:10,}} />
        <Text style={{
                        width:'70%',
                        color: '#247be3',
                        fontSize: 22,
                        textAlign: 'center',
                        marginLeft:10
                    }}>
                        {props.phone}
            </Text>
    </TouchableOpacity>)
}

const Info = (props)=>{
    const [language,setlanguage]=useState(props.language);
    const [user_name,setuser_name]=useState(props.user_name);
    
    useEffect(()=>{
        setlanguage(props.language);
        setuser_name(props.user_name);
    })
        return(
            <>
            <SafeAreaView style={{width:"100%",height:"100%"}}>
                <ScrollView style={Styles.bottom} showsVerticalScrollIndicator={false}>
                    <View style={{margin:20,paddingBottom:110}}>
                        <Text style={Styles.titre}> {Languages[language]["N_d_T_I"]} </Text>
                        <Phone phone="112" /> 
                        <Phone phone="141" /> 
                        <Text style={Styles.titre}> {Languages[language]["Sites_app"]}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://medcine.trackiness.com/')} style={Styles.phone} activeOpacity={.9} >
                                <Icon name='web' color={'#247be3'} size={28} style={{paddingLeft:10,}} />
                                <Text style={{
                                                width:'70%',
                                                color: '#247be3',
                                                fontSize: 20,
                                                textAlign: 'center',
                                                marginLeft:10
                                            }}>
                                                
                                    {Languages[language]["our_w"]}
                                </Text>
                        </TouchableOpacity>
                        
                        <Text style={Styles.titre}> {Languages[language]["const_us"]}</Text>
                        <Phone phone="+2126000000" /> 

                    </View>
                </ScrollView>
            </SafeAreaView>



            </>

        );
    
}
export default Info;

const Styles=new StyleSheet.create({
    top:{
        width:"100%",
        height:'40%',
        
    },
    bottom:{
        width:"100%",
        height:'100%',
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        marginTop:1,
        shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:10,
        padding:10,
        zIndex:1,
        paddingTop:40

    },
    phone:
    {zIndex:2,backgroundColor:'white',flexDirection:'row',
    borderRadius:20,marginTop:5,marginBottom:18,
    margin:1,
    shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:10,
        padding:10,
    },
    titre:{fontSize:18,fontFamily:'arial',fontWeight:'bold',color:'#424242',marginTop:5,marginBottom:10,marginLeft:-7}
});
