onmessage = (e) => {
  console.log(e);
  let ret = JSON.stringify(e.data);
  console.log(ret);
  postMessage(ret);
}
