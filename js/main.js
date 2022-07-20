$(function () {
    const slide = $('.slider .slide');

    function setSlideClasses(class1, class2, class3, class4) {
        slide.removeClass('size-1 size-2 size-3 size-4');
        slide.eq(0).addClass(class1);
        slide.eq(1).addClass(class2);
        slide.eq(2).addClass(class3);
        slide.eq(3).addClass(class4);
    }

    function setSlideSize(slideNumber) {
        switch (slideNumber) {
            case 1:
                setSlideClasses('size-1', 'size-2', 'size-3', 'size-4');
                break;
            case 2:
                setSlideClasses('size-3', 'size-1', 'size-2', 'size-4');
                break;
            case 3:
                setSlideClasses('size-4', 'size-2', 'size-1', 'size-3');
                break;
            case 4:
                setSlideClasses('size-4', 'size-3', 'size-2', 'size-1');
                break;
        }
    }

    slide.on('click', function (e) {
        const slideNumber = $(this).attr('data-type');
        setSlideSize(parseInt(slideNumber));
    });
    setSlideSize(2);
});