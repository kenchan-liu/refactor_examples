function printOwing(invoice) {
  let outstanding = calculateOutstanding();

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}
function calculateOutstanding(){
    return 0;
}

function printOwing(invoice) {
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
var ins = {name:"aa", customer:"x"};

printOwing(ins);