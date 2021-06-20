var xmlHttp = new XMLHttpRequest();
theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
xmlHttp.open("GET", theUrl, true); // false for synchronous request
xmlHttp.send(null);
result = xmlHttp.responseText;
// const sai='{"Status":"Success","Details":"sdbygfhjsgf-sdbj"}'
const mbsa = JSON.parse(result)
console.log(mbsa.Status)