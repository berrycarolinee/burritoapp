import React, { Component } from 'react';
import Map from './components/map.js';
import SideBar from './components/sidebar.js'
import SquareAPI from './API/main.js';
import './App.css';


class App extends Component {

  state = {
    venues: [],
    markers: [],
  }

// search for venues that have burritos
  componentDidMount(){
    this.venueHas('burrito');
  }
// API call - if the venue has the query item near Eugene
  venueHas = (query) => {
    SquareAPI.search({
      ll:'44.0609976, -123.0867536',
      radius: 10000,
      query: query,
      limit: 20

      //chain a .then() in order to handle results of API call
    }).then(results => {
      this.setState((state) =>({
        venues: state.venues.concat(results.response.venues)
      })
    );

    //convert API calls to markers on the map
    this.setMarkers(this.state.venues);
  })

  //check for errors
    .catch(error => {alert(error)})
  }


  // venues into markers
  setMarkers = (venues) => {
    this.setState({

      markers: venues.map(venue => {
        return {
          animation: null,
          id: venue.id, //id for APIs
          lat: venue.location.lat,
          lng: venue.location.lng,
          opened: false,
          visible: true,
          name: venue.name,
          photo: '',
        }
      })
    })
  }


// marker updates
  updateMarker = (marker) => {
    this.setState({markers: Object.assign(this.state.markers, marker)});
  }

  venuePhotos = (marker,id) => {
    SquareAPI.getVenuePhotos(id)
    .then(res => {
      if (res.meta.code === 429){
        console.log(res.meta.errorDetail);
        marker.photo = false;
        this.updateMarker(marker);
      } else {
        (res.response.photos.items[0] !== undefined) && (marker.photo =
           `${res.response.photos.items[0].prefix}width200${res.response.photos.items[0].suffix}`)
        this.updateMarker(marker);
      }
    }
  )
    .catch(error => { alert(error)})
  }

// when new marker is clicked or closed
  closeInfoWin = () => {
    // closes open wins and sets animation back
    this.state.markers.map(marker => {
      return (marker.opened = false, marker.animation = null);
    });

    // update the marker
    this.updateMarker();
  }

// click marker function
  openInfoWin = (marker) => {
    // close markers when new one is opened
    this.closeInfoWin();

    this.venuePhotos(marker,marker.id);

    marker.opened = true;
    marker.animation = 2;

    this.updateMarker(marker);
  }

  // filter results by name
  filterResults = (query) => {
    const filtered = this.state.venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));
    this.setMarkers(filtered);
  }

  render() {
    return <div className="App">
            <SideBar sbMarkers={this.state.markers} sbInfoWin={this.openInfoWin}
            filter={this.filterResults} />
            <Map id='map' {...this.state} openInfoWin={this.openInfoWin} closeInfoWin={this.closeInfoWin} />
           </div>
  }
}

export default App;
