//setting up firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, 
        ref,
        push,
        set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://database-project-poe-default-rtdb.asia-southeast1.firebasedatabase.app/"
 }

 const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "contacts")


//variable
const nameValue = document.getElementById('name');
const lastName = document.getElementById('lastName');
const numbervalue = document.getElementById('number');
const emailValue = document.getElementById('email')
const formElement = document.getElementById('formElement')

//submiting the form
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    //creating the object
    const formData = {
    nameValue: nameValue.value,
    lastName: lastName.value,
    numbervalue: numbervalue.value,
    emailValue: emailValue.value
   }

   pushToFirebase(formData);
    // after the form submit
    nameValue.value = '';
    lastName.value = '';
    numbervalue.value = '';
    emailValue.value = '';

})

//function for pushing to firebase
function pushToFirebase(formData){
    const formRef = ref(database, "formSubmissions"); //to create a reference in firebase
    const newFormEntry = push(formRef); //to create a unque entry

    set(newFormEntry, formData)
    .then(() => {
        console.log('data saved successfuly')
    })
    .catch((error) => {
        console.error('error saving file')
    }
    )
}