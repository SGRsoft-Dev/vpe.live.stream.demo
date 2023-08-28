window.player = null;

const dashUrl = 'https://cmafref.akamaized.net/cmaf/live-ull/2006350/akambr/out.mpd';
const hlsUrl = 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';

window.srcUrl = hlsUrl;

const changeUrl = (type)=>{
    window.player.destroy();
    window.srcUrl = type === 'dash' ? dashUrl : hlsUrl;
    setup();

}

window.changeUrl = changeUrl;

const setup = ()=>{
    window.player = new ncplayer('player',{
        playlist:[
            {
                file:window.srcUrl,
            }
        ],
        autostart:true,
        muted:true,
        lowLatencyMode:true
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setup();
});
