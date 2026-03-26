const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for account name
rl.question("Enter account name: ", (name) => {

  rl.question("Enter amount to deposit: ", (depositInput) => {

    rl.question("Enter amount to withdraw: ", (withdrawInput) => {

      let depositAmount = Number(depositInput);
      let withdrawAmount = Number(withdrawInput);

      // Bank object
      let bankAccount = {
        accountName: name,
        balance: 0,

        deposit: function(amount) {
          this.balance += amount;
        },

        withdraw: function(amount) {
          if (amount > this.balance) {
            console.log("Insufficient funds");
          } else {
            this.balance -= amount;
          }
        }
      };

      // Perform operations
      bankAccount.deposit(depositAmount);
      bankAccount.withdraw(withdrawAmount);

      // Output
      console.log("\nAccount Name:", bankAccount.accountName);
      console.log("Final Balance:", bankAccount.balance);

      rl.close();
    });

  });

});