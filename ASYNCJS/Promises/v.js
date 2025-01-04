// Stage 1: Product Ordered
const productOrdered = new Promise((resolve, reject) => {
    const orderSuccess = true; // Set to false to simulate failure in ordering
    setTimeout(() => {
      if (orderSuccess) {
        resolve("Product ordered successfully!");
      } else {
        reject("Failed to order the product.");
      }
    }, 1000); // Simulating a delay for placing an order
  });
  
  // Stage 2: Product Shipped
  const productShipped = new Promise((resolve, reject) => {
    const shippingSuccess = true; // Set to false to simulate shipping failure
    setTimeout(() => {
      if (shippingSuccess) {
        resolve("Product has been shipped!");
      } else {
        reject("Failed to ship the product.");
      }
    }, 2000); // Simulating a delay for shipping
  });
  
  // Stage 3: Product Delivered
  const productDelivered = new Promise((resolve, reject) => {
    const deliverySuccess = false; // Set to false to simulate delivery failure
    setTimeout(() => {
      if (deliverySuccess) {
        resolve("Product delivered successfully!");
      } else {
        reject("Failed to deliver the product.");
      }
    }, 3000); // Simulating a delay for delivery
  });
  
  // Chain the promises together
  productOrdered
    .then((result) => {
      console.log(result); // Product ordered
      return productShipped; // Proceed to shipping
    })
    .then((result) => {
      console.log(result); // Product shipped
      return productDelivered; // Proceed to delivery
    })
    .then((result) => {
      console.log(result); // Product delivered
    })
    .catch((error) => {
      console.error("Error:", error); // Handle any errors in the chain
    });
  
  