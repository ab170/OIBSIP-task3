let celsius=document.getElementById('celsius');
let fahreneit=document.getElementById('fahreneit');

celsius.oninput=()=> {
  let output=(parseFloat(celsius.value) *9)/5 + 32;
  fahreneit.value=parseFloat(output.toFixed(2));

};

fahreneit.oninput=()=> {
  let output=((parseFloat(fahreneit.value) - 32 )* 5) /9;
  celsius.value=parseFloat(output.toFixed(2));
  console.log(output);
};