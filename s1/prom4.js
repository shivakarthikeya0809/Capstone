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


// Promise.any()

Promise.any([
    fetchProduct("INVALID"),
    retryFetch("https://api.com"),
    delay(1000)
])

.then((result) => {
    console.log("First Success:");
    console.log(result);
})

.catch((error) => {
    console.log(error);
});