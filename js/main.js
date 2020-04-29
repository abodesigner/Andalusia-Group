$(document).ready(function () {

  let date = new Date();
  $("#year").text(date.getFullYear());

  // smooth scroll
  // $("a[href^='#']").on("click", function (e) {
  //   e.preventDefault();
  //   const target = $(this).attr('href');
  //   $('html, body').animate({
  //     scrollTop: $(target).offset().top
  //   }
  //     , 800, 'linear');
  // });


  // init slick slider
  $('.our-partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  /**
   * Executives Mangaer Part
   */
  let img1 = document.getElementById('image1');
  let img2 = document.getElementById('image2');
  let img3 = document.getElementById('image3');
  let img4 = document.getElementById('image4');


  let content1 = document.getElementById("content1");
  let content2 = document.getElementById("content2");
  let content3 = document.getElementById("content3");
  let content4 = document.getElementById("content4");


  img1.addEventListener("click", function (e) {
    content1.classList.add("current");
    content1.classList.remove("hidden");
    content2.style.display = "none";
    e.preventDefault();
  });

  img2.addEventListener("click", function (e) {
    content1.classList.remove("current");
    content1.classList.add("hidden");
    content2.style.display = "block";
    e.preventDefault();
  });

  img3.addEventListener("click", function (e) {
    content3.classList.add("current");
    content1.classList.remove("current");
    content2.classList.remove("current");
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";

    e.preventDefault();
  });

  img4.addEventListener("click", function (e) {
    content4.classList.add("current");
    content1.classList.remove("current");
    content2.classList.remove("current");
    content3.classList.remove("current");

    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";

    e.preventDefault();
  });










});
