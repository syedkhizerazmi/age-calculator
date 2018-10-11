var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function runing(){

    document.querySelector(".date").innerHTML = ` ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} - ${d.getUTCHours()} H ${d.getMinutes()}m`;

}

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

