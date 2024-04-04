/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create multiple employee records
function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
}

// Function to create time in event
function createTimeInEvent(dateString) {
    const [date, hour] = dateString.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

// Function to create time out event
function createTimeOutEvent(dateString) {
    const [date, hour] = dateString.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour;
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour;
    return (timeOut - timeIn) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// Function to find employee by first name
function findEmployeeByFirstName(collection, firstName) {
    return collection.find(employee => employee.firstName === firstName);
}

// Function to calculate total payroll burden
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
