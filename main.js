const obj = { nextItem: 51 };
$(document).ready(function () {

    $(".items div").click(removeItem)

    $(".btn").click(() => addItem());

});

const removeItem = function () {
    $(this).fadeOut();
}

const addItem = function () {

    const { nextItem } = obj;
    $(".items").append(`<div id="${nextItem}" style="display: none;"><img src="https://picsum.photos/id/${nextItem - 1}/400/200" alt=""><span>picture ${nextItem}</span></div>`);
    $(`#${nextItem}`).fadeIn();
    $(`#${nextItem}`).click(removeItem);
    obj['nextItem']++;
    
    scrollDown();

}
const scrollDown = () => {
    // $(".container").animate({ scrollTop: $('.container').prop("scrollHeight")}, 1000);
    $(".container").animate({ scrollTop: $('.items').height()}, 1000);
}



