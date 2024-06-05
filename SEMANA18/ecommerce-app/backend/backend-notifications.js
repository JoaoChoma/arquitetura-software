// backend-notifications.js
import firebase from "firebase/app";
import "firebase/messaging";

const messaging = firebase.messaging();

export const sendNotification = (token, message) => {
  return messaging.send({
    token: token,
    notification: {
      title: message.title,
      body: message.body,
    },
  });
};
