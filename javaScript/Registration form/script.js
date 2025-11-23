function submit() {
  let selectedBatchTiming = [];
  document.querySelectorAll("input[name='batch']:checked" , "input[name='fullName']:checked " ,"input[name='email']:checked " ,"input[name='mobile']:checked ","input[name='dob']:checked ","input[name='qualification']:checked " ,"input[name='score']:checked ")
  .forEach(() => {
    selectedBatchTiming.push(Element.value);
  });
  console.log(selectedBatchTiming);

  //   const selectedBatch = batch.forEach()
}
