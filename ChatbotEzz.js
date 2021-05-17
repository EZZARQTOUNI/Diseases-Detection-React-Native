import React, { useState,useEffect, Component } from 'react'
import {Text,View,  TouchableOpacity,} from 'react-native';
import {ValueCheckbox,Symptom,Languages} from './Variable';
import { Checkbox } from 'react-native-paper';
import ChatBot from 'react-native-chatbot';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage'
import {DotIndicator,} from 'react-native-indicators';

var x=0,y=0;
var diese="Some thing wrog";
var sym="";
var disable=false;

const getDisable = () =>{return disable;}
const DieaseComp = ()=>{
  return(
    <Text>{diese} </Text>
  )
}

const SendDataCl = (props)=>{
  
  const [resp,setresp]=useState(false);
  const [conx,setconx]=useState(true);
  const [die,setdie]=useState('');
  const CheckNetwork = NetInfo.fetch().then(state => {
    var x=true;
    if(resp!==true && state.type=="none" ) {x=false;setconx(false);setTimeout(() => {setresp(false);},400) }
    if(resp!==true && !state.isConnected && x ) {x=false;setconx(false); setTimeout(() => {setresp(false);},400) }
    if(resp!==true && x )  
    
      setTimeout(() => {
        if(resp!==true && x )   {setconx(false);setresp(false);}
      }, 20000);
  });
  const getData = async() =>{
    disable=true;
    CheckNetwork;
    response = await fetch("https://testsoufyane.trackiness.com/medcine/api/getDiease?Symptom="+sym);
    if (!response.ok) {
      CheckNetwork;
    }
    diese = await response.json();
    if(diese!=null && diese!="Some thing wrog" ){setdie(diese);
      setresp(false);}
           
  }
  const _refresh = () =>{
    setresp('__');
    setconx(true);
    getData();
  }
  if(resp!==true) getData();
    
    if(die!='') return(<Text style={{ color:"#fff" }}>{die}</Text>)
    if(conx===false && resp==false )return(
    <>
      <Text>{ Languages[props.language]["Npro"]} </Text>
      <View style={{ zIndex:999,paddingTop:3 }}>
      <TouchableOpacity onPress={()=>{_refresh()}} style={{ alignItems:'center',zIndex:999,justifyContent:'center',height:22,marginLeft:5,borderWidth:1,borderRadius:4,borderColor:"#fff",paddingLeft:2,paddingRight:2,backgroundColor:'#fff',marginTop:5,marginBottom:-5}} >
        <Text style={{ color:"#0075ff" }}> { Languages[props.language]["Refresh"]}</Text>
      </TouchableOpacity>
      </View>
    </>
    )
    return(
      <View style={{ alignSelf:'center',alignItems:'center',justifyContent:'center',paddingTop:5 }}>
        <DotIndicator color="#fff" count={3}size={5}  />
      </View>
    )
  
}
const SendDataComp = (props) =>{
  return(<SendDataCl language={props.language}  />)
}
const CheckEZZ = (props) =>{
 
  const [checked,setchecked]=useState(false);
  const onChangeValue = () =>{
    if(getDisable()) return;
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
const is_emty=()=>{
  
  return sym.split(',').length==0;
}


const ChatbotEzz = (props) =>{
  sym="";
  disable=false;
  const [syms,setsyms]=useState(sym);
  const [First,setFirst]=useState(false);
  const [user_name,setuser_name]=useState(props.user_name);
  const [language,setlanguage]=useState(props.language);

  const _storeData = async (title,value) => {
    setuser_name(value);
    props.setuser_name(value);
    try {
      await AsyncStorage.setItem(title,value);
      
    } catch (error) {
    }
  };
  
  const ValueCo=({x,y})=>{
    return(
        <View >
            {
              ValueCheckbox.slice(x,y).map((e,i)=>{
              var s=Symptom[language].slice(x,y);
              return(
                <CheckEZZ key={e+"___"} value={e} label={s[i]} />
              )
              })
            }
          </View>
        )
  }
  const SendData = ({triggerNextStep})=>{
    const [send,setsend]=useState(false);
    useEffect(()=>{
      if(diese=="Some thing wrog" && send===false){
        setsend(true);
        
        var xhr = new XMLHttpRequest();
        var url = "https://testsoufyane.trackiness.com/medcine/api/getDiease?Symptom="+sym;
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload =  function () {
          if (xhr.readyState === xhr.DONE) {
              if (xhr.status === 200) {
                  console.log(xhr.response);
                
              }
          }
      };

      xhr.send(null);
      fetch(url).then(function(response) {
        return response.text().then(function(text) {
          diese=responseText;
          setsend(false);
          console.log(responseText)
          triggerNextStep({trigger:"diease"});
        });})
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          setsend(false);
            throw error;
          });


       
      }
    })
    return(Languages[language]["wamin"]);
  }
  useEffect(()=>{if(First===false){sym='';setFirst(true);setsyms('')};setsyms(sym);setlanguage(props.language);})
  return(
    <>
        <ChatBot 
        botBubbleColor='#0075ff'
        optionBubbleColor	='#0075ff'
        steps={[
                    {
                      id: '0',
                      options: [
                        { value: 0, label: Languages[language]["start_chat"], trigger: '1' },
                      ],
                    },
                    {
                      id: '1',
                      message: user_name!==true?Languages[language]["hi"]+" "+user_name:Languages[language]["whats_yourname"],
                      trigger: user_name!==true?'initialize':'name',
                    },
                    {
                      id: 'initialize',
                      message:Languages[language]["Mark_symptoms"],
                      trigger:'v-0'
                    },
                    {
                      id: 'name',
                      user:true,
                      trigger: 'initialize',
                      validator:(v)=>{
                        if (v.length<3) {
                          return Languages[language]["number_v"];
                        } 
                        _storeData('user',v)
                        return true;
                      }
                    },
                    {
                      id: 'v-0',
                      component:(<ValueCo key={x+y+"__"} x={0} y={10}/>),
                      trigger: '4',
                      asMessage: true
                    },
                    {
                      id: 'v-1',
                      component:(<ValueCo key={x+y+"__"} x={11} y={21}/>),
                      trigger: 'md-1',
                      asMessage: true
                    },
                    {
                      id: 'v-2',
                      component:(<ValueCo key={x+y+"__"} x={22} y={32}/>),
                      trigger: 'md-2',
                      asMessage: true
                    },
                    {
                      id: 'v-3',
                      component:(<ValueCo key={x+y+"__"} x={33} y={43}/>),
                      trigger: 'md-3',
                      asMessage: true
                    },
                    {
                      id: 'v-4',
                      component:(<ValueCo key={x+y+"__"} x={44} y={54}/>),
                      trigger: 'md-4',
                      asMessage: true
                    },
                    {
                      id: 'v-5',
                      component:(<ValueCo key={x+y+"__"} x={55} y={65}/>),
                      trigger: 'md-5',
                      asMessage: true
                    },
                    {
                      id: 'v-6',
                      component:(<ValueCo key={x+y+"__"} x={66} y={80}/>),
                      trigger: 'md-6',
                      asMessage: true
                    },
                    {
                      id: 'v-7',
                      component:(<ValueCo key={x+y+"__"} x={81} y={95}/>),
                      trigger: 'md-7',
                      asMessage: true
                    },
                    {
                      id: 'v-8',
                      component:(<ValueCo key={x+y+"__"} x={96} y={110}/>),
                      trigger: 'md-8',
                      asMessage: true
                    },
                    {
                      id: 'v-9',
                      component:(<ValueCo key={x+y+"__"} x={111} y={122}/>),
                      trigger: 'md-9',
                      asMessage: true
                    },
                    {
                      id: 'v-10',
                      component:(<ValueCo key={x+y+"__"} x={123} y={132}/>),
                      trigger: 'md-10',
                      asMessage: true
                    },
                    {
                      id: '4',
                      message:Languages[language]["done_or_more"],
                      trigger: 'md-0',
                      asMessage: true
                    },
                    {
                      id: 'md-0',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-1' },
                    ],
                    },
                    {
                      id: 'md-1',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-2' },
                    ],
                    },
                    {
                      id: 'md-2',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-3' },
                    ],
                    },
                    {
                      id: 'md-3',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-4' },
                    ],
                    },
                    {
                      id: 'md-4',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-5' },
                    ],
                    },
                    {
                      id: 'md-5',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-6' },
                    ],
                    },
                    {
                      id: 'md-6',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-7' },
                    ],
                    },
                    {
                      id: 'md-7',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-8' },
                    ],
                    },
                    {
                      id: 'md-8',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-9' },
                    ],
                    },
                    {
                      id: 'md-9',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                      { value: 2, label: Languages[language]["More"], trigger: 'v-10' },
                    ],
                    },
                    {
                      id: 'md-10',
                    options: [
                      { value: 1, label: Languages[language]["Done"], trigger: is_emty()? 'nodata':'done' },
                    ],
                    },
                    {
                      id:'done',
                      message: Languages[language]["wamin"],
                      trigger:'a-done',
                    },
                    {
                      id:'a-done',
                      waitAction:true,
                      component:(<SendDataComp language={language} />),
                      asMessage: true

                    },{
                      id:'nodata',
                      message: Languages[language]["pmark"],
                      trigger:'v-0',
                    },
                    {
                      id:'diease',
                      component:<DieaseComp/>,
                      asMessage: true,
                      trigger: 'repe' ,
                      end:true
                    },
                    {
                      id:'repe',
                      options:[
                        { value: 10, label: Languages[language]["rep"], trigger: 'initialize' },
                      ]
                    }
                  
                  ]}
        
        style={{ width:'100%',height:'100%' }} />
      </>
      
  )
}

export default ChatbotEzz;
