import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    kontti: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
       
    },
    teksti: {
        color: 'red',
    }
  });

class EventList extends Component {
  state = {
    tapahtumat: []
  };

  componentDidMount() {
    const tapahtumat = require('./db.json').tapahtumat; //// käytetään bindaukseen muotoilua yms varten. ennen kuin data saadaan apista
    this.setState({ tapahtumat });
  }

  render() {
    return (
      <View tyle={styles.kontti}>
        <FlatList tyle={styles.list}
          data={this.state.tapahtumat} /// syöttö
          renderItem={({ item }) => (
            <Text style={styles.teksti}>
              {item.paikka} {item.aika}
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default EventList;




