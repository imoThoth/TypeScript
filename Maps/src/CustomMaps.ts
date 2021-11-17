
export interface Mappable {
    markerContent(): string;
    location: {
        lat: number;
        long: number;
    }
}

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId: Element){
        //ToDo neds fix
        this.googleMap = new google.maps.Map(divId, {
            center: { lat: 51.507351, lng:-0.127758},
            zoom: 8
          });
    }

    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.long
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker)
        })
    }

}