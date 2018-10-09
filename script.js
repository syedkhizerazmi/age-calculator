var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function runing(){

    document.querySelector(".date").innerHTML = ` ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} - ${d.getUTCHours()} H ${d.getMinutes()}m`;

}

