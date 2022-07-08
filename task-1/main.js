const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let str = result

  let arr = str.split(',');

  for (let i = 0; i < arr.length; i++){
      arr[i] = parseInt(arr[i])
  }

  let min = arr[0]

  for (let i of arr) {
      if (i < min) {
          min = i
      }
  }
  console.log(min)
  
});
