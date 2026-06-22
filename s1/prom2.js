// 1. delay(ms)
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};


// 2. fetchProduct(id)
const fetchProduct = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id.startsWith("PRD")) {
                resolve({
                    id: id,
                    name: "Laptop",
                    price: 50000
                });
            } else {
                reject("Invalid product ID");
            }

        }, 500);

    });
};


// 3. retryFetch(url,maxRetries)
const retryFetch = (url, maxRetries = 3) => {

    return new Promise((resolve, reject) => {

        let attempts = 0;

        function fetchData() {

            attempts++;

            console.log("Attempt:", attempts);

            const success = Math.random() > 0.7;

            if (success) {
                resolve("Data fetched from " + url);
            }
            else if (attempts < maxRetries) {
                fetchData();
            }
            else {
                reject("All attempts failed");
            }
        }

        fetchData();
    });
};


// Promise.race()

Promise.race([
    delay(1000),
    fetchProduct("PRD-001"),
    retryFetch("https://api.com")
])

.then((result) => {
    console.log("Winner:");
    console.log(result);
})

.catch((error) => {
    console.log("Error:", error);
});