export default class MeteoLocAPI {

    'use strict';

    /**
    * @param {number} distance - distance (km) from the point represented by centerPoint
    * @param {array} centerPoint - two-dimensional array containing center coords [latitude, longitude]
    * @description
    *   Computes the bounding coordinates of all points on the surface of a sphere
    *   that has a great circle distance to the point represented by the centerPoint
    *   argument that is less or equal to the distance argument.
    *   Technique from: Jan Matuschek <http://JanMatuschek.de/LatitudeLongitudeBoundingCoordinates>
    * @author Alex Salisbury
    */

    static getBoundingBox(centerPoint, distance, zoom) {
        var MIN_LAT, MAX_LAT, MIN_LON, MAX_LON, R, radDist, degLat, degLon, radLat, radLon, minLat, maxLat, minLon, maxLon, deltaLon;

        if (distance < 0) {
            return 'Illegal arguments';
        }
        // helper functions (degrees<–>radians)
        Number.prototype.degToRad = function () {
            return this * (Math.PI / 180);
        };
        Number.prototype.radToDeg = function () {
            return (180 * this) / Math.PI;
        };
        // coordinate limits
        MIN_LAT = (-90).degToRad();
        MAX_LAT = (90).degToRad();
        MIN_LON = (-180).degToRad();
        MAX_LON = (180).degToRad();
        // Earth's radius (km)
        R = 6378.1;
        // angular distance in radians on a great circle
        radDist = distance / R;
        // center point coordinates (deg)
        degLat = centerPoint[0];
        degLon = centerPoint[1];
        // center point coordinates (rad)
        radLat = degLat.degToRad();
        radLon = degLon.degToRad();
        // minimum and maximum latitudes for given distance
        minLat = radLat - radDist;
        maxLat = radLat + radDist;
        // minimum and maximum longitudes for given distance
        minLon = void 0;
        maxLon = void 0;
        // define deltaLon to help determine min and max longitudes
        deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
        if (minLat > MIN_LAT && maxLat < MAX_LAT) {
            minLon = radLon - deltaLon;
            maxLon = radLon + deltaLon;
            if (minLon < MIN_LON) {
                minLon = minLon + 2 * Math.PI;
            }
            if (maxLon > MAX_LON) {
                maxLon = maxLon - 2 * Math.PI;
            }
        }
        // a pole is within the given distance
        else {
            minLat = Math.max(minLat, MIN_LAT);
            maxLat = Math.min(maxLat, MAX_LAT);
            minLon = MIN_LON;
            maxLon = MAX_LON;
        }
        return (this.APIrequest([
            minLon.radToDeg(),
            minLat.radToDeg(),
            maxLon.radToDeg(),
            maxLat.radToDeg(),
            zoom
        ]));

    };


    static async APIrequest(box) {
        let url = "";
        const APIkey = "18f844a061787db37859728df7a7a978";
        const lonLatFormat = box[0] + "," + box[1] + "," + box[2] + "," + box[3]
        + "," + box[4];

        url = 'http://api.openweathermap.org/data/2.5/box/city?bbox=' + lonLatFormat
        + '&units=metric&lang=fr&APPID=' + APIkey;

        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            return console.warn(responseJson);
        } catch (error) {
            return console.warn("Il semble qu'il y ait un problème...");
        }

    }
}
