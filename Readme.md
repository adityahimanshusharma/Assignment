========================================================
Server Side:
========================================================
1. Database.js (using JSON & csv-writer )
	- This will be used for managing the CSV file with write and append operations.

2. Server.js (using express)
	- this will be responsible for initialising the server with http.
	- this will continously listen on the port 5000.
	- this will do the managment of buffered data.

========================================================
Edge Side:
========================================================
1. Edge.js ( using axios)
    - this will send http post request to the server.



========================================================
To Run the server side:
$ node server.js

========================================================
To run the Edge side:
$ while true; do node Edge.js; sleep 2; done

