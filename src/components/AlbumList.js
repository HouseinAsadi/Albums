import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';
import console = require('console');
//import console = require('console');

class AlbumList extends Component {
    state = {albums : []};
constructor () {
    super();
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums : response.data}));
}

getItems = () => {
    return this.state.albums.map(item => 
        <AlbumDetail key={item.title} album = {item} />
         );
}

    render () {
        return (
            <View>
                {this.getItems}
            </View>
        );
    }
}

export default AlbumList;