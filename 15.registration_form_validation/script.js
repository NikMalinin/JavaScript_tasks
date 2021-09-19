
$(document).ready(function () {
    $('.btn_registration').on('click', function () {
        var firstName = $('.first_name').val();
        var lastName = $('.last_name').val();
        var mail = $('.mail').val();
        var login = $('.login').val();
        var password = $('.password').val();
        var city = $('.city').val();
        var work = $('.namework').val();

        var birthday = $('.birthday').val(); // Дата рождения
        birthday = new Date(birthday);
        var now = new Date(); //Текущя дата
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
        var birthdayNow = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()); //ДР в текущем году
        var age = today.getFullYear() - birthday.getFullYear();

        if (firstName.length <= 0 || firstName > 30) {
            $('.first_name').addClass('is-invalid');
        }
        else if (lastName.length <= 0 || lastName > 30) {
            $('.last_name').addClass('is-invalid');
        }
        else if (mail.length <= 0) {
            $('.mail').addClass('is-invalid');
        }
        else if (login.length <= 0) {
            $('.login').addClass('is-invalid');
        }
        else if (password.length < 4) {
            $('.password').addClass('is-invalid');
        }
        else if (city.length <= 0 || city > 30) {
            $('.city').addClass('is-invalid');
        }
        else if (work.length <= 0 || work > 30) {
            $('.namework').addClass('is-invalid');
        }
        else if (today < birthdayNow) {
            age = age - 1;
        }
        else if (age < 16 || isNaN(age)) {
            swal({
                title: "Внимание!",
                text: "Регистрация возможна только при достижении 16и лет!",
                icon: "error",
            });
        }
        else {
            swal({
                title: "Поздравляем!",
                text: "Вы успешно зарегистрированы!",
                icon: "success",
            });
        }

        //if valid do ajax

    });
});


