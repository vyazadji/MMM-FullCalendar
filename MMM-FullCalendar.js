Module.register("MMM-FullCalendar",{
  // Default module config.
  defaults: {
    //text: "Hello World!"
  },

  getScripts: function() {
    return [
      'moment.js', // this file is available in the vendor folder, so it doesn't need to be available in the module folder.
      'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
      this.file('lib/fullcalendar.js'),
      this.file('lib/gcal.js'),
    ];
  },

  getStyles: function() {
    return [
      this.file('lib/fullCalendar.css'), // will try to load it from the vendor folder, otherwise it will load is from the module folder.
    ];
  },

  // Define required translations.
  getTranslations: function () {
    return false;
  },

  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.id = "fullCalendar";
    return wrapper;
  },

  notificationReceived: function(notification, payload, sender) {
    if(notification === 'DOM_OBJECTS_CREATED'){
      $(document).ready(function() {
        $('#fullCalendar').width('1050px');
        $('#fullCalendar').fullCalendar(this.config);


        $(document).keydown(function(e) {
          var kod = e.which;
          if (kod === 87/*w*/) $('#fullCalendar').fullCalendar('changeView', 'basicWeek');
          if (kod === 77/*m*/) $('#fullCalendar').fullCalendar('changeView', 'month');
        }.bind(this));

      }.bind(this));
    }
  },


});
