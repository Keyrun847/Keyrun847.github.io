$(document).ready(function () {
            $(document).click(function (event) {
                var click = $(event.target);
                var _open = $(".navbar-collapse").hasClass("show");
                if (_open === true && !click.hasClass("navbar-toggler")) {
                    $(".navbar-toggler").click();
                }
            });
        });
$(document).ready(function(){
            $('.hi').waypoint(function(direction){
                $('.hi').addClass('animated fadeInLeft')
            },{
                offset: '50%'
            });
            $('.we').waypoint(function(direction){
                $('.we').addClass('animated fadeInLeft')
            },{
                offset: '50%'
            });
            $('.backbenchers').waypoint(function(direction){
                $('.backbenchers').addClass('animated fadeInLeft')
            },{
                offset: '80%'
            });
        });