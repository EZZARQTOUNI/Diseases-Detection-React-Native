import React, { useState,useEffect } from 'react'
import {Text,SafeAreaView, View,TouchableOpacity,StyleSheet,Dimensions,Image,ScrollView} from 'react-native';
import {Languages} from './Variable';
import ArticleImages from './ArticleImages';


const getWidth = ()=>{
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width?dim.width:dim.height;
}


const ElementService = (props) =>{
    const onClickelement = () =>{
        props.navigation.navigate('article', {id:props.id })
    }
    const [language,setlanguage]=useState(props.language);

    useEffect(()=>{setlanguage(props.language)});
    return(
        <TouchableOpacity onPress={()=>{onClickelement();}}  style={styles.elements}>
            <View style={styles.ImagContainer} >
                <Image source={ArticleImages[props.id]} style={styles.images} />
            </View>
            <View style={{ flexShrink:1,height:'100%',overflow:'hidden'}}>
            <Text style={{ fontSize:22,margin:2,fontWeight:'bold',color:'#424242',}}>{Languages[language]["article"]["title"][props.id]}</Text>
            <Text style={{ fontSize:17,margin:2,color:'#0000005e',}}>
                {Languages[language]["article"]["desc"][props.id]}
            </Text>
            </View>
        </TouchableOpacity>
    );
}

const Article = (props)=>{
    const [language,setlanguage]=useState(props.language);

  useEffect(()=>{setlanguage(props.language)});
    return(
        <SafeAreaView style={styles.firtcontainer}>
           <ScrollView>
                <Text style={styles.title2} >{Languages[language]["Articles"]} </Text>
                <View style={{ zIndex:2,marginTop:10,paddingBottom:100, width:'100%' }}>
                    <ElementService  language={props.language} id="1" navigation={props.navigation} />
                    <ElementService  language={props.language} id="2" navigation={props.navigation} />
                    <ElementService  language={props.language} id="3" navigation={props.navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title2 : {
        marginLeft:20,
        fontSize:24,
        fontWeight:'bold',
        color:'#424242',
        margin:5,
        marginTop:30
    },
    elements : {
        zIndex:2,
        overflow:'hidden',
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        maxHeight:140,
        alignItems:'center',
        justifyContent:'center',
        margin:15,
        padding:10,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    firtcontainer : { 
        backgroundColor:'#fbfaff',
        width:'100%',
        height:'100%',
    },
    images:{
        width:'110%',
        height:'110%'
    },
    ImagContainer:{
        width:getWidth()/3.5,
        height:getWidth()/3.5,
        overflow:'hidden',
        margin:5,
        maxWidth:170,
        maxHeight:170,
        shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        maxHeight:170,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        flexShrink:0,
        flexGrow:0,flexBasis:'auto'
    }
})

export default Article;