$(document).ready(function () {

  let date = new Date();
  $("#year").text(date.getFullYear());

  $('#main-slider').carousel({
    interval: 800
  })

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
    autoplaySpeed: 500
  });

  /**
   * Executives Mangaers Section
   */
  let img1 = document.getElementById('image1'),
    img2 = document.getElementById('image2'),
    img3 = document.getElementById('image3'),
    img4 = document.getElementById('image4');


  let wrapper = document.getElementById("wrapper"),
    content1 = document.getElementById("content1"),
    content2 = document.getElementById("content2"),
    content3 = document.getElementById("content3"),
    content4 = document.getElementById("content4");


  img1.addEventListener("click", function (e) {


    if (content1.classList.contains('hidden')) {

      content1.classList.remove("hidden");
      content1.classList.add("active");

      wrapper.classList.remove("active");
      wrapper.classList.add("hidden");

      content2.classList.add("hidden");
      content2.classList.remove("active");

      content3.classList.add("hidden");
      content3.classList.remove("active");

      content4.classList.add("hidden");
      content4.classList.remove("active");

    }

    e.preventDefault();
  });

  img2.addEventListener("click", function (e) {

    if (content2.classList.contains('hidden')) {

      content2.classList.remove("hidden");
      content2.classList.add("active");

      wrapper.classList.remove("active");
      wrapper.classList.add("hidden");

      content1.classList.add("hidden");
      content1.classList.remove("active");

      content3.classList.add("hidden");
      content3.classList.remove("active");

      content4.classList.add("hidden");
      content4.classList.remove("active");
    }
    e.preventDefault();
  });

  img3.addEventListener("click", function (e) {

    if (content3.classList.contains('hidden')) {

      content3.classList.remove("hidden");
      content3.classList.add("active");

      wrapper.classList.remove("active");
      wrapper.classList.add("hidden");

      content1.classList.add("hidden");
      content1.classList.remove("active");

      content2.classList.add("hidden");
      content2.classList.remove("active");

      content4.classList.add("hidden");
      content4.classList.remove("active");
    }


    e.preventDefault();
  });

  img4.addEventListener("click", function (e) {

    if (content4.classList.contains('hidden')) {

      content4.classList.remove("hidden");
      content4.classList.add("active");

      wrapper.classList.remove("active");
      wrapper.classList.add("hidden");

      content1.classList.add("hidden");
      content1.classList.remove("active");

      content2.classList.add("hidden");
      content2.classList.remove("active");

      content3.classList.add("hidden");
      content3.classList.remove("active");
    }

    e.preventDefault();
  });

  /**
   * JS Counter in statistics Section
   */

  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach(counter => {

    const updateCounter = () => {
      const target = Number.parseInt(counter.getAttribute('data-target'));

      const count = Number.parseInt(counter.innerText);

      const inc = target / speed;

      if (count < target) {

        counter.innerText = count + inc;

        setTimeout(updateCounter, 1);

      } else {

        count.innerText = target;
      }

    }

    updateCounter();
  })










});
