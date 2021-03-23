$(function() {
    'use static';
    // navbar::
    let navLink = $(".navleft ul li a");
    for (let index = 0; index < navLink.length; index++) {
        // when click on link add active class 
        navLink.eq(index).on('click',function(){
            $(".link").removeClass("active");
            $(this).addClass("active");
        });
    }
    // Active Mobile Navbar and Sidebar 
    let navleftbtn = $(".list"),
        btnsidebar = $(".menu"),
        done = $(".done");
        navleftbtn.on("click", function (){
            $(".navleft").addClass('activenav');
            $(".navleft").removeClass('removenav');
            $(".sidebar").css({"right":"-1500px","transition":".5s ease-out"});
        });
        btnsidebar.on("click", function (){
            $(".navleft").removeClass('activenav');
            $(".sidebar").css({"right":"0","z-index":"2000","width":"70%","box-shadow":"0 0 20px #eee"});
        });
        done.on("click", function (){
            $(".navleft").removeClass('activenav');
            $(".navleft").addClass('removenav');
            $(".sidebar").css({"right":"-500px","transition":".5s ease-out"});
        });
        // sidebar for tablet and laptops 
        $(".pushright").on("click",function(){
            $(".sidebar").toggleClass("activesidebar")
        });
        // Darkmode Active 
        $(".moon").on("click",function (){
            // check if the darmode class in the local storage or not !
            localStorage.setItem("dark","darkmode")
            // add class from body 
            $("body").addClass("darkmode");
            $(this).addClass("activeMoon");
        });
        // active body darkmode 
        if(localStorage.getItem("dark")) {
            $("body").toggleClass(localStorage.getItem("dark"));
            $(".moon").addClass("activeMoon");
        }
        // when activeMoon click do this : 
        $(".activeMoon").on("click",function (){
            // active button
            $(this).removeClass("activeMoon");
            // check if the darmode class in the local storage or not !
            localStorage.removeItem("dark");
            // remove class from body 
            $("body").removeClass("darkmode");
        });
    // end nabbar::
    // post::
    // When i click textarea change sizeing 
    $(".creatPost .problems").on("click",function(){
        // show control 
        $(".creatPost .control").attr("hidden",false);
        // change size textarea 
        $(this).css({"height":"70px","marginBottom":"10px"});
    });

    // when ignore post do this 
    $(".creatPost").on("mouseleave",function(){
        // hidden control 
        $(".creatPost .control").attr("hidden",true);
        // change size textarea 
        $(".creatPost .problems").css({"height":"42px","marginBottom":"0"});
    });

    // When Writing on post change btn attr 
    $(".creatPost .problems").on("keydown",function(){
        // check if the text number bigger than 
        if($(this).val().length > 2){
            // make this btn enable
            $(".creatPost .control .sharepost").attr("disabled",false);
        } else {
            // make this btn disabled
            $(".creatPost .control .sharepost").attr("disabled",true);
        }
    });
    // End Post::
    // invite page 
    $(".inbtncode").on('click',function(){
        const inviteCode = 456231;
        $(this).css({"opacity":".7"});
        $(this).html("waiting...");
        $(".inload").attr("hidden",false);
        if($(".incode").val() == inviteCode){
            $(".incode").css({"opacity":".7"});
            $(this).css({"opacity":"1"});
            $(this).html("Done");
            $(".incode").css({"background":"#c4e5ff"});
            $(".inload").attr("hidden",true);
        }
        
    });
    // post show page 
    const starPostComments = $(".content-area .professional_comment");
    // for loop all start 
    for (let index = 0; index < starPostComments.length; index++) {
        starPostComments.eq(index).on("click",function(){
            // add active class 
            $(this).addClass("activeStar");
            console.log(starPostComments.eq(index));
        });
    }
    // # end post show page 
    // profile page 
    // active following 
    $(".follow").on("click",function () {
        // active btn 
        $(this).toggleClass("activeFolw");
        // replace icon 
        $(".fa-plus").replaceWith("<i class='fas fa-check'></i>");
    });
    // end profile page 
    // plugins 
    // nice Select 
    $('.selectPost').niceSelect();
    // load posts more 
    $('.homePosts').simpleLoadMore({
          item:'.post',
          count: 5
    });
    // load profile post 
    $('.allActives').simpleLoadMore({
        item:'.post',
        count: 3
    });
    // loading - login - sign 
    setInterval(function() {
        $('.login-btn').loading('toggle');
        $(".sign").loading('toggle');
    }, 2000); 
    
    

});