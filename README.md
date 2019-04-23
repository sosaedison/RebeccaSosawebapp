# SosaRebeccaAQ
AQ web app

Done:
Show a 2 independent maps (side-by-side) using the Leaflet API
Pan and zoom available with mouse click-and-drag and scroll wheel interaction 
Have an input box for a user to type a location (lat/long coordinates)
Map should update when location is entered
Get air quality measurements from the Open AQ Platform for the past 30 days
Average measurements of the same particle taken at the same location
Only retrieve data from locations shown on the map (account for both center and zoom level)
Open AQ Platform accepts requests with a lat/long center and a radius. HINT: get lat/long coordinates for the NW and SE corners of the map, calculate the distance between them (haversine formula we did in class), and divide by 2 for the radius.
Create a popup with actual measurement averages when hovering over a marker
Populate a table for each map with air quality measurements (from the Open AQ Platform API)
Table should automatically update data based on location shown in map
It is OK to display all results in the table even though the circle of retrieved data will not exactly match the rectangular map
Table should show all measurements, not just the averages
Draw markers on the map for each location their is at least one measurement
"About the Project" page
Description of the tools (frameworks, APIs, etc.) you used to create the application
Use the Nominatim API (https://wiki.openstreetmap.org/wiki/Nominatim (Links to an external site.)Links to an external site.) to search via place name in addition to lat/long coordinates

Need to do:
Input box text should update with new location (lat/long coordinates) when map is panned

Short bio about each team member (including a photo)
Video demo of the application (2 - 4 minutes)
Can natively embed or upload to YouTube and embed
Six interesting findings that you discovered using your application
Create UI controls to filter data per map
Filter based on particle type
Filter based on measurement values for each particle type (e.g. only show co > 1.3, ammonia > 72.9, ...)
Allow different historical data to be retrieved (select a date/time range within the last 90 days)
Style the background color of particle values in the table so they match the Air Quality Index from the EPA
https://www3.epa.gov/airnow/aqi-technical-assistance-document-sept2018.pdf (Links to an external site.)Links to an external site. (colors - page 2, values - page 4)
If levels of one or more particle are "Unhealthy for Sensitive Groups" (orange) or higher, add a banner with the AQI descriptor (page 2)
Also include a legend for the colors
Add option for showing a heatmap visualization overlay on the map when only one particle type selected
Color should represent the measurement value
Include an easy-to-read legend
Do NOT use a rainbow color scale
See Leaflet plugin: https://github.com/Leaflet/Leaflet.heat (Links to an external site.)Links to an external site. 
Allow either map (along with the location input box) to go fullscreen
