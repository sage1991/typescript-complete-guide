import { InfoWindow } from "./InfoWindow";
import { Markable } from "./types/Markable";


class Marker {

  private marker: google.maps.Marker;
  private infoWindow: InfoWindow;

  constructor(markable: Markable) {
    this.marker = new google.maps.Marker({ position: markable.location });
    this.infoWindow = new InfoWindow(markable.describe());
  }

  private initEvent = () => {
    if (!this.infoWindow) return;
    this.marker.addListener("click", (e) => {
      this.infoWindow.open(this.marker.getMap(), this.marker);
    });
  }

  renderAt = (map: google.maps.Map) => {
    this.marker.setMap(map);
    this.initEvent();
  }

  remove = () => {
    this.marker.setMap(null);
    this.marker = null;
  }
}


export { Marker };