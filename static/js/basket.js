window.onload = function () {
    $('.product_list').on('click', 'div[type="add_item"]', function () {
        var t_href = event.target;
        axios({
            method: 'get',
            url: t_href.dataset.add_item,
        })
        .then(function (response) {
            console.log(response);
            console.log('Товар добавлен');
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}
