
var ValueCheckbox=['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze']

/**************************************/
var Symptom=[];
Symptom["en"]=["itching", "skin rash", "nodal skin eruptions", "continuous sneezing", "shivering", "chills", "joint pain", "stomach pain", "acidity", "ulcers on tongue", "muscle wasting", "vomiting", "burning micturition", "spotting  urination", "fatigue", "weight gain", "anxiety", "cold hands and feets", "mood swings", "weight loss", "restlessness", "lethargy", "patches in throat", "irregular sugar level", "cough", "high fever", "sunken eyes", "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish skin", "dark urine", "nausea", "loss of appetite", "pain behind the eyes", "back pain", "constipation", "abdominal pain", "diarrhoea", "mild fever", "yellow urine", "yellowing of eyes", "acute liver failure", "fluid overload", "swelling of stomach", "swelled lymph nodes", "malaise", "blurred and distorted vision", "phlegm", "throat irritation", "redness of eyes", "sinus pressure", "runny nose", "congestion", "chest pain", "weakness in limbs", "fast heart rate", "pain during bowel movements", "pain in anal region", "bloody stool", "irritation in anus", "neck pain", "dizziness", "cramps", "bruising", "obesity", "swollen legs", "swollen blood vessels", "puffy face and eyes", "enlarged thyroid", "brittle nails", "swollen extremeties", "excessive hunger", "extra marital contacts", "drying and tingling lips", "slurred speech", "knee pain", "hip joint pain", "muscle weakness", "stiff neck", "swelling joints", "movement stiffness", "spinning movements", "loss of balance", "unsteadiness", "weakness of one body side", "loss of smell", "bladder discomfort", "foul smell of urine", "continuous feel of urine", "passage of gases", "internal itching", "toxic look (typhos)", "depression", "irritability", "muscle pain", "altered sensorium", "red spots over body","belly pain", "abnormal menstruation", "dischromic  patches", "watering from eyes", "increased appetite", "polyuria", "family history", "mucoid sputum", "rusty sputum", "lack of concentration", "visual disturbances", "receiving blood transfusion", "receiving unsterile injections", "coma", "stomach bleeding", "distention of abdomen", "history of alcohol consumption", "fluid overload", "blood in sputum", "prominent veins on calf", "palpitations", "painful walking", "pus filled pimples", "blackheads", "scurring", "skin peeling", "silver like dusting", "small dents in nails", "inflammatory nails", "blister", "red sore around nose", "yellow crust ooze"];
Symptom["fr"]=["démangeaisons", "éruptions cutanées", "éruptions cutanées nodales", "éternuements continus", "frissons", "frissons", "douleurs articulaires", "douleurs à l'estomac", "acidité", "ulcères sur la langue", "muscles émaciation "," vomissements "," mictions brûlantes "," repérage de la miction "," fatigue "," prise de poids "," anxiété "," mains et pieds froids "," sautes d'humeur "," perte de poids "," agitation " , "léthargie", "plaques dans la gorge", "taux de sucre irrégulier", "toux", "forte fièvre", "yeux enfoncés", "essoufflement", "transpiration", "déshydratation", "indigestion", "mal de tête" , "peau jaunâtre", "urine foncée", "nausée", "perte d'appétit", "douleur derrière les yeux", "mal de dos", "constipation", "douleur abdominale", "diarrhée", "fièvre légère" , "urine jaune", "jaunissement des yeux", "insuffisance hépatique aiguë", "surcharge liquidienne", "gonflement de l'estomac", "gonflement des ganglions lymphatiques", "malaise", "vision trouble et déformée", "mucosités", "irritation de la gorge", "rougeur des yeux", "pression des sinus", "écoulement nasal", "congestion", "douleur thoracique", "faiblesse des membres", "rythme cardiaque rapide", "douleur lors de l'arc l mouvements "," douleur dans la région anale "," selles sanglantes "," irritation de l'anus "," douleur au cou "," étourdissements "," crampes "," ecchymoses "," obésité "," jambes enflées "," enflées vaisseaux sanguins "," gonflement du visage et des yeux "," hypertrophie de la thyroïde "," ongles cassants "," gonflements des extrémités "," faim excessive "," contacts extra-conjugales "," sécheresse et picotements des lèvres "," troubles de l'élocution "," douleur au genou "," douleur à l'articulation de la hanche "," faiblesse musculaire "," raideur de la nuque "," gonflement des articulations "," raideur des mouvements "," mouvements de rotation "," perte d'équilibre "," instabilité "," faiblesse d'un corps côté "," perte d'odeur "," inconfort de la vessie "," mauvaise odeur d'urine "," sensation continue d'urine "," passage de gaz "," démangeaisons internes "," aspect toxique (typhos) "," dépression " , "irritabilité", "douleurs musculaires", "sensorium altéré", "taches rouges sur le corps", "douleurs au ventre", "règles anormales", "plaques dischromiques", "larmoiement des yeux", "augmentation de l'appétit", "polyurie "," antécédents familiaux "," crachats mucoïdes "," crachats rouillés "," manque de concentration "," troubles visuels "," recevant une transfusion sanguine "," recevant des injections non stériles "," coma "," saignements d'estomac "," distension de l'abdomen "," antécédents de consommation d'alcool "," surcharge liquidienne "," sang dans les expectorations "," veines proéminentes sur le mollet " , "palpitations", "marche douloureuse", "boutons remplis de pus", "points noirs", "éraflure", "desquamation de la peau", "argent comme une poussière", "petites bosses dans les ongles", "ongles inflammatoires", "cloques" , "plaie rouge autour du nez", "suintement de croûte jaune"]

/**************************************/
var Languages=[];
Languages["ar"]=[];
Languages["en"]=[];
Languages["fr"]=[];

Languages["en"]["chatwithbot"]="Chat with our bot";
Languages["en"]["Headert1"]="A special application to detect diseases";
Languages["en"]["Headert2"]="AOT Detector";
Languages["en"]["Headerd1"]="Our application is especially intended to improve healthcare system for hospitals and medical examination by using AI technology.\nThe app is driven by machine learning algorithm that detects many kinds of diseases with the largest existing medical data and check up by patient’s attribute information.";
Languages["en"]["WebTitle"]="AOT Detector";
Languages["en"]["btnn_h"]="Start now";
Languages["en"]["Title_of_bot"]="Title bot,";
Languages["en"]["start_chat"]="Start the scan";
Languages["en"]["hi"]="Hi ";
Languages["en"]["whats_yourname"]="Hi what's your name ? ";
Languages["en"]["number_v"]="value must be a number";
Languages["en"]["done_or_more"]='Click "Done" when you finish or click "More" if you want to show more symptoms';
Languages["en"]["Done"]="Done";
Languages["en"]["More"]="More";
Languages["en"]["Mark_symptoms"]="Please mark the symptoms and we will process the data in order to diagnose your disease";
Languages["en"]["rep"]="start diagnose again";
Languages["en"]["wamin"]="wait a minute";
Languages["en"]["pmark"]="please mark symptoms";
Languages["en"]["homeappt"]="AOT Detector";
Languages["en"]["hi"]="Hi";
Languages["en"]["free"]="Free services";
Languages["en"]["Ai"]="Artificial intelligence";
Languages["en"]["our_service"]="Our Services";
Languages["en"]["free_d"]="All of our service is free, we don't need your money 🙂";
Languages["en"]["Ai_d"]="We use artificial intelligence to detect diseases as well as the latest technology 🤖";
Languages["en"]["homeTitl"]="is a 90% accurate disease prediction application that works by providing symptoms";
Languages["en"]["early"]="Early detection";
Languages["en"]["early_d"]="We help you to detect some diseases early by studying the data that you will provide to us (symptoms).";
Languages["en"]["Articles"]="Articles";


Languages["fr"]["chatwithbot"]="Discutez avec notre bot";
Languages["fr"]["Headert1"]="Une application spéciale pour détecter les maladies";
Languages["fr"]["Headert2"]="AOT Detector";
Languages["fr"]["Headerd1"]="Notre application est spécialement conçue pour améliorer le système de santé pour les hôpitaux et les examens médicaux en utilisant la technologie de l'intelligence artificielle. \nL'application est gérée par un algorithme d'apprentissage automatique qui détecte de nombreux types de maladies avec les plus grandes données médicales existantes et vérifie les informations sur les attributs du patient.";
Languages["fr"]["WebTitle"]="AOT Detector";
Languages["fr"]["btnn_h"]="Commencez maintenant";
Languages["fr"]["Title_of_bot"]="Title bot,";
Languages["fr"]["start_chat"]="Démarrez le scan";
Languages["fr"]["hi"]="Hi ";
Languages["fr"]["whats_yourname"]="Salut, quel est ton nom ?";
Languages["fr"]["number_v"]="la valeur doit être un nombre";
Languages["fr"]["done_or_more"]='Cliquez sur "Terminé" lorsque vous avez terminé ou cliquez sur "Plus" si vous souhaitez afficher plus de symptômes';
Languages["fr"]["Done"]="Terminé";
Languages["fr"]["More"]="Plus";
Languages["fr"]["Mark_symptoms"]="Veuillez marquer les symptômes et nous traiterons les données afin de diagnostiquer votre maladie";
Languages["fr"]["rep"]="recommencer le diagnostic";
Languages["fr"]["wamin"]="Attendez une minute";
Languages["fr"]["pmark"]="Veuillez marquer les symptômes";
Languages["fr"]["homeappt"]="AOT Detector";
Languages["fr"]["hi"]="Salut";
Languages["fr"]["free"]="Services gratuits";
Languages["fr"]["Ai"]="Intelligence artificielle";
Languages["fr"]["our_service"]="Nos services";
Languages["fr"]["free_d"]="Tous nos services sont gratuits, nous n'avons pas besoin de votre argent 🙂";
Languages["fr"]["Ai_d"]="Nous utilisons l'intelligence artificielle pour détecter les maladies ainsi que les dernières technologies 🤖";
Languages["fr"]["homeTitl"]="est une application de prédiction précise des maladies à 90% qui fonctionne en fournissant des symptômes";
Languages["fr"]["early"]="précoce détection ";
Languages["fr"]["early_d"]="Nous vous aidons à détecter précocement certaines maladies en étudiant les données que vous nous fournirez (symptômes).";
Languages["fr"]["Articles"]="Articles";
Languages["en"]["name"]="Name";
Languages["fr"]["name"]="Nom";
Languages["fr"]["Language"]="Langue";
Languages["en"]["Language"]="Language";
Languages["fr"]["save"]="Sauvegarder";
Languages["en"]["save"]="Save";
Languages["fr"]["N_d_T_I"]="Numéros de téléphone importants";
Languages["en"]["N_d_T_I"]="Important phone numbers";
Languages["fr"]["Sites_app"]="Sites et applications";
Languages["en"]["Sites_app"]="WebSites and applications";

Languages["en"]["Npro"]="You have a problem in your network ";
Languages["fr"]["Npro"]="Vous avez un problème dans votre réseau ";

Languages["en"]["Refresh"]="Refresh ";
Languages["fr"]["Refresh"]="Refresh ";


Languages["fr"]["const_us"]="Nous contacter";
Languages["en"]["const_us"]="Contact Us";

Languages["fr"]["our_w"]="Notre site Web";
Languages["en"]["our_w"]="Our Webiste";

Languages["en"]["article"]=[];
Languages["en"]["article"]["title"]=[];
Languages["en"]["article"]["desc"]=[];
Languages["en"]["article"]["title"]["1"]='advantages of early detection';
Languages["en"]["article"]["desc"]["1"]='There are at least a dozen advantages to obtaining an early and accurate diagnosis when cognitive symptoms are first noticed. These advantages result in a higher quality of life, less stress for family care partners, more time to treasure the present, and increased time for future planning.'
+
'\n\n\t1. Your symptoms might be reversible\n'
+'Potential symptoms may be caused by a condition that is reversible. If there is an underlying dementia such as Alzheimer’s disease, then diagnosis and treatment of reversible conditions can improve brain function and reduce symptoms.'
+'\n\n\t2. It may be treatable\n'
+'Some causes of cognitive decline are not reversible. However, they might be treatable. Appropriate treatment can stop or slow the rate of further decline.'
+'\n\n\t3. Time is of the essence\n'
+'Alzheimer’s and other dementia-causing diseases are typically most effective when started early in the disease process. An early and accurate diagnosis is crucial—especially as research leads to robust treatment options.'
+'\n\n\t4. Diagnoses are more accurate early in the disease process\n'
+'An accurate diagnosis is contingent upon a complete medical. The latter often is more easily obtained while the person is still able to answer questions and report concerns. Also, observers in early stages can still recall the order in which symptoms first appeared. Obtaining an accurate diagnosis can be difficult once most of the brain has become affected.'
+'\n\n\t5. An early diagnosis is empowering\n'
+'An earlier diagnosis enables the person to participate in their own legal, financial, and long-term care planning and to make their wishes known to family members.'
+'\n\n\t6. You can focus on what’s important to you\n'
+'An early diagnosis enables the person to prioritize how they spend their time—focusing on what matters most to them.'
+'\n\n\t7. You can make your best choices\n'
+'Early diagnosis can prevent choices that might otherwise be made in ignorance, such as moving far away from family and friends, or making legal or financial commitments that will be hard to keep as the disease progresses.'
+'\n\n\t8. Use the resources available to you\n'
+'Individuals diagnosed early in the disease process can take advantage of early-stage support groups and learn tips and strategies to better manage and cope with the symptoms.'
+'\n\n\t9. Participate or advocate for research\n'
+'Those diagnosed early can take advantage of clinical trials or advocate for more research and improved care and opportunities.'
+'\n\n\t10. You can further people’s understanding of the disease\n'
+'Early diagnosis helps to reduce the stigma associated with the disease. When we learn to associate the disease with people in the early stages, we understand they are still viable in the community.'
+'\n\n\t11. An early diagnosis will help your family\n'
+'An early diagnosis gives families more opportunities to learn about the disease, develop realistic expectations, and plan for their future together. Often, this process results in reduced stress and lessened feelings of burden and regret later in the disease process.'
+'\n\n\t12. The early diagnosis helps loved ones\n'
+'Early diagnosis allows the person and family to attribute cognitive changes to the disease rather than to personal failings —preserving the person’s dignity throughout the disease process.'
;


Languages["en"]["article"]["title"]["3"]='Benefits of Artificial Intelligence';
Languages["en"]["article"]["desc"]["3"]='Artificial Intelligence (AI) has been around for quite some time now. From quick suggestions on search engines and auto-focus in smartphones to robot greeters at shopping centers and vehicle cruise control, AI is increasingly becoming a part of our day-to-day lives. The scope for innovation and development in AI is enormous and it will continue changing the world in diverse ways in the future.\nBelow are the 10 most remarkable benefits of Artificial Intelligence that are helping to reshape the world that we know of today.'
+'\n\n\t1. Automation \n'
+'Automation is one of the most commonly cited benefits of AI technology, and it has had significant impacts on the communications, transportation, consumer products, and service industries. Automation not just leads to higher production rates and increased productivity in these sectors but also allows more efficient use of raw materials, improved product quality, reduced lead times, and superior safety. Automation can also help to free resources that can be used for more important things.'
+'\n\n\t2. Smart Decision Making \n'
+'Artificial Intelligence has always been used for making smarter business decisions. AI technology can coordinate data delivery, analyze trends, develop data consistency, provide forecasts, and quantify uncertainties to make the best decisions for the company. As long as AI is not programmed to imitate human emotions, it will remain unbiased on the matter at hand and will help to make the right decision to support business efficiency.'
+'\n\n\t3. Enhanced Customer Experience\n'
+'AI-powered solutions can help businesses to respond to customer queries and grievances quickly and address the situations efficiently. The use of chatbots that couple conversational AI with Natural Language Processing technology can generate highly personalized messages for customers, which helps to find the best solution for their needs. AI tools can also help to reduce the strain from the customer service staff, which will lead to better productivity.'
+'\n\n\t4. Medical Advances\n'
+'The use of Artificial Intelligence solutions in the healthcare sector is becoming increasingly popular these days. Remote patient monitoring technology, for instance, allows healthcare providers to perform clinical diagnoses and suggest treatments quickly without requiring the patient to visit the hospital in-person. AI can also be beneficial in monitoring the progression of contagious diseases and even predict their future effects and outcomes.'
+'\n\n\t5. Research and Data Analysis\n'
+'AI and Machine Learning technology can be used to analyze data much more efficiently. It can help to create predictive models and algorithms to process data and understand the potential outcomes of different trends and scenarios. Moreover, the advanced computing capabilities of AI can also speed up the processing and analysis of data for research and development, which could have taken too long for humans to review and understand.'
+'\n\n\t6. Solving Complex Problems\n'
+'The developments in AI technologies from basic Machine Learning to advanced Deep Learning models have made it capable to solve complex issues. From fraud detection and personalized customer interactions to weather forecasting and medical diagnosis, AI is helping businesses across industries to find the right solutions to address their challenges more adequately. Greater efficiency in solving complex problems means increased productivity and reduced expenses.'
+'\n\n\t7. Business Continuity\n'
+'Business forecasting using AI technology not only helps companies make critical decisions but also prepares them for any emergency to ensure business continuity. As risk management heavily relies on data management and analysis today, AI-powered tools can help organizations to respond to the crisis proactively. AI and Machine Learning can also create scenarios to help businesses plan for a speedy disaster recovery strategy.'
+'\n\n\t8. Managing Repetitive Tasks\n'
+'Performing recurring business tasks is not just time-consuming but it can also be monotonous and reduce the productivity of the employees over time. AI-powered Robotic Process Automation tools can automate interactions between different business systems and make the tiresome work easy for the company. It can imitate the actions of humans within the digital systems in the HR, IT, marketing, or sales departments to execute any business process quickly without needing any manual effort.'
+'\n\n\t9. Minimizing Errors\n'
+'Another great benefit of automating regular business tasks using AI tools is that it helps to reduce the chances of manual errors. As Robotic Process Automation tools take care of the data entry and processing jobs, it can make the digital systems more efficient and less likely to run into or create any problems due to data processing mistakes. This can be especially beneficial for businesses that cannot afford to make even the slightest of errors.'
+'\n\n\t10. Increased Business Efficiency\n'
+'Artificial Intelligence can help to ensure 24-hour service availability and will deliver the same performance and consistency throughout the day. Taking care of repetitive tasks will not make AI tools get tired or bored either. This can help to improve the efficiency of the business and reduce the stress on the employees, who can be re-assigned to perform more complex business tasks that require manual intervention.';

Languages["en"]["article"]["title"]["2"]='Symptoms of COVID-19';
Languages["en"]["article"]["desc"]["2"]='People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Anyone can have mild to severe symptoms. People with these symptoms may have COVID-19:'
+'\n\n\tFever or chills\n'
+'\n\n\tCough\n'
+'\n\n\tShortness of breath or difficulty breathing \n'
+'\n\n\tFatigue \n'
+'\n\n\tMuscle or body aches \n'
+'\n\n\tHeadache \n'
+'\n\n\tNew loss of taste or smell\n'
+'\n\n\tSore throat\n'
+'\n\n\tCongestion or runny nose\n'
+'\n\n\tNausea or vomiting\n'
+'\n\n\tDiarrhea\n\n'
+'This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.';

Languages["fr"]["article"]=Languages["en"]["article"];

export {ValueCheckbox,Symptom,Languages}