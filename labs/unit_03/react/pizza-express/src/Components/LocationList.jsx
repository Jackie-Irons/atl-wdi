import React, {Component} from 'react';
import Location from './Location';
import LocationData from '../locationData';


class LocationList extends Component {
	render() {
		return (
		 <div id="location">
		 <h1>Locations</h1>
		{LocationData.map((location, i) => {
            return <Location key={i} name={location.name} address={location.address} phone={location.phone}/>
          })}
        </div>
      
    )
  }
}

export default LocationList;