import React, { useState,useEffect } from 'react'
import {ScrollView,Text,SafeAreaView,View,Image} from 'react-native';
import {Languages} from './Variable';
import ArticleImages from './ArticleImages';

const ArticleElement = (props) =>{
    const [language,setlanguage]=useState(props.language);
    useEffect(()=>{setlanguage(props.language)});
    const itemId = props.route.params.id;
    useEffect(()=>{props.navigation.setOptions({ title: Languages[language]["article"]["title"][itemId] })})
    return(
        <SafeAreaView>
            <ScrollView style={{ backgroundColor:'#fff',minWidth:'100%',minHeight:'100%'}}>
                <View style={{ width:'100%',maxHeight:200 ,overflow:'hidden',justifyContent:'center',alignItems:'center' }}>
                    <Image source={ArticleImages[itemId]} style={{ width:'100%' }} />
                </View>
                <Text style={{ margin:10,fontSize:17, }}>
                    {Languages[language]["article"]["desc"][itemId]}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ArticleElement;