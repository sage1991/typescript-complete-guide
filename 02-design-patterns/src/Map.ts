import { Marker } from "./Marker";

const mapConfig: google.maps.MapOptions = {
  zoom: 1,
  center: { lat: 0, lng: 0 }
};

class Map {

  private markers: Marker[] = [];
  private map: google.maps.Map;

  constructor(root: HTMLElement) {
    this.map = new google.maps.Map(root, mapConfig);
  }

  addMarker = (marker: Marker) => {
    this.markers.push(marker);
    marker.renderAt(this.map);
  }
  
  removeAllMarker = () => {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].remove();
    }
    this.markers = [];
  }
}

export { Map };