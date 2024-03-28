**PROJECT APP LINK**
https://scalar-eight.vercel.app/


**DESCRIPTION**

Stated web application provide a user interactable cab service to the user. This application takes inputs as valid source point and a valid destination point and provide you the various available cabs having shortest distance to the destination with their price. Also the application send a confirmation email to the user’s email id given to the application. Also the web application stores all the data of cab bookings.


**INSTALLATION**

To run this project in your system download all files of the repository and save them in a single folder. Make sure that all the file should be in the same folder. Run the server.js file with your email id and password for creating a server for sending email to the client. Then run “index.html” file on a web browser you will get the web application.


**PROCESS**

In the associated web application, implemented Dijkstra algorithm to find the shortest path from source point to destination point. That Dijkstra function is defined in pro2.js script file. After getting shortest path from the networks calculated prices for each available cabs.


**DIJKSTRA ALGORITHM**

The web application uses the Dijkstra algorithm to find the shortest path from the given network of points. Dijkstra's algorithm is a widely-used algorithm for finding the shortest path between nodes in a graph. It works on both weighted and unweighted graphs but is primarily used for weighted graphs where each edge has a non-negative weight. The algorithm maintains a set of vertices whose shortest distance from the source vertex is known. It repeatedly selects the vertex with the minimum distance from the source, updates the distances to its neighbors, and marks it as visited.
