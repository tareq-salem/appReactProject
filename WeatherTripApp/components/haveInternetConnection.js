import { NetInfo } from 'react-native';

export default function haveInternetConnection() {

    NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected == true) {
            return true;
        } else {
            return false;
        }
    });
}
