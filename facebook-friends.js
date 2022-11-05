/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
let facebookProfile = {
  name:"John",
  friends:10,
  messages:[],
  postMessage: function (post) {
    facebookProfile.messages.push(post);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index,1)
  },
  addFriend: function (add) {
    facebookProfile.friends += add
  },
  removeFriend: function (remove) {
    facebookProfile.friends -= remove
  },
}

facebookProfile.postMessage("hello!")

console.log(facebookProfile.messages)

facebookProfile.deleteMessage(0)

console.log(facebookProfile.messages)