## MMM-FullCalendar

MagicMirror module for showing FullCalendar https://fullcalendar.io/ with your events. 
> This is an extension to the [MagicMirror](https://github.com/MichMich/MagicMirror) project. 


## Installation
Run these commands at the root of your magic mirror install.

```shell
cd modules
git clone https://github.com/vyazadji/MMM-FullCalendar
cd MMM-FullCalendar
npm install
```

## Using the module
To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
		{
			//disabled: true,
			module: "MMM-FullCalendar",
			position: "top_right",
			config: {
				header: {
					left: "",
					center: "title",
					right: ""
				},
				height: 1000,
				locale: "ru",
				googleCalendarApiKey: <YOUR_GOOGLE_CALENDAR_API_KEY>,
				events: {
					googleCalendarId:<YOUR_GOOGLE_CALENDAR_ID>,
					className: "birthday-event" // an option!
				}
			}
		},

```
Where `config` contains configuration for FullCalendar https://fullcalendar.io/docs
