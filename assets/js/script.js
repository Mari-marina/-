let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (document.querySelector(".icon-menu")) {
  document.querySelector(".icon-menu").addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("lock");
    document.documentElement.classList.toggle("menu-open");
  });
}

// if (document.querySelector(".main__wrapper")) {
//   document.querySelector(".main__wrapper").addEventListener("click", function (e) {
//     document.querySelector("body").classList.toggle("lock");
//     document.documentElement.classList.toggle("menu-open");
//   });
// }

const mm = document.querySelector(".mm");
const form1 = document.querySelector(".request__form-mobile");
const form2 = document.querySelector(".request__form-mobile.two");
const formBtn = document.querySelector(".mobile__BTNtext");
const formBtn2 = document.querySelector(".mobile__BTNtext.two");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((element) => {
  element.addEventListener("click", function (e) {
    document.querySelector("body").classList.remove("lock");
    document.documentElement.classList.remove("menu-open");
  });
});

mm.addEventListener("click", function (e) {
  document.querySelector("body").classList.remove("lock");
  document.documentElement.classList.remove("menu-open");
});

// navigation.addEventListener("click", function (e) {
//   document.querySelector("body").classList.remove("lock");
//   document.documentElement.classList.remove("menu-open");
// });

formBtn.addEventListener("click", function (e) {
  formBtn.classList.add("clicked");
  formBtn2.classList.remove("clicked");
  form2.classList.remove("active");
  form1.classList.add("active");
});
formBtn2.addEventListener("click", function (e) {
  formBtn2.classList.add("clicked");
  formBtn.classList.remove("clicked");
  form2.classList.add("active");
  form1.classList.remove("active");
});

//# sourceMappingURL=script.js.map

function myFunction() {
  var element = document.getElementsByClassName("service__wrap");
  element.classList.remove("slick-slide");
}
function myFunction() {
  var element = document.getElementsByClassName("service__wrap");
  element.classList.remove("slick-slide");
}

$("block-edensprings-website-ng-commonform-website-ng-commonform").replaceWith(
  $(
    '<div class="request__wrapper" id="req"> <div class="mobile"> <div class="mobile__wrap"> <botton class="mobile__BTNtext clicked" >Заказать домой</botton> <span>/</span>  <botton class="mobile__BTNtext two">Заказать в офис</botton>  </div>  <form  method="post"  action="/ajax/get_quote_form/75612" class="request__form-mobile active" >  <input type="text" class="request__input" placeholder="Имя"  name="submitted[name]"  />  <input  type="text" class="request__input"  placeholder="Город"  name="submitted[name]" />  <input  type="text" class="request__input" placeholder="Email" name="submitted[name]"  /> <input type="tel" id="tel" class="request__input"  placeholder="Номер телефона"  name="submitted[phone]"  />  <input  type="hidden"  name="submitted[post_code]" value="заглушка город"   />    <input type="hidden"  name="submitted[name_of_the_company]"  value="заглушка компания"   <input  type="hidden"  name="submitted[e_mail]"  value="заглушка почта" />   <input  type="hidden"  name="submitted[topic]"  value="заглушка Колличество сотрудников"   />  <div class="form-desc-con">  <label class="request__form_second-mobile">   <input type="checkbox" name="checkbox" />  <span class="request__form__text-mobile" >Я подтверждаю свое согласие на обработку персональных  данных</span  >  </label>  <button class="request__btn">ЗАКАЗАТЬ ВОДУ</button>  </div>   </form>  <form  method="post" action="/ajax/get_quote_form/75612"   class="request__form-mobile two" >  <input  type="text"  class="request__input"  placeholder="ФИО"  name="submitted[name]"  />  <input  type="tel" class="request__input"   placeholder="Номер телефона"  name="submitted[phone]"  />   <input  type="text" class="request__input" placeholder="Город"  name="submitted[post_code]"  />  <input  type="text" class="request__input" placeholder="Компания"  name="submitted[name_of_the_company]"  />  <input type="text"  class="request__input"  placeholder="Email" name="submitted[e_mail]" />  <input  type="text" class="request__input" placeholder="Колличество сотрудников" name="submitted[topic]"  />  <div class="form-desc-con">   <label class="request__form_second-mobile">  <input type="checkbox" name="checkbox" /><span class="request__form__text-mobile"  >Я подтверждаю свое согласие на обработку персональных данных</span></label> <button class="request__btn">ЗАКАЗАТЬ ВОДУ</button></div></form></div></div>'
  )
);
