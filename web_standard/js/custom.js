    // 라이트박스
    $(".lightgallery").lightGallery({
        thembnail:true,
        autoplay:true,
        pause:3000,
        progressBar:true,
    });

    // 윈도우팝업
    $(".window").click(function(e){
        e.preventDefault();
        // window.open("파일명","팝업이름","옵션설정");
        // 옵션 left top widht height stauts toolbar location menubar scrollbaers fullscreen
    
        window.open("popup.html","popup01","width=800,height=590,left=50,top=50,scrollbar=0,toolbar=0,menubar=0")
    });

    // 레이어팝업
    $(".layer").click(function(e){
    e.preventDefault();
    // $("#layer").css("display","block")
     // $("#layer").show();
    //  $("#layer").fadeIn();
    $("#layer").slideDown();

    });

    $(".close").click(function(e){
    e.preventDefault();
    // $("#layer").css("display","none")
     // $("#layer").show();
    //  $("#layer").fadeOut();
    $("#layer").slideUp();

    
    });

    // 배너
    $(".ban").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:3000,
        dots: true
    });

    // 갤러리
    $(".gallery_img").slick({
        fade: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1
    });
    $(".play").click(function(){
        $(".gallery_img").slick('slickPlay');
    });
    $(".pause").click(function(){
        $(".gallery_img").slick('slickPause');
    });
    $(".prev").click(function(){
        $(".gallery_img").slick('slickPrev');
    });
    $(".next").click(function(){
        $(".gallery_img").slick('slickNext');
    });

    // 버튼 토글
    $(".tit .btn").click(function(e){
        e.preventDefault();
        // $("#cont_nav").css("display","block");
        // $("#cont_nav").show();
        // $("#cont_nav").fadeIn();
        // $("#cont_nav").slideDown();
        // $("#cont_nav").toggle();
        // $("#cont_nav").fadeToggle();
        $("#cont_nav").slideToggle(200);
        $(this).toggleClass("on")
    })

    // 탭메뉴
    var tab = document.querySelectorAll('.tab_menu ul li');
    var tab_list = document.querySelectorAll('.tab_menu ul li ul');

    console.log(tab_list);
    tab[0].addEventListener('click',function(e){
        e.preventDefault();
        tab[8].classList.remove('active');
        tab[4].classList.remove('active');
        tab[0].classList.add('active');
        tab_list[1].style.display = "none"
        tab_list[2].style.display = "none"
        tab_list[0].style.display = "block"
    })
    tab[4].addEventListener('click',function(e){
        e.preventDefault();
        tab[0].classList.remove('active');
        tab[8].classList.remove('active');
        tab[4].classList.add('active');
        tab_list[0].style.display = "none"
        tab_list[2].style.display = "none"
        tab_list[1].style.display = "block"
    })
    tab[8].addEventListener('click',function(e){
        e.preventDefault();
        tab[0].classList.remove('active');
        tab[4].classList.remove('active');
        tab[8].classList.add('active');
        tab_list[0].style.display = "none"
        tab_list[1].style.display = "none"
        tab_list[2].style.display = "block"
    })
    // 줄여야한다.