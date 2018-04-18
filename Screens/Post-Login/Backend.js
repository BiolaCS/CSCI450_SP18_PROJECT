import * as firebase from 'firebase';

var groupTitles = [
    "Phishers of Men",
    "Men of Honor",
    "Fire Breathing Rubber Duckies",
    "420 Youth Ministries",
    "Do U Kno De Way"
];

//we can move backend wherever we want and call it whenever we need it.

class Backend {
    userId = '';
    messageRef = null;
    groupID = '';
    username = '';
    
    constructor(){
    }
    setUid() {
        this.userId = firebase.auth().currentUser.uid;
    }
    getUid() {
        this.setUid();
        return this.userId;
    }
   
    getuserName() {
        firebase.database().ref('/users/' + this.userId).once('value').then((snapshot) => {
              
            name = snapshot.val().username;
            this.username = name;
          });
          return this.username;
    }
    getGroupName(value) {
        
        this.groupID = value;
    }
    storeGroupTitles() {
        firebase.database().ref('Groups/Titles/').update({
            groupTitles
          });
    }

    loadMessages(callback) {
        this.messageRef = firebase.database().ref('/Groups/' + this.groupID + '/messages/');
        this.messageRef.off();
        const onRecieve = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user:{
                    _id: message.user._id,
                    name: message.user.name,
                },
            });
        };
        this.messageRef.limitToLast(20).on('child_added', onRecieve);
    }

    sendMessage(message) {
        for (let i = 0; i < message.length; i++) {
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
            });
        }
    }

    closeChat() {
        if (this.messageRef) {
            this.messageRef.off();
        }
    }
}
export default new Backend();