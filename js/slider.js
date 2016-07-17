 $(document).ready(function(){
        $('.example-animation').DrSlider({
             width: 1850,
        height: 650,
        userCSS: false,
        transitionSpeed: 1000,
        duration: 8000,
        showNavigation: true,
        classNavigation: undefined,
        navigationColor: '#9F1F22',
        navigationHoverColor: '#D52B2F',
        navigationHighlightColor: '#DFDFDF',
        navigationNumberColor: '#000000',
        positionNavigation: 'out-center-bottom',
        navigationType: 'circle',
        showControl: true,
        classButtonNext: undefined,
        classButtonPrevious: undefined,
        controlColor: '#FFFFFF',
        controlBackgroundColor: '#000000',
        positionControl: 'left-right',
        transition: 'slide-left',
        showProgress: true,
        progressColor: '#797979',
        pauseOnHover: true,
        onReady: undefined
     }); //Yes! that's it!
});