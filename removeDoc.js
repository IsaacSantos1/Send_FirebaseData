import {db} from './firebase-config.js';
import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Now we want to turn this into a function that will be triggered on the buttonClick in a html page
// We want to first grab the button click and then call this function to delete the document with id "delete1" from the "orders" collection in Firestore


// export async function removeDoc1() {
//   try {
//     const docRef = doc(db, "orders", "delete1");
//     await deleteDoc(docRef);
//     console.log(`Document with ID delete2 deleted successfully.`);
//   } catch (error) {
//     console.error("Error deleting document: ", error);
//   }
// }

const deleteButton = document.getElementById("del1");

deleteButton.addEventListener("click", async () => {

 const orderId = document.getElementById("orderIdInput").value;

 const orderRef = doc(db, "orders", orderId);

 await deleteDoc(orderRef);

});


// const button =document.getElementById("del1");
// button.addEventListener("click", removeDoc1);