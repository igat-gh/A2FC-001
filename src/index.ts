import { getCurrentPosition, Geoposition, PositionError } from "./geolocationService";

getCurrentPosition()
  .then((position: Geoposition) => {
    console.log(position);
  })
  .catch((error: PositionError) => {
    console.log(error);
  });