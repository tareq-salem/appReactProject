export default class Geolocalisation {
    constructor() {

    }

    static async getLocation() {
      const result = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);



      if (result.status === 'granted') {

        try {
          console.warn(result.status);
          const location = await Expo.Location.getCurrentPositionAsync();
          return location;
        } catch (error) {
          return "Location services are disabled";
        }
    } else {
        return "Please accept the permission";
    }



    }

  }
