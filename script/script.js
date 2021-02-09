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
            $('.first').waypoint(function(direction){
                $('.first').addClass('animated fadeInUp')
            },{
                offset: '50%'
            });
            $('.second').waypoint(function(direction){
                $('.second').addClass('animated fadeInUp')
            },{
                offset: '50%'
            });
            $('.line').waypoint(function(direction){
                $('.line').addClass('animated zoomIn')
            },{
                offset: '60%'
            });
            $('tr').waypoint(function(direction){
                $('tr').addClass('animated flipInX')
            },{
                offset: '50%'
            });
            $('.card1').waypoint(function(direction){
                $('.card1').addClass('animated rotateInDownLeft')
            },{
                offset: '50%'
            });
            $('.card2').waypoint(function(direction){
                $('.card2').addClass('animated rotateInDownRight')
            },{
                offset: '50%'
            });
            $('.about-text').waypoint(function(direction){
                $('.about-text').addClass('animated zoomIn')
            },{
                offset: '50%'
            });
            $('.video').waypoint(function(direction){
                $('.video').addClass('animated zoomIn')
            },{
                offset: '50%'
            });
            $('.contactnum').waypoint(function(direction){
                $('.contactnum').addClass('animated zoomIn')
            },{
                offset: '50%'
            });
            $('.address').waypoint(function(direction){
                $('.address').addClass('animated zoomIn')
            },{
                offset: '50%'
            });
            $('.whatsapp').waypoint(function(direction){
                $('.whatsapp').addClass('animated zoomIn')
            },{
                offset: '50%'
            });
        });