import AsyncStorage from '@react-native-community/async-storage'
import React, { useState,useEffect, useRef } from 'react'
import {StatusBar, SafeAreaView,Animated} from 'react-native';
import ChatbotEzz from './ChatbotEzz';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Tabcompenant from './Tabcompenant';
import ArticleElement from './ArticleElement';
import Edit from './Edit';

var splash=true;
const Stack= new createStackNavigator();
const getsplash = () =>{
  return splash;
}
const SplashEl =({s})=>{
  return(
    <SafeAreaView style={{backgroundColor:'#1986ea',justifyContent:'center',width:'100%',height:'100%'}}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"default"}
        showHideTransition={true}
        hidden={true}
         />
      <Animated.Image source={require('./Images/Logom.png')} style={{width:180,height:180,alignSelf:'center',transform:[{scale:s}]}} />
    </SafeAreaView>
  )
}
const Splash=({navigation})=>{
  const s=useRef(new Animated.Value(1)).current;
  const [splash0,setsplash0]=useState(splash);
  useEffect(()=>{setsplash0(getsplash())})
  if(!splash0){
    setTimeout(()=>{
      Animated.timing(s,{
        toValue:0.5,
        duration:500,
        delay:200,
        useNativeDriver:false
      }).start();
      },2000)
      setTimeout(()=>{
        Animated.spring(s,{
          toValue:30,
          useNativeDriver:false
        }).start();
        },2600) 
        setTimeout(() => {
          navigation.replace('Tab'); 
        }, 2800);
  } 
  
  return(
    <SplashEl s={s} />
  ) 
  
}
const App = () =>{
  const [user_name,setuser_name]=useState(false);
  const [language,setlanguage]=useState(false);

  const _storeData = async (title,value) => {
    setuser_name(value);
    try {
      await AsyncStorage.setItem(title,value);
    } catch (error) {
    }
  }; 
  const _retrieveData = async (title) => {
    try {
      const value = await AsyncStorage.getItem(title);
      if (value !== null) {
        setuser_name(value);
        _retrieveData_lang();
        return value
      }
      setuser_name(true);
    } catch (error) {
    }
    return null; 
  };
  const _retrieveData_lang = async () => {
    try {
    const value = await AsyncStorage.getItem('lng');
      if (value !== null) {
        setlanguage(value);
        splash = true;
        return value
      }
      setlanguage("fr");
    } catch (error) {
    }
    return null; 
  };

  if(user_name==false) {_retrieveData("user");}
  if(user_name!==false && language==false) {_retrieveData_lang();}
  
  useEffect(()=>{if(user_name==false)  _retrieveData("user");splash = user_name!==false;})
   
  if(user_name===false && language==false) return(<SplashEl s={1}/>);
  const ChatComp = ({navigation})=>{return(<ChatbotEzz  user_name={user_name} language={language} navigation={navigation} setuser_name = {setuser_name} /> )}
  const TabComp = ({navigation})=><Tabcompenant key="chat" user_name={user_name} language={language} navigation={navigation} />
  const ArticleECom = ({navigation,route})=><ArticleElement  user_name={user_name} language={language} navigation={navigation} route={route} />
  const EditComp = ({navigation})=><Edit user_name={user_name} language={language} navigation={navigation} setlanguage={setlanguage} setuser_name = {setuser_name} _storeData={_storeData} />
  return(
    <>
    <StatusBar
        animated={true}
        backgroundColor="#1a86e7"
        barStyle={"default"}
        showHideTransition={true}
         />
      <NavigationContainer>
        <Stack.Navigator  >
            <Stack.Screen options={{headerShown: false}} name="Splach" component={Splash} />
            <Stack.Screen  name="Tab" component={TabComp}  options={{headerShown: false}}/>
            <Stack.Screen options={Chat_Option} name="Chat" component={ChatComp}  />
            <Stack.Screen options={art_Option} name="article" component={ArticleECom} />
            <Stack.Screen options={Edit_Option} name="Edit" component={EditComp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const Chat_Option = {
  headerShown: true,title: 'AOT bot',
  headerStyle: {backgroundColor: '#1a86e7',},
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const art_Option = {
  headerShown: true,title: 'Article',
  headerStyle: {backgroundColor: '#1a86e7',},
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const Edit_Option = {
  headerShown: true,title: 'Setting',
  headerStyle: {backgroundColor: '#1a86e7',},
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export default App;
