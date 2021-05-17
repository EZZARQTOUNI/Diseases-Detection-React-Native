import React, { useState,useEffect } from 'react'
import {Text,SafeAreaView,View,Image,Dimensions,TouchableOpacity,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ALertEzz from './ALertEzz';
import {Languages} from './Variable';
import { ScrollView } from 'react-native-gesture-handler';
import getWidth from './FonctionD';


const ElementService = (props) =>{
    const onClickelement = () =>{
        props.setshowalert(true);
        props.settitle(props.title);
        props.setdescription(props.description);
    }
   
    return(
        <TouchableOpacity onPress={()=>{onClickelement();}}  style={styles.elements}>
            {props.icon}                    
            <Text style={{ fontSize:14,margin:2 }}>{props.title_}</Text>
        </TouchableOpacity>
    );
}

const Home = (props)=>{
    const [showalert,setshowalert]=useState(false);
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const [language,setlanguage]=useState(props.language);
    const [user_name,setuser_name]=useState(props.user_name);
    
    useEffect(()=>{
        setlanguage(props.language);
        setuser_name(props.user_name);
    })
    useEffect(()=>{setlanguage(props.language);setuser_name(props.user_name)},[])
    return(
        <SafeAreaView style={styles.firtcontainer}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate("Chat")}} style={styles.chaticon}>
                        <Ionicons name="md-paper-plane" size={30} color="#247be4"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate("Edit")}} style={styles.seticon}>
                        <Ionicons name="settings" size={30} color="#247be4"/>
                    </TouchableOpacity>
                    <View style={styles.scecondcontainer}>
                        <Text style={styles.title}>{Languages[language]["hi"]} {user_name===true ? 'User':user_name} 👋</Text>
                    </View>
                    <View style={{ overflow:'hidden',height:getWidth()/1.7,marginTop:15}}>
                        <LinearGradient start={{ x: 0.6, y: 0.5 }} colors={['#049af5','#247be5']} style={styles.linearGradient}>
                            <Image
                                style={styles.doctor_img}
                                source={require('./Images/doctor.png')}
                            />
                            <View style={{ width:'50%', }}>
                                <Text style={styles.titleapp}>{Languages[language]["homeappt"]} </Text>
                                <Text style={{ color:'#ffffffb0',fontSize:15, }}>{Languages[language]["homeTitl"]}  </Text>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                
                <View>
                    <Text style={styles.title2} >{Languages[language]["our_service"]}</Text>
                    <View style={{ zIndex:2,marginTop:10,paddingBottom:120,flexDirection:'row',justifyContent:'space-around',paddingBottom:120 }}>
                        <ElementService  title_={Languages[language]["early"]} icon={Icon_1} title={Languages[language]["early"]} description={Languages[language]["early_d"]} setshowalert={setshowalert} settitle={settitle} setdescription={setdescription} key={1+'Portrait'} />
                        <ElementService  title_={Languages[language]["free"]} icon={Icon_2} title={Languages[language]["free"]} description={Languages[language]["free_d"]} setshowalert={setshowalert} settitle={settitle} setdescription={setdescription} key={2+'Portrait'}  />
                        <ElementService  title_={Languages[language]["Ai"]} icon={Icon_3} title={Languages[language]["Ai"]} description={Languages[language]["Ai_d"]} setshowalert={setshowalert} settitle={settitle} setdescription={setdescription} key={3+'Portrait'} />
                    </View>
                </View>
            </ScrollView>
            <ALertEzz title={title} description={description} show={showalert} setshwo={setshowalert}  />
        </SafeAreaView>
    )
}
const Icon_1=<FontAwesome5 name="heartbeat" size={45} color={'#0598f4'} />
const Icon_2=<Entypo name="creative-commons-noncommercial-us" size={45} color={'#0598f4'} />
const Icon_3=<FontAwesome5 name="robot" size={45} color={'#0598f4'} />

const styles =({
    doctor_img:{
        width:getWidth()/2,
        height:getWidth()/1.5,
        position:'absolute',
        top:getWidth()/2-getWidth()/1.7,
        left:0
    },
    linearGradient:{
        marginLeft:getWidth()/15,
        marginRight:getWidth()/15,
        borderRadius:getWidth()/15,
        height:getWidth()/2-10,
        marginTop:-getWidth()/2+getWidth()/1.7+10,
        position:'relative',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    titleapp:{ 
        color:'#fff',
        fontSize:19,
        fontWeight:'bold',
        marginBottom:5 
    },
    title : { 
        fontSize:31,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        color:'#132b53' 
    },
    firtcontainer : { 
        backgroundColor:'#fbfaff',
        width:'100%',
        height:'100%',
    },
    scecondcontainer : { 
        paddingLeft:40,
        paddingTop:65
    },
    title2 : {
        marginLeft:20,
        fontSize:22,
        fontWeight:'bold',
        color:'#424242',
        margin:5,
        marginTop:20
    },
    elements : {
        zIndex:2,
        width:getWidth()/3.5,
        height:getWidth()/3.5,
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
        maxWidth:150,
        maxHeight:150,
        alignItems:'center',
        justifyContent:'center'
    },
    chaticon : { 
        backgroundColor:'#fff',
        margin:10,
        position:'absolute',
        padding:8,
        borderRadius:400,
        shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:10,
        right:5,
        top:10,
        zIndex:2
    },
    seticon : { 
        backgroundColor:'#fff',
        margin:10,
        position:'absolute',
        padding:8,
        borderRadius:400,
        shadowColor:'#247be3',
        shadowOffset:{
          width:2,
          height:10,
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:10,
        left:2,
        top:10,
        zIndex:2
    }

})

export default Home;