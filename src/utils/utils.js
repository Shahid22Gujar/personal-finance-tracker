import moment from "moment";

function convertDateToDateStr(dateObj,formatStr='YYYY-MM-DD'){
    return moment(dateObj).format(formatStr);
}
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
    dateArray.push(convertDateToDateStr(currentDate));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}
export { getDates,convertDateToDateStr };
