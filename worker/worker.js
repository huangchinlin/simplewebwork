onmessage = (e) => {
  switch(e.data.topic) {
    case "1":
      for(let i = 0; i < 10000; i++);
      e.data.result = "case 1: ran 10,000 times";
      console.log(e.data);
      break;
    case "2":
      for(let i=0; i < 50000; i++);
      e.data.result = "case 2: ran 50,000 times";
      console.log(e.data);
      break;
    default:
      e.data.result = "do notthing.";
      break;
  }
  
  postMessage(e.data);
}
