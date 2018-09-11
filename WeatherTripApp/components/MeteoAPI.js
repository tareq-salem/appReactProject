export default class MeteoAPI {

    static async APIrequest(input) {
        let url = "";
        const APIkey = "18f844a061787db37859728df7a7a978";
        const nbResult = 10;

        if (isNaN(input)) {
            console.warn("test1");
            url = 'api.openweathermap.org/data/2.5/forecast?q=' + input
            + ',fr&cnt=' + nbResult + '&units=metric&lang=fr&APPID=' + APIkey;
        } else {
            console.warn("test2");
            url = 'api.openweathermap.org/data/2.5/forecast?zip=' + input
            + ',fr&cnt=' + nbResult + '&units=metric&lang=fr&APPID=' + APIkey;
        }

        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            return console.warn(responseJson);
        } catch (error) {
            console.error(error);
        }

    }
}
