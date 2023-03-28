function printOwing(invoice) {
    let outstanding = 0;
  
    printbanner();
    // calculate outstanding
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
    
    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
  var ins = {name:"aa", customer:"x",orders:[4,4,5]};
function printbanner(){
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

}
  printOwing(ins);