import React, { Component } from 'react';
import Search from './search.js';

class SideBar extends Component {

  render(){
    return <div id='sideBarContainer' aria-label="sidebar">
            <div className='searchContainer'>
            <h1 aria-label="title">Eugene Burritos🌯</h1>
            <Search query={this.props.filter}/>
            </div>
            {this.props.sbMarkers.length > 0 && (<ul id='sideBarResults'>
            {this.props.sbMarkers.map(marker => {

              let venue = marker;
              return <li
              key= {marker.id}
              className="sideBarItem"
              tabIndex="0"
              role="button"
              aria-label="location"
              onClick={(marker) => {this.props.sbInfoWin(venue)}}>
              <p>{marker.name}</p>
              </li>
            })
          }
          </ul>)
        }
        {this.props.sbMarkers.length < 1 && (<p>no results</p>)}
          </div>
  }
}

export default SideBar;
