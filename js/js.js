$(function(){
    var fbslide = 0;
    $(".facebook, .spotify, .soundcloud, .youtube").click(function() {
        //alert(fbslide);
        if (fbslide == 0) {
            $(".iframe-from-fb").animate({ left: "0px" }, 300);
            $(".icon-bar").animate({ marginLeft: "340px" }, 300);

            fbslide = 1;
        } else {
            $(".iframe-from-fb").animate({ left: "-340px" }, 300);
            $(".icon-bar").animate({ marginLeft: "0" }, 300);

            fbslide = 0;
        }
    });

});

$(function(){

    $("img").delay(6000).fadeIn(2000);

});


$(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/sk_SK/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// bg lines
$(function(){
var c = document.createElement('canvas'),
    $ = c.getContext('2d'),
    w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    p = {
        x: w / 2,
        y: h / 2
    };

document.body.appendChild(c);

function init() {
    stage();
    loop();
}

function stage() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    $.fillStyle = 'black';
    $.fillRect(0, 0, w, h);
}

function step() {
    var s = Math.random() * 100,
        a = ~~(Math.random() * 360);
    $.beginPath();
    $.moveTo(p.x, p.y);
    $.lineWidth = 100;
    $.lineJoin = 'round';
    $.lineCap = 'round';
    $.strokeStyle = 'rgb(218, 50, 50)';
    p.x += s * Math.sin(a);
    p.y += s * Math.cos(a);
    return p;
}

function stepStage() {
    $.fillStyle = 'rgba(0, 0, 0, 0)';
    $.fillRect(0, 0, w, h);
}

function draw() {
    stepStage();
    var n = step();
    $.lineTo(n.x, n.y);
    if (n.x < 0 || n.x > w) n.x = Math.random() * w;
    if (n.y < 0 || n.y > h) n.y = Math.random() * h;
    $.stroke();
}

function loop() {
    requestAnimationFrame(loop);
    draw();
}

window.addEventListener('resize', stage);

init();
});

//video
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
    console.log('skipping');
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.value);
    console.log(this.name);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

/* pop up video
$(function() {
    $('.video-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});*/
//slid
$(document).ready(function(){
    $("#btn").click(function(){
        $("#video").slideToggle("slow");
    });
});
