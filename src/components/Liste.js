import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Detay from './Detay';
class Liste extends Component {
  state = {data: []};
  UNSAFE_componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({data: response.data}));
    console.log('componentDidMount');
    //debugger;
    //const a = 5;
  }
  renderData() {
    return this.state.data.map((responseData, Id) => (
      <Detay key={Id} data={responseData} />
    ));
  }
  render() {
    console.log('gelen data' + this.state);
    console.log('render');
    return <ScrollView style={{marginTop: 5}}>{this.renderData()}</ScrollView>;
  }
}

export default Liste;
