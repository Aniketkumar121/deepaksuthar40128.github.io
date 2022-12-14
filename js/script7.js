let form2 = document.getElementById('form-2');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = {
        username: "user_name",
        email: "email",
        password: "password",
        user_profile: "*"
    }
    let user_name = form2.children[0].value;
    data.username = user_name;
    let user_email = form2.children[2].value;
    data.email = user_email;
    let user_password = form2.children[4].value;
    data.password = user_password;
    if (img_data != '*') {
        data.user_profile = img_data;
    }
    data = JSON.stringify(data);
    localStorage.setItem('data', data);
    close_signup();
    signed = true;
    setTimeout(() => {
        show_menu();
    }, 1000);
})

let form1 = document.getElementById('form-1');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (localStorage.length == 0) {
        show_error('Account Not Exist Please Log Up');
        goto_logup();
    }
    else {
        let user_email = form1.children[0].value;
        let user_password = form1.children[2].value;
        if (localStorage.length == 0) {
            show_error('Account Not Exist');
            return;
        }
        let data = JSON.parse(localStorage.getItem('data'));
        if (data.email == user_email && data.password == user_password) {
            close_signin();
            signed = true;
            setTimeout(() => {
                show_menu();
            }, 1000);
        }
        else show_error('Invalid data');
    }
})


function feed_user_profile(num) {
    let data = localStorage.getItem("data-" + num);
    data = JSON.parse(data);
    user_pro.children[1].innerHTML = `
                   <div class="user-img">
                        <label for="user-img"><img src="${data.user_profile != '*' ? data.user_profile : "img/fake_user.jpg"}" alt="${data.username}"></label>
                        <h2>${data.username}</h2>
                            <p>Email: ${data.email}</p>
                            <p>Last visite: 5hr Ago</p>
                            <div class="btn"><button>SignIn</button></div>
                    </div>`
}