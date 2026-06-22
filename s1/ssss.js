const processAllOrders = async (orderIds) => {
  const results = [];
  
  for (const id of orderIds) {
    try {
      console.log(`Processing ${id}...`);
      const result = await processOrder(id);
      results.push({ id, status: "success", data: result });
    } catch (error) {
      results.push({ id, status: "failed", error: error.message });
    }
  }
  
  return results;
};

// Process one by one (sequential):
processAllOrders(["PO-001", "PO-002", "PO-003"])
  .then(results => console.log("All done:", results));