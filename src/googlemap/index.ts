///<reference path="../../node_modules/@types/googlemaps/index.d.ts"/>

interface IGoogleMapOptions {
  center: {
    lat: number,
    lng: number
  },
  zoom: number,
  zoomControl?: boolean,
  scaleControl?: boolean
}

export const initMap =
  (element: HTMLElement, options: IGoogleMapOptions) => {
    const map = new google.maps.Map(element, options)

    map.data.setStyle((feature) => ({
      icon: { url: feature.getProperty('icon'), anchor: new google.maps.Point(25, 25) }
    }))

    return map
  }

export const drawIcons =
  (map: google.maps.Map, geoJSON: Object) =>
    (map.data.addGeoJson(geoJSON), map)
