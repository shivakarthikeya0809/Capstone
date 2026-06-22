const orders = [
 { id:"ORD-001", customer:"Acme Corp", amount:15000, status:"pending" },
 { id:"ORD-002", customer:"Beta Inc", amount:8000, status:"approved" },
 { id:"ORD-003", customer:"Gamma Ltd", amount:52000, status:"pending" },
 { id:"ORD-004", customer:"Delta Co", amount:3000, status:"rejected" },
 { id:"ORD-005", customer:"Epsilon SA", amount:95000, status:"pending" }
];

const processOrders = (
    orderList,
    filterFn,
    transformFn,
    summaryFn
) => {

    const filtered = orderList.filter(filterFn);

    const transformed = filtered.map(transformFn);

    return summaryFn(transformed);
};
