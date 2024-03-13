import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Switch } from 'react-native-switch';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='transparent' />

      <Image
        source={require('./assets/images/Bedroom.png')}
        style={styles.image}
      />

    <View style={{
        position: 'absolute',
        top: "5%",
        left: "5%",
        right: "5%",
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
        <Text style={{
          fontSize: 24,
          fontWeight: 'normal',
          color: '#FFFFFF'
        }}>Bedroom</Text>
        <Feather name="bell" size={24} color="white" />
      </View>

      <View style={styles.cardConteiner}>

        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.percent}>36%</Text>
            <Ionicons name="water-outline" size={24} color="white" />
          </View>

          <Text style={styles.extra}>Humidifier Air</Text>

            <View style={{ width: '100%', height: 1, backgroundColor: '#393535', position: 'absolute', bottom: 75, left: "15%", right: "5%" }}></View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 30, width: '100%', left: "15%" }}>
              <Text style={{ fontSize: 14, fontWeight: '100', color: '#A4A4A4'}}>{isEnabled ? 'On' : 'Off'}</Text>
              <Switch 
              value={isEnabled}
              onValueChange={setIsEnabled}
              backgroundActive={'#FFB267'}
              backgroundInactive={'gray'}
              circleActiveColor={'#282424'}
              circleInActiveColor={'#000000'}
              activeText={''}
              inActiveText={''}
              />
            </View>
        </View>

        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.percent}>73%</Text>
            <Entypo name="air" size={24} color="white" />
          </View>

          <Text style={styles.extra}>Purifier Air</Text>

            <View style={{ width: '100%', height: 1, backgroundColor: '#393535', position: 'absolute', bottom: 75, left: "15%", right: "5%" }}></View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 30, width: '100%', left: "15%" }}>
              <Text style={{ fontSize: 14, fontWeight: '100', color: '#A4A4A4'}}>{isEnabled2 ? 'On' : 'Off'}</Text>
              <Switch 
              value={isEnabled2}
              onValueChange={setIsEnabled2}
              backgroundActive={'#FFB267'}
              backgroundInactive={'gray'}
              circleActiveColor={'#282424'}
              circleInActiveColor={'#000000'}
              activeText={''}
              inActiveText={''}
              />
            </View>
        </View>

      </View>

      <View style={styles.secondCardConteiner}>

        <View style={{ flexDirection: 'column', width: "100%"}}>
          <Text style={styles.extra2}>Main light</Text>

          <View>
            <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Slider
                style={{width: "93%", height: 40}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFA64D"
                maximumTrackTintColor="#393637"
                thumbImage={require('./assets/images/thumb.png')}            
                value={75}
              />

            <Entypo name="light-down" size={24} color="white" />
          </View>
        </View>

        </View>

        <View style={{ flexDirection: 'column', width: "100%"}}>
          <Text style={styles.extra2}>Floor lamp</Text>

          <View>
            <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Slider
                style={{width: "93%", height: 40}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFA64D"
                maximumTrackTintColor="#393637"
                thumbImage={require('./assets/images/thumb.png')}            
                value={75}
              />
            <Entypo name="light-up" size={18} color="white" />
          </View>
        </View>
        
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211D1D',
  },
  image: {
    width: "100%",
    height: 473
  },
  cardConteiner: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: "30%",
    left: "5%",
    right: "5%",
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#282424',
    borderRadius: 30,
    width: "49%",
    minHeight: 200,
    padding: 20,
    position: 'relative',
  },
  percent: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#fff',
  },
  extra: {
    fontSize: 14,
    fontWeight: '100',
    color: '#A4A4A4',
    marginTop: 10,
  },
  extra2: {
    fontSize: 14,
    fontWeight: '100',
    color: '#fff',
    marginTop: 10,
    marginLeft: 10
  },
  secondCardConteiner: {
    position: 'absolute',
    backgroundColor: '#282424',
    flexDirection: 'column',
    bottom: "5%",
    left: "5%",
    right: "5%",
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 180
  }
});
