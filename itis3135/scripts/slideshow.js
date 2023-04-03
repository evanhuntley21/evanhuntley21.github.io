$("#my_slideshow a").click(function(event){
    let newURL = $(this).attr("href")
    $("#primary_img").attr("src", newURL)
    
    let newCaption = $(this).attr("title")
    $("#img_caption").text(newCaption)
    event.preventDefault()

    
})