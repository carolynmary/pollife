$("#submitpoll").on("click", (event)=> {
   event.preventDefault();
   const newPoll = {
      user: $("#user").val().trim(),
      question: $("#question").val().trim(),
      optionOne: $("#option-one").val().trim(),
      optionTwo: $("#option-two").val().trim(),
      optionThree: $("#option-three").val().trim(),
      optionFour: $("#option-four").val().trim()
   };
   $.post( "/api/new", newPoll, ( data ) => {
      const row = $("<div id='vote-form'>");
      row.append("<p>" + data.user + " asked: </p>");
      row.append("<p>" + data.question + "</p>");
      row.append("<input type='radio' name='os' value='"+data.optionOne+"'>" + data.optionOne);
      row.append("<input type='radio' name='os' value='"+data.optionTwo+"'>" + data.optionTwo);
      row.append("<input type='radio' name='os' value='"+data.optionThree+"'>" + data.optionThree);
      row.append("<input type='radio' name='os' value='"+data.optionFour+"'>" + data.optionFour);
      row.append("<br>");
      row.append("<button id='vote-button'>Submit</button>");
      $("#polldisplay").prepend(row);
      $("#vote-button").on("click", ()=>{
         console.log(data);
         $.ajax({
            url: "/api/votes" + newPoll.pollId,
            method: "GET"
         }).then(() => {
            const choice = document.querySelector("input[name=os]:checked").value;
            const data = { os: choice };
         });
      });
   });  
});
// });
//=== CALLING CANVAS JS CHART AND VOTING FUNCTIONS ======================================================
// renderCanvas();
// $("#cms").empty();
// $("#user").val("");
// $("#question").val("");
// $("#option-one").val("");
// $("#option-two").val("");
// $("#option-three").val("");
// $("#option-four").val("");
//=== VOTING ============================================================================================
// $(document).on("click", "#vote-form", () => {
//
//    fetch("http://localhost:3360/poll", {
//       method: "post",
//       body: JSON.stringify(data),
//       headers: new Headers({
//          "Content-Type": "application/json"
//       })
//    })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err));
//    e.preventDefault();
// });
// voteChart();
//=== CANVAS JS CHART ======================================================================
// function renderCanvas(){
//   const dataPoints = [
//       {label: "option-one", y: 0},
//       {label: "option-two", y: 0},
//       {label: "option-three", y: 0},
//       {label: "option-four", y: 0}
//   ];
//   const chartContainer = document.querySelector("#chartContainer");
//   // taking data and rendring in chart
//   if(chartContainer){
//       // ajax call to get data
//       const chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         theme: "theme1",
//         title: {
//             text: "Bar Results"
//         },
//         data: [
//             {
//               type: "column",
//               dataPoints: dataPoints
//             }
//         ]
//       });
//       chart.render();
//   }
// }