onmessage = (e) => {
  let ret = e.data;
  postMessage(ret);
}
