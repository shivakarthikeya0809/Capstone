
const totalPending = processOrders(
    orders,
    order => order.status === "pending" && order.amount > 10000,
    order => order.amount,
    amounts => amounts.reduce((sum, value) => sum + value, 0)
);

console.log("Total:", totalPending);
const approvedCustomers = processOrders(
    orders,
    order => order.status === "approved",
    order => order.customer.toUpperCase(),
    result => result
);

console.log("Approved:", approvedCustomers);


const orderCount = processOrders(
    orders,
    orders=> true,
    order => order.status,
    statuses => {
        return statuses.reduce((count, status) => {
            count[status] = (count[status] || 0) + 1;
            return count;
        }, {});
    }
);

console.log(orderCount);