
const createLogger = (component) => {

    return (message) => {
        let time = new Date().toLocaleTimeString();

        console.log([`[${component}] ${time} - ${message}`]);
    };
};

const dbLogger = createLogger("Database");

dbLogger("Connected");
dbLogger("Query executed");


