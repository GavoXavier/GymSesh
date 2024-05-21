// (import { Meteor } from 'meteor/meteor';
// import { check } from 'meteor/check';
// import { FormDataCollection } from './FormDataCollection';

// Meteor.methods({
//   'formData.insert'(input1, input2, input3) {
//     // Validate input
//     check(input1, String);
//     check(input2, String);
//     check(input3, String);

//     // Insert data into the collection
//     FormDataCollection.insert({
//       input1,
//       input2,
//       input3,
//       createdAt: new Date(),
//     });
//   },
// });) FormDataCollection

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { GymSessionsCollection } from './GymSessionsCollection';

Meteor.methods({
  'gymSessions.book'(name, email, sessionDate) {
    check(name, String);
    check(email, String);
    check(sessionDate, String);

    // Check if the session already has 10 bookings
    const sessionCount = GymSessionsCollection.find({ sessionDate }).count();

    if (sessionCount >= 10) {
      throw new Meteor.Error('class-full', 'This class is already full.');
    }

    // Insert the booking into the collection
    GymSessionsCollection.insert({
      name,
      email,
      sessionDate,
      createdAt: new Date(),
    });
  },
});

