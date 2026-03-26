
let submenu = 'back';
let mainmenu = 2;
 
switch(mainmenu) {
  case 1:
    console.log("===PHONEBOOK===");
    break;
  case 2:
    console.log("===MESSAGES===");
    break;
  default:
    console.log("Invalid main menu selection.");
}

if (mainmenu === 1) {
  submenu = prompt("Enter submenu option (1-10) or 'back':");
} else if (mainmenu === 2) {
  submenu = prompt("Enter submenu option (1-4) or 'back':");
}
  console.log("1. Phonebook");
  console.log("2. Messages");
  console.log("3. Chat");
  console.log("4. Call Register");
  console.log("5. Tones");
  console.log("6. Settings");
  console.log("7. Call Divert");
  console.log("8. Games");
  console.log("9. Calculator");
  console.log("10. Reminders");
  console.log("11. Clock");
  console.log("12. Profiles");
  console.log("13. SIM Services");





else if (level === "sub") {
  switch(mainmenu) {
    case 1:
      console.log("===PHONEBOOK===");
      console.log("1. Search");
      console.log("2. Add Name");
      console.log("3. Edit");
      console.log("4. Erase");
      console.log("5. Assign Tone");
      console.log("6. Send b'card");
      console.log("7. service Nos.");
      console.log("8. options");
      console.log("9. Speed Dials");
      console.log("10. Voice Tags");
      console.log("Type 'back' to return to main menu");
      
      if (submenu === "back") {
        console.log("Returning to main menu...");
      }else {
        switch(submenu) {
          case 1:
            console.log("Searching phonebook..."); 
            break;
          case 2:
            console.log("adding name to phonebook..."); 
            break;
          case 3:
            console.log("editing phonebook...");
            break;
          case 4:
            console.log("erasing phonebook...");
            break;
          case 5:
            console.log("assigning tone to contact...");
            break;
          case 6:
            console.log("sending b'card...");
            break;
          case 7:
            console.log("showing service numbers...");
            break;
          case 8:
            console.log("showing options...");

            break;
          case 9:
            console.log("showing speed dials...");
            break;
          case 10:
            console.log("showing voice tags...");
            break;
          default:
            console.log("Invalid option. Returning to main menu...");
        }
      }
      
      break;
    case 2:
      console.log("===MESSAGES===");
      console.log("1. Write Message");
      console.log("2. Inbox");
      console.log("3. Outbox");
      console.log("4. Drafts");
      console.log("Type 'back' to return to main menu");
      
      if (submenu === "back") {
        console.log("Returning to main menu...");
      }else {
        switch(submenu) {
          case 1:
            console.log("Writing message...");
            break;
          case 2:
            console.log("Opening inbox...");
            break;
          case 3:            console.log("Opening outbox...");
            break;
          case 4:            console.log("Opening drafts...");
            break;

          default:
            console.log("Invalid option. Returning to main menu...");
        }
      }
      break; 
