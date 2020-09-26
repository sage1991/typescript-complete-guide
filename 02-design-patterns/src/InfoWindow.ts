

class InfoWindow {
  
  private infoWindow: google.maps.InfoWindow;

  constructor(content: string) {
    this.infoWindow = new google.maps.InfoWindow({
      content: content
    });
  }

  open = (map: google.maps.Map | google.maps.StreetViewPanorama, marker: google.maps.Marker) => this.infoWindow.open(map, marker);
}

export { InfoWindow };