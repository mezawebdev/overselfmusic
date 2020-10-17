Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function(number) {
    return this.monthNames[number];
};

Date.prototype.getShortMonthName = function (number) {
    return this.monthNames[number].substr(0, 3);
};