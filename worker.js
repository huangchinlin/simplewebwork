onmessage = (e) => {
  let ret = JSON.stringify(e.data);
  postMessage(ret);
}