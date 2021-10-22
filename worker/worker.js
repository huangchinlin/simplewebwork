onmessage = (e) => {
  let ret = "";
  switch(e.data.topic) {
    case "1":
      for(let i = 0; i < 10000; i++);
      ret = e.data.result = "case 1: ran 10,000 times";
      console.log(ret);
      break;
    case "2":
      for(let i=0; i < 50000; i++);
      ret = e.data.result = "case 2: ran 50,000 times";
      console.log(ret);
      break;
    default:
      ret = e.data.result = "do notthing.";
      break;
  }
  
  postMessage(ret);
}
