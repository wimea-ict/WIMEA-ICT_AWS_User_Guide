var A = function (id, images) {
    var content = document.getElementById(id);
    var image_length = images.length;
    this.play = function () {
        for (var i=0; i<image_length;i++){
            if (images[i].startAfter > 0){
                $("#img"+i).delay(images[i].startAfter).animate({left:"+"+images[i].stopPosition}, images[i].speed);
            }
            else{
                $("#img"+i).animate({left:"+"+images[i].stopPosition}, images[i].speed);
            }
        }
    };

    this.pause = function () {
        $(".mya").dequeue().stop();
    };

    this.stop = function () {
            $(".mya").dequeue().stop();
            $(".mya").css('left',0);
    };

    this.load = function () {
        for (var i=0; i<image_length;i++){
            inner = document.createElement("div");
            // inner.className = "row";
            inner.id = "img"+i;
            inner.className = "mya";
            img = document.createElement("img");
            img.src = images[i].src;
            img.style.width = images[i].width;
            img.style.height = images[i].height;
            inner.appendChild(img);
            inner.style.position = "relative";
            content.appendChild(inner);
        }


    };

};
