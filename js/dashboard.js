const users = document.getElementById('usersCount');
const sessions = document.getElementById('sessionsCount');
const signups = document.getElementById('signupsCount');

function countUp(element,target,speed){
    let current = 0;
    let step = Math.ceil(target/speed);
    let interval = setInterval(()=>{
        current+=step;
        if(current>=target){
            element.innerText = target;
            clearInterval(interval);
        } else {
            element.innerText = current;
        }
    },50);
}

countUp(users,128,50);
countUp(sessions,75,50);
countUp(signups,23,50);
