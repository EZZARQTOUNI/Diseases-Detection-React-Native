import React, { useState,useEffect } from 'react'
import {StyleSheet,} from 'react-native';
import { createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Info from './Info';
import Article from './Article';
import LinearGradient from 'react-native-linear-gradient';



const Tab= new createBottomTabNavigator();


const Tabcompenant = (props) =>{
  const [user_name,setuser_name]=useState(props.user_name);
  const [language,setlanguage]=useState(props.language);

  useEffect(()=>{setlanguage(props.language);setuser_name(props.user_name)});

  const HomeComp = () => <Home language={language} navigation={props.navigation} user_name={user_name} />
  const ArticleComp = () => <Article language={language} navigation={props.navigation}/>
  const InfoComp = () => <Info language={language} navigation={props.navigation} />

  return(
      
        <Tab.Navigator  
        tabBar={(props) => {
          return (
            <LinearGradient start={{ x: 0.6, y: 0.5 }} colors={['#049af5','#247be5']} style={styles.linearGradient}>
              <BottomTabBar
                {...props}
              />
            </LinearGradient>
          );
        }}
        tabBarOptions={{
                  activeTintColor:'#fff',
                  inactiveTintColor:'#ffffff66',
                  showLabel:false,
                  style: styles.bttmbar,                  

                }}>
              <Tab.Screen name="Home" component={HomeComp} options={{
                  tabBarLabel:"Home",
                  tabBarIcon:({color,size})=>{
                    return(<AntDesign name="home" size={size} color={color} />)
                  }
                }} />
                <Tab.Screen name="Map" component={ArticleComp} options={{
                  tabBarLabel:"Map",
                  tabBarIcon:({color,size})=>{
                    return(<Ionicons name='newspaper-outline' size={size}  color={color} />)
                  }
                }} />
                <Tab.Screen name="Info" component={InfoComp} options={{
                  tabBarLabel:"Info",
                  tabBarIcon:({color,size})=>{
                    return(<AntDesign name='questioncircleo' size={size}  color={color} />)
                  }
                }} />
        </Tab.Navigator>
  )
}

const styles=StyleSheet.create({
  linearGradient: {
    position:'absolute',
    bottom:20,
    
    height:70,
    borderRadius:15,
    shadowColor:'#247be3',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
   
    alignItems:'center',
    justifyContent:'center',
    left:20,
    right:20,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center'
  },
  bttmbar:{
    backgroundColor:'transparent',
    height:'100%',
    zIndex:20,
    height:100,
    borderRadius:15,
    position:'absolute',
    padding:20,
    height:120,
    position:'absolute',
    left:-15,
    right:-15,
    bottom:-15,    
  }
  
})
export default Tabcompenant;
