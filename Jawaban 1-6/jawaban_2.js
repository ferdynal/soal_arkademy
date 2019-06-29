// Pada sebuah form, terdapat 4 buah field  yaitu: 
// email, phone, username dan password.Buatlah method / function untuk memvalidasi field - field tersebut, 
// dengan requirement sebagai berikut:
// Disarankan menggunakan REGEX
// Format email: sesuai email(satu atau lebih huruf sebelum dan sesudah simbol “@” dan domain minimal 2 huruf ).
// Format phone: harus angka dan diawali “+62” dengan panjang 8 - 15 karakter.
// Format username: kombinasi hanya huruf kecil dengan panjang 5 - 9 karakter.
// Format password: merupakan kombinasi dari huruf kecil, huruf besar, angka, dan karakter spesial minimal satu simbol 
// dan harus terdapat simbol “#”.
// Dengan panjang minimal 8 karakter.
//     Clue:
// Peserta hanya diminta membuat function validasi, tidak perlu membuat form HTML.


function is_username_valid(username) {
    const regex = new RegExp('^[a-z].{5,8}$');
    if(regex.test(username)){
        return true;
    }else{
        return false;
    }
}

function is_email_valid(email) {
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(regex.test(email)){
        return true;
    }else{
        return false;
    }
}

function is_phone_valid(phone) {
    const regex = new RegExp(/^\+?\d.\s?\(?\d{3}\)?\d{4}\d{4}?/);
    if(regex.test(phone)){
        return true;
    }else{
        return false;
    }

}

function is_password_valid(password) {
    const regex = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);
    if(regex.test(password)){
        return true;
    }else{
        return false;
    }

}

console.log(is_username_valid('username'));
console.log(is_phone_valid("+6281255215224"));
console.log(is_email_valid('email@email.com'));
console.log(is_password_valid('p4s5W0!2d'));