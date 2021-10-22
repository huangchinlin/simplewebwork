onmessage = (e) => {
  console.log(e);
  let ret = JSON.stringify(e.data);
  postMessage(ret);
}
