function solve(steps, footprintLength, speed){
    let distance = steps * footprintLength
   
   
    let seconds = distance / (speed / 3.6) + Math.floor(distance / 500) *60;
   
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;
 
    console.log(`${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${seconds.toFixed(0).padStart(2, 0)}`);
}