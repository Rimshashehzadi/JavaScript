// Guest list for dinner
let guestList = ["Alina", "Nimra", "Faiza"];
//before replacing
console.log(guestList)

// Print dinner invitation message to each person
for (let i = 0; i < guestList.length; i++) {
  let guest = guestList[i];
  console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us at 7:00 PM on Saturday.");
}

// Name of the guest who can't make it
let unableToAttend = guestList[1];
console.log(unableToAttend + " is unable to attend the dinner.");

// Replace the guest who can't make it with a new person
guestList[1] = "Rimsha";
//after replacing
console.log("Dear " + guestList[1] +" you are invited for dinner at 7:00 PM ")

// // Print new set of invitation messages
// for (let i = 1; i < guestList.length; i++) {
//   //replaced value
//   let guest = guestList[1];
//   console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us at 7:00 PM on Saturday.");
// }
let name="Rimsha";
console.log(name.lowercase);