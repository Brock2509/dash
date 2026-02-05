"use strict";
$(document).ready(function() {
    var $window = $(window);
    //add id to main menu for mobile menu start
    var getBody = $("body");
    var bodyClass = getBody[0].className;
    $(".main-menu").attr('id', bodyClass);
    //add id to main menu for mobile menu end

    // card js start
    $(".card-header-right .close-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').animate({
            'opacity': '0',
            '-webkit-transform': 'scale3d(.3, .3, .3)',
            'transform': 'scale3d(.3, .3, .3)'
        });

        setTimeout(function() {
            $this.parents('.card').remove();
        }, 800);
    });

    $(".card-header-right .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-body').slideToggle();
        $(this).toggleClass("fa-window-minimize").fadeIn('slow');
        $(this).toggleClass("fa-plus").fadeIn('slow');
    });
    $(".card-header-right .full-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        port.toggleClass("full-card");
        $(this).toggleClass("fa-maximize");
        $(this).toggleClass("fa-compress");
    });

    $("#more-details").on('click', function() {
        $(".more-details").slideToggle(500);
    });
    $(".mobile-options").on('click', function() {
        $(".navbar-container .nav-right").slideToggle('slow');
    });
    // card js end
    $.mCustomScrollbar.defaults.axis = "yx";
    $("#styleSelector .style-cont").slimScroll({
        setTop: "10px",
        height:"calc(100vh - 440px)",
    });
    $(".main-menu").mCustomScrollbar({
        setTop: "10px",
        setHeight: "calc(100% - 80px)",
    });
    /*chatbar js start*/

    /*chat box scroll*/
    var a = $(window).height() - 80;
    $(".main-friend-list").slimScroll({
        height: a,
        allowPageScroll: false,
        wheelStep: 5,
        color: '#1b8bf9'
    });

    // search
    // Bootstrap 5: .media-body replaced with .flex-grow-1
    $("#search-friends").on("keyup", function() {
        var g = $(this).val().toLowerCase();
        $(".userlist-box .flex-grow-1 .chat-header").each(function() {
            var s = $(this).text().toLowerCase();
            $(this).closest('.userlist-box')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
        });
    });

    // open chat box
    $('.displayChatbox').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat').toggle('slide', options, 500);
    });


    //open friend chat
    $('.userlist-box').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat_inner').toggle('slide', options, 500);
    });
    //back to main chatbar
    $('.back_chatBox').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat_inner').toggle('slide', options, 500);
        $('.showChat').css('display', 'block');
    });
    // /*chatbar js end*/
    $(".search-btn").on('click', function() {
        $(".main-search").addClass('open');
        $('.main-search .form-control').animate({
            'width': '200px',
        });
    });
    $(".search-close").on('click', function() {
        $('.main-search .form-control').animate({
            'width': '0',
        });
        setTimeout(function() {
            $(".main-search").removeClass('open');
        }, 300);
    });
    $('#mobile-collapse i').addClass('icon-toggle-right');
    $('#mobile-collapse').on('click', function() {
        $('#mobile-collapse i').toggleClass('fa-toggle-off');
        $('#mobile-collapse i').toggleClass("fa-toggle-on");
    });
});
$(document).ready(function() {
    // Bootstrap 5 tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $('.theme-loader').fadeOut('slow', function() {
        $(this).remove();
    });
});

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    $('.full-screen').toggleClass('fa-maximize');
    $('.full-screen').toggleClass('fa-arrows-to-dot');
}





document.getElementById("main").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Clear all messages
    document.querySelectorAll(".messages").forEach(m => {
        m.innerText = "";
        m.style.color = "red";
    });

    // Helper function
    function showError(inputId, message) {
        document.getElementById(inputId)
            .closest(".col-sm-10")
            .querySelector(".messages").innerText = message;
        valid = false;
    }

    function showErrorCustom(element, message) {
        element.innerText = message;
        valid = false;
    }

    // Get values
    let regdno = document.getElementById("regdno").value.trim();
    let name = document.getElementById("student_name").value.trim();
    let father = document.getElementById("father_name").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let aadhar = document.getElementById("aadhar").value.trim();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let address = document.getElementById("address").value.trim();

    /* =====================
       BASIC VALIDATION
       ===================== */

    if (regdno === "") showError("regdno", "Registration number required");
    if (name === "") showError("student_name", "Student name required");
    if (father === "") showError("father_name", "Guardian name required");
    if (dob === "") showError("dob", "Date of birth required");

    /* =====================
       EMAIL VALIDATION
       ===================== */
    if (email === "") {
        showError("email", "Email required");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError("email", "Enter valid email");
    }

    /* =====================
       GENDER VALIDATION
       ===================== */
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        let gmsg = document.querySelector('input[name="gender"]')
            .closest(".col-sm-10")
            .querySelector(".messages");
        showErrorCustom(gmsg, "Please select gender");
    }

    /* =====================
       MOBILE VALIDATION
       ===================== */
    if (mobile === "") {
        showError("mobile", "Mobile number required");
    } else if (!/^[0-9]{10}$/.test(mobile)) {
        showError("mobile", "Mobile must be 10 digits");
    }

    /* =====================
       AADHAR VALIDATION
       ===================== */
    if (aadhar !== "" && !/^[0-9]{12}$/.test(aadhar)) {
        showError("aadhar", "Aadhar must be 12 digits");
    }

    /* =====================
       COURSE CHECKBOX VALIDATION
       ===================== */
let course = document.getElementById("course").value;
if (course === "") {
    document.getElementById("course")
        .closest(".col-sm-10")
        .querySelector(".messages").innerText = "Please select a course";
    valid = false;
}

    /* =====================
       PASSWORD VALIDATION
       ===================== */
    if (password.length < 6) {
        showError("password", "Minimum 6 characters required");
    }

    if (password !== cpassword) {
        showError("cpassword", "Password does not match");
    }

    /* =====================
       ADDRESS VALIDATION
       ===================== */
    if (address === "") {
        showError("address", "Address required");
    }

    /* =====================
       FINAL SUBMIT
       ===================== */
    if (valid) {
        alert("Form submitted successfully ✅");
        // this.submit(); // PHP backend ready hone par enable karo
    }
});
