import React, {useState} from 'react'
import "./SearchAnswer.css"

const SearchAnswer = () => {
    const [database, setDatabase] = useState({
        PhysicalEducation: "an integral part of general education designed to promote the optimum development of the individual physically socially, emotionally, and mentally through total body movement in the performance of properly selected physical activities",
        PhysicalActivity: "a body movement that is produced by the contraction of skeletal muscles and that substantially increases energy expenditure.",
        Exercise: "a type of physical activity that requires planned, structured, and repetitive bodily movements to improve or maintain one or more components of physical fitness.",
        PhysicalFitness: "the ability of an individual to perform one’s daily task with vigor and alertness without undue fatigue, with reserve energy to attend to other tasks, with readiness to meet unforeseen emergencies, and with enough energy for leisure time activities.",
        WarmUp: "the preparation of the body physically and mentally for the conditioning bout. This means that the heart, lungs, and muscles are being set for an increased workload, an activity that is of higher intensity and which will last for about 5-15 minutes enough to produce slight sweat indicating that the body is ready for the activity/exercise proper. This also means lesser chances of injury occurrences while exercising.",
        CoolDown: "this is the period when the body tries to return to its normal or resting state. This may be the latter phase of the conditioning bout but done at a lower intensity level followed by light stretching exercises. This may take about 5-15 minutes, enough time for the body to prevent muscle soreness and stiffness, and blood pooling that may result to a person’s feeling of dizziness and faintness. This guide that will indicate that cooling down has served its purpose is if the heart rate is approxmately 100-110 bpm or even less.",
        Atherosclerosis: `accumulation of fatty plaques (fatty deposits, calcium, tissue debris) in the inner
        walls of the artery. This limits the flow of oxygen-rich blood to your organs and other parts of your
        body, which may eventually lead to a heart attack or stroke.`,
        CoronaryHeartDisease: `a condition where the heart is supplied with insufficient blood
        due to clogging of coronary arteries. Difficulty in breathing or shortness of breath, vomiting, and
        angina pectoris (chest pain) are some of the signs of this disease.`,
        Stroke:  `a disease when blood supply to the brain is reduced for a long period of time. Weakness
        of face, arm or leg on one side of the body, difficulty in speaking and walking are common
        symptoms.`,
        Hypertension: `is a condition where the blood pressure is chronically elevated. A borderline blood
        pressure is 140mmHg for the systolic BP (or when the heart contracts), and 90mmHg for the
        diastolic BP (or when the heart relaxes).`,
        NormalBloodPressure: `is 120/80. This means a systolic reading of less than 120 and a diastolic
        reading of less than 80.`,
        ElevatedBloodPressure: `is a systolic reading of 120 to 129 and a diastolic reading of less than 80.`,
        Stage1HighBloodPressure: `is a systolic reading of 130 to 139 or a diastolic reading between 80 and
        89.`,
        Stage2HighBloodPressure: `is a systolic reading of 140 or higher or a diastolic reading of 90 or
        higher.`,
        Speed: `the ability of an individual to move from one point to another in one direction within the shortest time possible.`,
        Power: `referes to muscular power, which is the ability to exert or apply a single maximum force within the shortest time possible.`,
        ReactionTime: `the length of time that an individual requires to respond to a stimulus.`,
        Coordination: `the ability to efficiently, effectively and simultaneously combine movements of several body parts, or simply harmonious functioning of body parts.`,
        Balance: `the ability of an individual to maintain equilibrium in relation to change in body position. Balance can be categorized into static and dynamic balance.`,
        StaticBalance: `involves equilibrium in a fixed position such as standing on one foot or on a balance beam.`,
        DynamicBalance: `refers to the maintenance of equilibrium while moving such as walking in a balance beam.`,
        Agility: `generally defined as the ability to change direction quickly and accurately.`,
        MuscularStrength: `ability of the muscle to exert or apply a single maximal force during contraction to overcome resistance.`,
        MuscularEndurance: `capacity of a muscle or muscle group to exert force repeatedly or to hold a contraction over a period of time.`,
        Flexibility: `functional capacity of the joints to move freely through a full range of motion (ROM). It involves the muscular system as well as the bones and joints. Lack of adequate flexibility has often been linked with low back pain as well as with muscle and joint injuries. Prevention of injuries and maintenance of body’s mobility can be improved through execution of stretching exercises.`,
        BodyComposition: `the proportion of fat and non-fat (bones, muscles, organs) in the body .`,
        CardiovascularEndurance: `the ability of the heart, lungs and blood vessels to supply oxygen and nutrients to the working muscles efficiently in order to sustain prolonged rhythmical exercises. It is also defined as the maximum amount of work an individual is capable of performing continuously where the work involves large muscle groups.`,
        Food: `is essentially the source of nutrients that are needed by the body to perform its basic functions.`,
        Nutrients: `are basically classified into 6 types (carbohydrates, fats, protein, vitamins, minerals, and water) where each has a specific function, and collectively they work together to contribute to good health. Simply, good health is characterized by striking a balance between proper nutrition and sufficient physical activity participation.`,
        FoodPyramid: `provides a visual image of the variety of foods that Filipinos should eat. The group that must be eaten the most includes rice, root crops, corn, noodles, breads and cereals and least are fats, oils and sugar. This food guide can help an individual choose a varied and balanced diet.`,
        Vegetables: `3 servings from food pyramid`,
        Milk: `1 glass from food pyramid`,
        MilkProducts: `1 glass from food pyramid`,
        Rice: `6-8 servings from food pyramid`,
        Grains: `6-8 servings from food pyramid`,
        WaterAndBeverages: `6-8 glasses from food pyramid`,
        Eggs: `1 piece`,
        SugarOrSweets: `5-6 tsps`,
        Fats: `6-8 tsps`,
        Oils: `6-8 tsps`,
        Seafoods: `2 1/2 servings`,
        Meat: `2 1/2 servings`,
        Poultry: `2 1/2 servings`,
        NutritionalGuidelinesForFilipinos: `- Eat a variety of foods everyday to get the nutrients needed by the body - Breastfeed infants exclusively from birth up to six months and then give appropriate complementary foods while continuing breastfeeding for two years and beyond for optimum growth and development - Eat more vegetables and fruits to get the essential vitamins, minerals, and fiber for regulation of body processes.`,
        Macronutrients: `nutrients that the body needs in large amount as they are the ones that provide energy to the body.`,
        Carbohydrate: `the chief source of energy in the Filipino diet. Each gram of carbohydrates yields 4 kcal. It is also the preferred energy source for most of the body’s functions. As long as carbohydrate is available to the body, certain body cells such as the nerve cells in the brain and retina, and the red blood cells depend exclusively on it for energy.`,
        Fat: `provides a concentrated source of food energy, providing 9 kcal per gram. It is also important component of body cells and helps absorb, transport and store the fat-soluble vitamins A, D, E and K. Other functions of fats include body insulation and padding from extreme temperature and shock, and provide palatability and satiety value to foods.`,
        Protein: `the body-building nutrient. Proteins are needed for growth and repair of body cells. No new living tissue can be built without it, for protein is a part of every living cell and every tissue. They are also essential components of enzymes and hormones needed for vital life processes such as digestion absorption and metabolism. Proteins also help produce antibodies to fight infection, maintenance of fluids and electrolyte balance and acid-base balance and transport of substance around the body. Protein provides some fuel to the body, yielding 4 kcal per gram.`,
        Micronutrients: `nutrients that the body needs in small amount`,
        Vitamins: `Vitamins in food occur in much smaller quantities than the macronutrients. They are the regulators or facilitators of body processes. Certain vitamins assume antioxidant functions (vitamin C, E and beta-carotene) that may help protect cell membranes. Furthermore, vitamin D acts as a hormone. The human body needs an adequate supply of 13 vitamins --- fat-soluble vitamins A, D, E and K and water-soluble vitamins C and B complex.`,
        Water: `constitutes the body’s fluid compartment that provides the medium in which all of the cell’s chemical reactions occur. Every cell in the body is bathed in fluid with the exact composition that is best for it. These special fluids regulate the functioning of cells. The entire system of cells and fluids remains in a delicate but firmly maintained state of dynamic equilibrium called homeostatis.`,
        Minerals: `just like vitamins, do not provide calories but are used as building blocks for body tissues such as bones, teeth, muscles and other organic structures. A number of minerals such as zinc, iron, and copper are components of enzymes known as metalloenzymes, which are involved in the regulation of metabolism. In addition, muscle contraction, nerve impulse conduction, normal heart rhythm, blood clotting, maintenance of body water balance, blood acid-base balance are some physiological processes regulated or maintained by minerals.`,
        ThreeBasicEnergySystems: `Immediate or Explosive -Anaerobic -Aerobic`,
        Training: `is a systematic method of physical conditioning. It follows a systematic process of repetitive, and progressive exercise of work, as well as guidelines in doing a physical activity.`,
        IndividualDiffirences: `Performers respond differently to the same training. This is due to factors such as age, sex, the individual’s state of training, the characteristics that athletes have inherited from their parents/genetic, their personal commitment, their level of physical and mental maturity. No two individuals are exactly alike. All individuals have different performances, fitness attributes, lifestyles, nutritional preferences, and they respond to exercise and its physical and social environments in their own unique way. It is therefore essential that the exercise programs cater to these individual needs and preferences to ensure attainment of fitness goals.`,
        Adaptation: `(aka. Use )Is the way the body responds to the training program. The parts of the body that are actively stressed during exercise adapt to those stresses, leading to an increase in performance.`,
        Use: `(aka. Use )Is the way the body responds to the training program. The parts of the body that are actively stressed during exercise adapt to those stresses, leading to an increase in performance.`,
        Overload: `Indicates that doing “more than the usual” is necessary if benefits are to occur. In order for the muscles (including the heart muscles) to get stronger, it must be overloaded or worked against a load greater than the usual. It relates to the Principle of Use/Adaptation in that your energy systems must be stressed beyond their normal levels of activity if they are to improve. For the body’s systems to make these adaptations, they must be overloaded. Just taking part in an activity will not cause any improvements in fitness, as the body will not be stressed to a greater extent than normal.`,
        OverloadFrequency: `(how often) it is the number of times one should exercise in a week. According to studies, for one to achieve something out of one’s physical fitness activity, one should exercise at least 3-4 times in a week. Increased frequency may be necessary for those training for competition.`,
        OverloadIntensity: `(how hard ) it is defined as the difficulty level or how vigorous and exercise should be. This is probably the most critical of the different factors that determine the amount of positive physical change to take place.`,
        OverloadTime: `aka Duration (how long) the length of time at which the exercise program is executed. An average work-out will last between 15-45 minutes to an hour. The intensity of an exercise is inversely proportional to the duration. As the intensity increases, duration decreases and vice versa.`,
        OverloadType: `the type of activity or exercise which in general are focused on cardio and resistance training.`,
        Progression: `As one reaches his fitness potential, the rate of improvement begins to plateau. Hence, the overload imposed on an athlete must be progressive.
        In the initial stage of training, the habitually sedentary individuals should have a mild to moderate entry into the program. As the body begins to adapt to the exercise routine, the intensity, duration, and or frequency may be increased so as to keep up with the improvement of the body.`,
        Reversibility: `The adaptation that take place as a result of training are all reversible. Adaptation to endurance training can be lost more quickly than it takes to achieve them while strength gains are lost more slowly. The principle of reversibility is another way of stating the principle of disuse. If your energy systems are not utilized, it deteriorates to a level congruent to your level of activity. It indicates that disuse or inactivity results in loss of benefits achieved in overloading.`,
        Disuse: `The adaptation that take place as a result of training are all reversible. Adaptation to endurance training can be lost more quickly than it takes to achieve them while strength gains are lost more slowly. The principle of reversibility is another way of stating the principle of disuse. If your energy systems are not utilized, it deteriorates to a level congruent to your level of activity. It indicates that disuse or inactivity results in loss of benefits achieved in overloading.`,
        Specificity: `In order for a training program to be effective it must be specific for the sport and position of the performer. It indicates that you must train a specific energy system and a specific muscle or muscle groups in order for the desired improvement to occur.`,
        MetabolicSpecificity: `involves training a specific energy system.`,
        NeuromuscularSpecificity: `involves a training specific muscle or muscle group.`,
        Recovery: `refers to the amount of time the body should be allowed to rest and recover from fatigue before the next activity begins.
        It is during the recovery session that adaptation to training takes place. Recovery sessions may not necessary mean complete rest. Periods of lower intensity activity will allow the body to adapt without increasing the stress placed on it. These periods are excellent opportunities for work on technique and tactics.`,
        Variation: `Refers to the need of the body to undergo changes. If training programs are repetitious, athletes can soon become bored and lose their motivation.`,
        TimePattern: `Exercises should be done anytime of the day when it is convenient for the individual and it should be governed by the preference and the timetable of the individual.
        Note: Exercising one (1) or two (2) hours after a heavy meal is not advised because it may result to indigestion. Digestion takes place one to two hours after a heavy meal, where blood and oxygen is needed for good digestion. If an individual exercises at this time, the exercised muscles will also demand more blood and oxygen supply. As a result, the blood and oxygen needed for digestion will not be enough, thus, indigestion may likely be experienced.`,
        Frequency: `is a number of times an individual should exercise in a week.`,
        Intensity: `is the difficulty level of the exercise.`,
        Time: `is the duration of the exercise.`,
        Type: `is the mode of exercise.`,
        Fitt: `exercise prescription to help participants understand how long and how hard they should exercise. FITT is acronym that stands for Frequency, Intensity, Time, and Type. FITT can be applied to exercise in general or specific components of exercise.`,
        CardioRespiratoryEndurance: `Also referred to as cardiovascular fitness, cardio-respiratory fitness or aerobic fitness is an essential component of both physical fitness and all-around good health. Specifically, cardio-respiratory endurance refers to the ability of the heart, lungs and circulatory system to deliver oxygen to working muscles for sustained periods of time. A cardio-respiratory endurance training program should include activities that elevate the heart rate and involve the body's large muscle groups.`,
        HeartRate: `is the speed of the heartbeat measured by the number of contractions of the heart per minute (bpm). The heart rate can vary according to the body's physical needs, including the need to absorb oxygen and excrete carbon dioxide. It is usually equal or close to the pulse measured at any peripheral point. Activities that can provoke change or influence heart rate include physical exercise, sleep, anxiety, stress, illness, being a smoker, and ingestion of drugs.`,
        ApicalSite: `This is taken at the apex of the heart and can sometimes be felt very clearly by placing the heel of the hand over the left side of the chest.`,
        CarotidPulseSite: `This pulse is taken from the carotid artery just beside of the larynx using light pressure from the fingertips of the first two fingers, not the thumb.`,
        RadialPulseSite: `The pulse is taken from the radial artery at the wrist, in line with the thumb, using the fingertips of the first two fingers.`,
        TemporalPulseSite: `This pulse can sometimes be obtained from the left or right temple with light pressure from the fingertips of the first two fingers.`,
        TargetHeartRate: `is the minimum number of heartbeats in a given amount of time in order to reach the level of exertion necessary for cardiovascular fitness, specific to a person's age, gender, or physical fitness. This is a simple way of determining whether an individual is exercising to a level that is beneficial to him/her.`,
        NormalRestingHeartRate: `The normal resting heart rate is 72 bpm, while resting rates of 50 to 85 bpm are common, and that people with regular physical activity will have lower resting heart rates than people who do no regular physical activity (Corbin, et al, 2004). A well-trained athlete might have a normal resting heart rate closer to 40 beats per minute.`,
        RestingHeartRate: `To get the Resting Heart Rate (RHR), it is recommended that an individual will take his/her heart rate for one minute as soon as he/she wakes up in the morning. This is the period where the individual is said to have had enough rest. To be more accurate, the RHR must be taken for 3 consecutive mornings where the average must be computed.`,
        MaximalHeartRate: `HR max may be determined from either a maximal stress test or the age adjusted maximal heart rate formula (age-predicted Maximal Heart Rate = 220 - age [years]).
        Example: Age is 20 years old
        Using the age-adjusted formula of 220-age, the MHR is 200 bpm.`,
        DesiredIntensityLevel: `The desired intensity level depends on the fitness level of an individual. When an individual wants to ensure that the intensity of the exercise fits his/her level of fitness, it is best to be guided to avoid over/under exercise. Overexercise may result to injuries, while underexercise is not being able to maximize the benefit that one gets with the time allotted for exercising.`,
        DesiredIntensityLevelTable: `The table above shows that an average individual, whose HRrest is from > 80 bpm, is suggested to aim for only 60% intensity level. As the individual gets adapted to the activity, then he/she may gradually increase the intensity level (level of movement execution such as fast movement can increase the heart beat faster than slower movements) to 65% or 70%.`,
        TargetHeartRateZone: `is the level at which your heart is being exercised and conditioned but not overworked. Usually, the 60% and 80% of one’s MHR. If you are unfit or just beginning an exercise program, aim for the lower end of your target heart rate zone. Then, gradually build up the intensity. If you are fit and healthy and want to exercise at a vigorous intensity, opt for the higher end of the zone.`,
        Zone: `means the range at which your heart rate should be while you are doing your exercise.`,
        RecoveryHeartRate: `Recovery heart rate is a pulse measurement that is taken immediately following an intense exercise. This is used in a number of fitness tests to evaluate the heart's ability to recover from exercise. The recovery heart rate may be used to estimate an exerciser's fitness level.`,
        StaticStretching: `Static stretching is most often recommended for general fitness. With this type, you slowly ease into the position and hold for 10 to 30 seconds before slowly releasing the stretch. Static stretching should be performed with warm muscles, such as after a warm-up or at the end of a workout. There are two forms of static stretching.`,
        ActiveStatic: `This form of stretching is used in yoga and martial arts. The stretch is held by the strength of agonist muscles (muscles responsible for the movement). Think of the stretch across the upper body during the Warrior II pose in yoga. Your arms are extended as your back, chest, and shoulders are stretched. The muscles of the arms and shoulders are the agonist muscles that allow you to hold this stretch.`,
        PassiveStatic: `During this type of stretching, you hold the limb to perform the stretch without any assistance such as a bar or bands. Think of a standing quadriceps stretch in which you bend your leg behind you and hold the foot, pulling the heel in close to your bottom, which stretches the front of the upper thigh.`,
        DynamicStretching: `Dynamic stretching is stretching with movement. The body transitions gradually into a position and this movement is repeated as you increase your reach and range of motion. If you have ever taken a group exercise class, you have likely engaged in dynamic stretching. Movements such as alternating knee lifts repeatedly stretch the hamstrings while keeping the body in motion. Research has found that dynamic stretching is less beneficial than static stretching for increasing range of motion, but unlike static stretching, it is ideal during the pre-workout phase because it gently warms muscles while also stretching them.`,
        PnfStretching: `PNF stands for Proprioceptive Neuromuscular Facilitation. This type of stretching is often referred to as partner stretching because two people are needed to perform the movements. There are many forms of PNF, but most involve an isometric hold followed by a static stretch of the same muscle group. An example of PNF is a hamstring stretch where one person lies on her back with the right leg extended straight up into the air. The second person grasps the ankle and gently presses the leg towards the other person’s head to stretch the hamstring. The pressure is released and then the stretch is repeated. While PNF is as effective as static stretching for improving range of motion, it is less practical because of the necessity of a partner. It is most often used in clinical and fitness settings for training and rehabilitation.`,
        BallisticStretching: `This type of stretching uses bouncing movements to create momentum which moves the muscle into the stretch. For example, instead of holding a hamstring stretch you would quickly reach towards your toes and release repeatedly in short bursts of movement. Fitness trainers have long been warned about the dangers of ballistic stretching because it can cause a stretch reflex that injures the muscle. Current recommendations from the ACSM state that ballistic stretching can improve flexibility as well as static stretching when it is performed properly. It is best considered for those participating in ballistic exercises such as basketball and other athletics.`
    })

    const [keyword, setKeyword] = useState('');
    const [details, setDetails] = useState('');
    const [result, setResult] = useState('No result');
    const [sentenceLength, setSentenceLength] = useState(1);

    function capitalizedKeywords() {
        const capitalizedKeyword = keyword.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).toString()

        return capitalizedKeyword.replace(/[,]+/g, "")
    }

    const handleSearch = () => {
        const capitalizedKeyword = capitalizedKeywords();
        if (database.hasOwnProperty(capitalizedKeyword)) {
            return setResult(database[capitalizedKeyword].split(".").slice(0, sentenceLength));
        } else {
            if (details !== '') {
                return checkDetails()
            }
            setResult("No keyword found. Try again.")
            clearInputs()
        }
    }

    const checkDetails = () => {
        let key;
        Object.values(database).find(desc => {
            if (desc.indexOf(details) >= 0) {
                key = Object.keys(database).find(k=>database[k]===desc)
            }
        })
        setResult(key)
    }

    const clearInputs = () => {
        const keywordInput = document.querySelectorAll(".searchAnswerInput")
        Array.from(keywordInput).forEach(input => {
            input.value = '';
        })
    }


    return (
        <div className="searchAnswerContainer">
            <div className="searchAnswerOptionsContainer">
                <select 
                    className="searchAnswerOptions"
                    onChange={(e) => setSentenceLength(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Keyword"
                    className="searchAnswerInput"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Details"
                    className="searchAnswerInput"
                    onChange={(e) => setDetails(e.target.value)}
                />
                <button
                    onClick={() => handleSearch()}
                >Search</button>
            </div>

            <div className="topicSentenceContainer">
                <p className="topicSentence">{result}</p>
            </div>
        </div>
    )
}

export default SearchAnswer
