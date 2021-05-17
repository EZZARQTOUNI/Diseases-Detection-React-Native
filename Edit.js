import AsyncStorage from '@react-native-community/async-storage'
import React, { useState,useEffect, Component } from 'react'
import {Text,View,SafeAreaView,TouchableOpacity,Picker,StyleSheet,TextInput} from 'react-native';
import {Languages} from './Variable';
import { ScrollView } from 'react-native-gesture-handler';


const Edit = (props) =>{
    const [name, setname] = useState(props.user_name===true?'':props.user_name);
    const [language, setlanguage] = useState(props.language==false?'en':props.language);
    const Save = () =>{

        props.setlanguage(language);
        props.setuser_name(name);     
        props._storeData("lng",language);
        props._storeData("user",name);
        props.navigation.goBack();
    }
    return(
        <SafeAreaView style={{ backgroundColor:'#fbfaff',minHeight:'100%',zIndex:900 }}>
            <ScrollView style={styles.container}>
                    <Text style={styles.Label}> {Languages[language]["name"]} </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text)=>setname(text)}
                        value={name}
                    />
                    <Text style={styles.Label}>{Languages[language]["Language"]}</Text>
                    <View style={styles.Picker}>
                        <Picker
                            selectedValue={language} 
                            onValueChange={(itemValue, itemIndex) => {setlanguage(itemValue);}}
                        >
                            <Picker.Item label="🇫🇷 Français" value="fr" />
                            <Picker.Item label="🇺🇸 English" value="en" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={styles.button}onPress={()=>Save()} >
                        <Text style={{ fontSize:20,color:'#fff',fontWeight:'700' }}>{Languages[language]["save"]}</Text>
                    </TouchableOpacity>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 20,
        borderWidth: 1,
        borderRadius:5,
        borderColor:'#424242',
        borderWidth:1.2,
        marginTop:8,
        fontSize:17,
        fontWeight:'600',
        paddingLeft:10
      },
    Picker:{
        height: 50,
        margin: 20,
        borderWidth: 1,
        borderRadius:5,
        borderColor:'#424242',
        borderWidth:1.2,
        marginTop:8,
        justifyContent:'center', 
    },
    Label :{ 
          fontSize:18,
          paddingLeft:20,
          marginBottom:5 
    },
    button:{
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#1a86e7',
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    container:{ 
        marginTop:40,
        minHeight:'100%',
        marginRight:10,
        marginLeft:10,
    }
})
export default Edit;