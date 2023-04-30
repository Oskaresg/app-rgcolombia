import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { getZonasColombia } from '../api/services';

const Zonas = () => { 

    const [zonasColombia, setZonasColombia] = useState([]);    
    
  
    useEffect(() => {
        async function fetchData() {
          const zonasColombia = await getZonasColombia();
          setZonasColombia(ZonasColombia);      
        }
        fetchData();
      }, []);

  
    return (
      <View style={styles.container}>          
  
        <Text style={styles.title}>Zonas de Colombia</Text>
        {ZonasColombia.map(Zonas => (
          <Text key={Zonas.id} style={styles.text}>{Zonas.name}</Text>
        ))}  
              
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
      marginVertical: 5,
    },
  });
  
export default Zonas;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
