/*
NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. 
During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
*/

let seconds = 60;
while (seconds >= 0){
    switch (seconds)
    {
        case 51: 
            console.log("T-51 seconds - Orbiter transfers from ground to internal power");
            break;
        case 31:
            console.log("T-31 seconds - Ground launch sequencer is go for auto sequence start");
             break;
        case 16:
             console.log("T-16 seconds - Activate launch pad sound suppression system ");
             break;
        case 10:
             console.log("T-10 seconds -  Activate main engine hydrogen burnoff system ");
             break;
        case 6:
             console.log(" T-6 seconds -  Main engine start");
             break;
        case 0:
             console.log("T-0 seconds - Solid rocket booster ignition and liftoff!");
             break;
        default:
            console.log("T-"+seconds+" seconds") ;
    }

    seconds--;
}