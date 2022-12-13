let words = ['music', 'fashion', 'fun', 'feeling', 'love', 'attraction', 'happiness'], play_word_timer;

let user = document.getElementById('user');
function feed_user() {
    let data = JSON.parse(localStorage.getItem('data'));
    if (signed) {
        user.innerHTML = ` <div class="user-show">
                            <div class="user-pic"><img src="${data.user_profile}" alt="user" id="menu-pic"></div>
                            <div class="username">${data.username}</div>
                        </div>
                        <ul>
                         <li class="options" onclick="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i>LogOut</li>
                        </ul>
                        `
    }
    else {
        user.innerHTML = ` <ul>
                            <li class="options" onclick="sign_in()"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign
                                In</li>
                            <li class="options" onclick="sign_up()"><i class="fa fa-user-plus"
                                    aria-hidden="true"></i>Sign Up</li>
                        </ul>`
    }
}

function sign_in() {
    signin.classList.add('my-playlist');
    setTimeout(() => {
        signin.classList.add('full-width');
        setTimeout(() => {
            signin.children[1].classList.remove('login');
            play_fashion_word(0);
        }, 500);
    }, 500);
}

function play_fashion_word(num) {
    let ind = 0;
    play_word_timer = setInterval(() => {
        ind++;
        if (ind == words.length) ind = 0;
        document.getElementsByClassName('show-off-word')[num].innerText = words[ind];
    }, 1000);
}

function close_signin() {
    signin.children[1].classList.add('login');
    clearInterval(play_word_timer);
    setTimeout(() => {
        signin.classList.remove('full-width');
        setTimeout(() => {
            signin.classList.remove('my-playlist');
        }, 500);
    }, 500);
}


function sign_up() {
    setTimeout(() => {
        signup.classList.add('my-playlist');
        setTimeout(() => {
            signup.classList.add('full-width');
            setTimeout(() => {
                signup.children[1].classList.remove('login');
                play_fashion_word(1);
            }, 500);
        }, 500);
    }, 200);

}

function close_signup() {
    signup.children[1].classList.add('login');
    clearInterval(play_word_timer);
    setTimeout(() => {
        signup.classList.remove('full-width');
        setTimeout(() => {
            signup.classList.remove('my-playlist');
        }, 500);
    }, 500);
}


function goto_login() {
    close_signup();
    setTimeout(() => {
        sign_in();
    }, 900);
}


function goto_logup() {
    close_signin();
    setTimeout(() => {
        sign_up();
    }, 900);
}

function logout() {
    signed = false;
    setTimeout(() => {
        show_menu();
    }, 500);
}

let img_data = "*";
let ele4 = document.getElementById('user-img');
ele4.onchange = function () {
    console.log("with updatd img");
    const imagefiles = ele4.files;
    const image = imagefiles[0];
    var filereader = new FileReader();
    filereader.readAsDataURL(image);
    filereader.onload = function (event) {
        img_data = event.target.result;
        ele4.parentNode.children[0].children[0].setAttribute('src', img_data);
    }
}

