//@ts-nocheck
import React, {Component} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Text, View, Alert} from 'react-native';

export class Notification extends Component {
  
  authStatus: any;

  async componentDidMount(): Promise<void> {
   

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

   
  }
 

  render() {
    return (
      <View>
        <Text> Push Notifications </Text>
      </View>
    );
  }
}

export default Notification;

// import React, {useEffect} from 'react';
// import messaging from '@react-native-firebase/messaging';

// function Notification() {
//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//     }
//   };

//   useEffect(() => {
//     if (requestUserPermission()) {
//       // return fcm token for the device
//       messaging()
//         .getToken()
//         .then(token => {
//           console.log(token);
//         });
//     } else {
//       console.log('Failed Token Status', authStatus);
//     }

//     messaging()
//       .getInitialNotification()
//       .then(remoteMessage => {
//         if (remoteMessage) {
//           console.log(
//             'Notification caused app to open from quit state:',
//             remoteMessage.notification,
//           );
//         }
//       });

//     messaging().onNotificationOpenedApp(remoteMessage => {
//       console.log(
//         'Notification caused app to open from background state:',
//         remoteMessage.notification,
//       );
//     });

//     messaging().setBackgroundMessageHandler(async remoteMessage => {
//       console.log('Message handled in the background!', remoteMessage);
//     });

//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <View>
//       <Text>Haii Naresh</Text>
//     </View>
//   );
// }

// export default Notification;
