window.onload = function () {
    $('.basket_list').on('click', 'input[type="number"]', function () {
        var t_href = event.target;

        $.ajax({
            url: '/baskets/edit/' + t_href.name + '/' + t_href.value + '/',
            success: function (data) {
                $('.basket_list').html(data.result);
            },
        })
    });

    $('.product_list').on('click', 'div[type="add_item"]', function () {
        var t_href = event.target;

        $.ajax({
            url: t_href.dataset.add_item,
            success: function (data) {
                $('.product_list').html(data.result);
            },
        })
    });
}
