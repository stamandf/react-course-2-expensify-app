import * as firebase from 'firebase';

// Initialize Firebase
const config = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.FIREBASE_DATABASE_URL,
projectId: process.env.FIREBASE_PROJECT_ID,
storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
//create an instance of the auth provider. In this case Google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key,snapshot.val());
    
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key,snapshot.val());
    
// })


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses);
// });

// setTimeout(() => {
//     database.ref('expenses/-Lchw7xLv3kIrWYUQptK').update({
//         amount:101000
//     })
// },3500);

// setTimeout(() => {
//     database.ref('expenses/-Lchw7xLv3kIrWYUQptL').update({
//         amount:300000
//     })
// },7500);

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'New Car',
//         note: 'Subaru',
//         amount: 3800000,
//         createdAt: moment(0).add(15,'days').valueOf() 
//     })
// },10500);

// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {
//             // console.log(snapshot.val());
//             const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses);
//         });



// expenses.forEach((element) => {
//     database.ref('expenses').push({
//         description: element.description,
//         note: element.note,
//         amount: element.amount,
//         createdAt: element.createdAt 
//     });
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     // console.log(snapshot.val());
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// });

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Software Engineer',
//         'job/company': 'Amazon'
//     })
// }, 3500)

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Software Architect',
//         'job/company': 'Apple'
//     })
// }, 7500)

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Software Manager',
//         'job/company': 'Google'
//     })
// }, 10500)
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());

// }, (e) => {
//     console.log('Error with data fetching', e);
// });     

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(38);
// }, 10500);
// database.ref('location/city')
//         .once('value')
//         .then((snapshot) => {
//             console.log(snapshot.val());
//         })
//         .catch((e) => {
//             console.log('Error fetching data', e);
            
//         })

// database.ref().set({
//     name: 'Florence Saint-Amand',
//     age: 52,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Montreal',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
// database.ref().update({
//     name:'Mike',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// });
// database.ref('age').set(53);
// database.ref('location/city').set('Toronto');
// database.ref('attributes/height').set(1.80);
// database.ref('attributes/weight').set(80);
//The other way:
// database.ref('attributes').set({
//     height: 1.80,
//     weight: 80
// }).then(() => {
//     console.log('Attributes data saved.');
// }).catch((e) => {
//     console.log('Adding Attributes failed!', e);
    
// })
// console.log('I made the request to change the data!');
//Remove single status
// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle removed!');
// }).catch((e) => {
//     console.log('Something went wrong:', e);
    
// })