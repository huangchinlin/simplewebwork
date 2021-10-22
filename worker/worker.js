onmessage = (e) => {
  let ret = "";
  switch(e.data.topic) {
    case "1":
      for(let i = 0; i < 100000; i++);
      ret = e.data.result = "ran 1,000,000 times";
      break;
    case "2":
        for(let i=0; i < 500000; i++);
        ret = e.data.result = "ran 1,000,000,000 times";
      break;
    default:
      ret = e.data.result = "do notthing.";
      break;
  }
  
  postMessage(ret);
}
