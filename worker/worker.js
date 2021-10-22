onmessage = (e) => {
  let ret = ""; 
  
  switch(e.data.topic) {
    case "1":
      for(let i = 0; i < 10000; i++)
        ret = "case 1: ran " + String(i + 1) + " times";
      
      e.data.result = String(Date.now()) + ", " + ret;
      console.log(e.data);
      break;
    case "2":
      for(let i = 0; i < 50000; i++)
        ret = "case 2: ran " + String(i + 1) + " times";
      
      e.data.result = String(Date.now()) + ", " + ret;
      console.log(e.data);
      break;
    default:
      e.data.result = String(Date.now()) + ", do notthing.";
      console.log(e.data);
      break;
  }
  
  postMessage(e.data);
}
