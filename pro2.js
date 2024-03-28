// document.addEventListener('DOMContentLoaded', () => {
    const adjacencyList = {
        "A": {"B": 5, "C": 7},
        "B": {"A": 5, "E": 20, "D": 15},
        "C": {"A": 7, "D": 5, "E": 35},
        "D": {"B": 15, "C": 5, "F": 20},
        "E": {"B": 20, "C": 35, "F": 10},
        "F": {"D": 20, "E": 10}
    };
    
    const cabPricing = {
        "Cab1": 2,
        "Cab2": 3,
        "Cab3": 4,
        "Cab4": 5,
        "Cab5": 6
    };
    
    function calculateAndDisplayCabs() {
        const source = document.getElementById("source").value.toUpperCase();
        const destination = document.getElementById("destination").value.toUpperCase();
    
        if (!adjacencyList.hasOwnProperty(source) || !adjacencyList.hasOwnProperty(destination)) {
            alert("Invalid source or destination");
            return;
        }
        
        // Implement Dijkstra's or Floyd-Warshall algorithm to calculate shortest path (time-wise)
        const shortestTime = dijkstra(adjacencyList, source, destination);
        console.log(shortestTime);
        
        // Calculate cab pricing based on estimated travel time
        const cabPrices = calculateCabPrices(shortestTime);
        console.log(cabPrices);
    
        // Store cab prices in localStorage
        localStorage.setItem('cabPrices', JSON.stringify(cabPrices));
    
        // Navigate to the new page
        window.location.href = "./pro21.html";
    }
    
    // Rest of your JavaScript code...
    
    class PriorityQueue {
        constructor() {
            this.items = [];
        }
    
        enqueue(item, priority) {
            this.items.push({ item, priority });
            this.items.sort((a, b) => a.priority - b.priority);
        }
    
        dequeue() {
            return this.items.shift().item;
        }
    
        isEmpty() {
            return this.items.length === 0;
        }
    }
    
    function dijkstra(adjacencyList, source, destination) {
        const distances = {};
        const priorityQueue = new PriorityQueue();
    
        // Initialize distances and priority queue
        for (let vertex in adjacencyList) {
            distances[vertex] = vertex === source ? 0 : Infinity;
            priorityQueue.enqueue(vertex, distances[vertex]);
        }
    
        // Dijkstra's algorithm
        while (!priorityQueue.isEmpty()) {
            const currentVertex = priorityQueue.dequeue();
    
            if (currentVertex === destination) {
                break;
            }
    
            if (!adjacencyList[currentVertex] || distances[currentVertex] === Infinity) {
                continue;
            }
    
            for (let neighbor in adjacencyList[currentVertex]) {
                const distanceToNeighbor = distances[currentVertex] + adjacencyList[currentVertex][neighbor];
    
                if (distanceToNeighbor < distances[neighbor]) {
                    distances[neighbor] = distanceToNeighbor;
                    priorityQueue.enqueue(neighbor, distanceToNeighbor);
                }
            }
        }
    
        return distances[destination] !== Infinity ? distances[destination] : -1;
    }
    
    function calculateCabPrices(time) {
        const prices = {};
    
        for (const [cab, pricePerMinute] of Object.entries(cabPricing)) {
            const totalPrice = time * pricePerMinute;
            prices[cab] = totalPrice;
        }
        console.log("calculateprice");
        return prices;
    }
    
    function displayCabPrices(prices) {
        let html = "<h2 align='center'>Cab Pricing</h2><ul>";
        
        for (const [cab, price] of Object.entries(prices)) {
            console.log(`${cab}: ${price}`);
            html += `<li><div class="name-box">${cab}: ${price} (Total Price)</div></li>`;
        }
    
        html += "</ul>";
        
        console.log(html);
        // window.location.href="pro21.html";
        document.getElementById("cabPricing").innerHTML = html;
    }
    
    
    function bookCab(cabName) {
        // Open email.html page with cabName as a query parameter
        window.location.href = `email.html?cab=${cabName}`;
    }
    // });