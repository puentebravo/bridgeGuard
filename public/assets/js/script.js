$(function () {
  const answerButton = $("#aButton");

  console.log("This is working.");

  answerButton.on("click", () => {
    let colorA = $("#colorAns").val();
    let nameA = $("#nameAns").val();
    let sparrowA = $("#sparrowAns").val();
    console.log("this was clicked");
    console.log(sparrowA);
    if (sparrowA !== "african or european") {
      alert(`${nameA}, you have failed! *Harried flinging noises*`);
    } else {
      alert(`${nameA}, favoring the color of ${colorA}, you may pass.`);
    }
  });
});
