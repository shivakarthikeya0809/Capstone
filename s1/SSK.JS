const fetchUserData = async (userId) => {
  try {
    // Simulate API call:
    const user = await new Promise(resolve => 
      setTimeout(() => resolve({ id: userId, name: "Priya", role: "Developer" }), 500)
    );
    
    const orders = await new Promise(resolve => 
      setTimeout(() => resolve([
        { id: "PO-001", amount: 5000 },
        { id: "PO-002", amount: 12000 }
      ]), 700)
    );
    
    return {
      ...user,
      orders,
      totalOrders: orders.length,
      totalAmount: orders.reduce((sum, o) => sum + o.amount, 0)
    };
    
  } catch (error) {
    console.log("Failed to load user data:", error.message);
    return null;
  }
};

// Usage:
const main = async () => {
  const userData = await fetchUserData("USER-001");
  console.log("User Data:", JSON.stringify(userData, null, 2));
};
main();
