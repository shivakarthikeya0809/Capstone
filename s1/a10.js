let company = "TechCorp Solutions";
let invoiceNo = "INV-2026-0042";

let item1Qty = 5;
let item1Price = 12000;

let item2Qty = 12;
let item2Price = 2500;

let item3Qty = 1;
let item3Price = 45000;

let sub1 = item1Qty * item1Price;
let sub2 = item2Qty * item2Price;
let sub3 = item3Qty * item3Price;

let total = sub1 + sub2 + sub3;
let gst = total * 0.18;

let finalAmount = total + gst;

console.log(`
Company: ${company}
Invoice No: ${invoiceNo}

Item 1: SAP License
Qty: ${item1Qty}
Subtotal: ₹${sub1}

Item 2: Cloud Hosting
Qty: ${item2Qty}
Subtotal: ₹${sub2}

Item 3: Support Plan
Qty: ${item3Qty}
Subtotal: ₹${sub3}

Grand Total: ₹${total}
GST (18%): ₹${gst}
Final Amount: ₹${finalAmount}
`);