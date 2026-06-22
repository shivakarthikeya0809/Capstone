
const createCache = () => {
    let cache = {};
    let hits = 0;

    return {
        set: (key, value) => {
            cache[key] = value;
        },

        get: (key) => {
            if (cache[key]) {
                hits++;
                return cache[key];
            }
            return "Not Found";
        },

        getHits: () => hits
    };
};

const myCache = createCache();

myCache.set("user1", {name:"Priya"});

console.log(myCache.get("user1"));
console.log(myCache.get("user1"));
console.log("Hits:", myCache.getHits());