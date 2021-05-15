function send() {
    var d = document.getElementById('webhooks').value
    d.split('\n').forEach(url => {
        $.ajax({
            type: "POST",
            url: url,
            data: {
                content: document.getElementById('text').value
            }
        })
    })
    setInterval(() => {
        d.split('\n').forEach(url => {
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    content: document.getElementById('text').value
                }
            })
        })
    }, parseInt(document.getElementById('delay').value))

}