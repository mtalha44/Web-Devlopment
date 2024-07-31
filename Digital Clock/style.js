function clock(){
    let day = new Date;
    var monthNames = [ "January" ,"February" , "March" , "April" , "May" , "June" , "July" ,"August" ,"Septmber" , "October" , "November" , "December" ];
    var dayNames = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]  ;
    document.querySelector(".day").innerText =  ( dayNames[day.getDay()] + " " +  monthNames[day.getMonth()] + " " + day.getFullYear() ) ;
    
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    
    let timePeriod = h < 11 ? "AM" : "PM" ; //    let timePeriod = h >= 12 ? "PM" : "AM";
    h = h > 12 ? h % 12 : h;
    h  =  h<10 ? "0"+h : h; 
    m  =  m<10 ? "0"+m : m; 
    s  =  s<10 ? "0"+s : s; 
    
    document.querySelector(".time").innerHTML = h + ":" + m + ":" + s + " " + timePeriod;
}
var interval = setInterval(clock,400);
















// setInterval(()=>{
//     let day = new Date;
//     var monthNames = [ "January" ,"February" , "March" , "April" , "May" , "June" , "July" ,"August" ,"Septmber" , "October" , "November" , "December" ];
//     var dayNames = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]  ;
//     document.querySelector(".day").innerHTML =  ( dayNames[day.getDay()] + " " +  monthNames[day.getMonth()] + " " + day.getFullYear() ) ;
// },400)