import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(e.seconds));
}

setCurrentTime();

function setCurrentTime(){
    if(!localStorage.getItem(CURRENT_TIME)){
        return
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME))
}

