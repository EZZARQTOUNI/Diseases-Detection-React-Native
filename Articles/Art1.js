
import React, { useState,useEffect } from 'react'
import {Text,SafeAreaView, View,TouchableOpacity,StyleSheet,Dimensions,Image,ScrollView} from 'react-native';
import {ValueCheckbox,Symptom,Languages} from './Variable';
import ArticleImages from '../ArticleImages';


export default function Art1(){
    return(
        <View style={{ backgroundColor:'red' }}>
            <Text>
                There are at least a dozen advantages to obtaining an early and accurate diagnosis when cognitive symptoms are first noticed. These advantages result in a higher quality of life, less stress for family care partners, more time to treasure the present, and increased time for future planning.
            </Text>
            <View>
                <Text>1. Your symptoms might be reversible</Text>
                <Text>
                Potential symptoms may be caused by a condition that is reversible. If there is an underlying dementia such as Alzheimer’s disease, then diagnosis and treatment of reversible conditions can improve brain function and reduce symptoms.
                </Text>
            </View>
        </View>
    )
}