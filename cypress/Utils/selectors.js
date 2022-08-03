const practiceSelectors = {

    firstName:"th[st-sort='firstName']",
    lastName: "th[st-sort='lastName']",
    age:  "th[st-sort='age']",
    email: "th[st-sort='email']",
    balance: "th[st-sort='balance']",
    allFirstName : "tr > td:nth-child(1)",
    allLastName : "tr > td:nth-child(1)"

}


 const diffSelectors = {

   homeOne : "a[href='https://www.rahulshettyacademy.com/']",
   PracticeOne : "button:nth-child(2)",
   LoginOne : "button:nth-child(3)",
   SignupOne : "button:nth-child(4)",

}

export default {practiceSelectors};