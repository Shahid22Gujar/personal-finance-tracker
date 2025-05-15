import moment from "moment";
function getDates(startDate, stopDate) {
  var dateArray = [];
  if (startDate) {
    var currentDate = moment(startDate);
  } else {
    var currentDate = moment();
  }
  if (stopDate) {
    var stopDate = moment(stopDate);
  } else {
    var stopDate = moment();
  }
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}
export { getDates };
