import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  kontti: {
    flex: 1,
    marginTop: 75,
    alignItems: 'center',
    alignContent: 'center'
  },
  list: {},
  teksti: {
    marginTop: 10,
    color: 'red',
    flex: 1,
    backgroundColor: '#fff',
   
  
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
      <View style={styles.kontti}>
        <FlatList
          style={styles.list}
          data={this.state.tapahtumat} /// syöttö
          renderItem={({ item }) => (
            <Text style={styles.teksti}>
              {item.paikka} {'\n'} {item.aika}
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default EventList;
