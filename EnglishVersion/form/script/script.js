// console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+380 (99) 999-999-9');
inputMask.mask(telSelector);


// const form = document.querySelector('.form');
// const telSelector = form.querySelector('input[type="text"]');
// const inputMask = new InputMask('99999999');
// inputMask.mask(telSelector);

// validate
new window.JustValidate('.form', {

  rules:{
    checkbox: {
      required: true,
    },
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        // console.log(phone);
        return Number(phone) && phone.length === 9;
      }
    },

    num: {
      required: true,
    },
    name: {
      required: true,
      maxLength: 50,
    }
  },
  colorWrong: 'rgba(244, 36, 36, 0.40)',

  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);
    let xhr = new XMLHttpRequest();


    // $('.open-popup').click(function (e){
    //   e.preventDefault();
    //   $('.popup-bg').fadeIn(600);
    // });
    // $('.close-popup').click(function (){
    //   $('.popup-bg').fadeOut(600);
    // });

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {

        if (xhr.status === 200) {

          // alert("Hello world!");
          swal("Дякую!", "Ваша заявка була прийнята!", "success");
          // alert('Hello!');



          // let btnPrimary = document.querySelector('#primary');
          //   btnPrimary.addEventListener('click', () => btnPrimary.style.backgroundColor='green');


          // console.log('Отправлено');
          // console.log('init');

        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
    // $('.open-popup').click(function (e){
    //   e.preventDefault();
    //   $('.popup-bg').fadeIn(600);
    // });
    // $('.close-popup').click(function (){
    //   $('.popup-bg').fadeOut(600);
    // });
  }
  // submitHandler: function (){

  // }
})
