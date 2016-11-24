///<reference path="../../node_modules/@types/googlemaps/index.d.ts"/>

interface GoogleMapOptions {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
}

export const initMap =
  (element: HTMLElement, options: GoogleMapOptions) =>
    (new google.maps.Map(element, options))