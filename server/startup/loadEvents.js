Meteor.startup(function () {
    if (Events.find().count() === 0) {

      var events = [
        {'title': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'title': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'title': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < events.length; i++)
        Events.insert(events[i]);

    }
   });