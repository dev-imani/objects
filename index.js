//  // day one off learning objects
//  const obj1={
//     alive:true,
//     answer:42,
//     hobies:["eat","drink","sleep"],
//     schools:{
//         Nairobi:"The Alliance",
//         Coastal:"Mombasa Boys",
//         Western:"Chavakali Boys",
//     },
//     function:function(){
//         return "i miss home"
//     },
//     action: function () {
//         return `i am ${this.answer} years old and i had a preveledge of studying at ${this.schools.Nairobi} high school`}
// }

// console.log(obj1.schools.Western)
// console.log(obj1.action())
// console.log(obj1.hobies[1])
// console.log(obj1["schools"])
// console.log(obj1.function())

// //creating objects using the concept of inheritance use the Object.create()method you pass yor parent as the parameter
// const university={
//     english:"A",
//     Kiswahili:"B",
//     Biology:"C",
//     action:function(){
//         return `You should have a minimum of grade ${this.Biology}`
//     }
// }
// const collegue= Object.create(university)
// collegue.action2 ={
//     minimum:function(){
//         return `You should have a mean grade of ${this.Kiswahili} to join our collegue`
//     },
// }
// console.log(collegue.action2.minimum())
