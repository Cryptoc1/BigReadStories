document.getElementById('fButton').onchange = function () {
    if (this.files && this.files[0]) {
        var reader = new FileReader();


        reader.onload = function (e) {
            var img = document.getElementById('uploaded-image')
            img.src = e.target.result;
            if (img.height > img.width) {
                img.style.width = "100%";
                img.style.height = "auto";
            } else {
                img.style.height = "100%";
                img.style.width = "auto";
            }
            img.style.marginLeft = -((img.width / 2) + "px");
        }
        reader.readAsDataURL(this.files[0]);
    }
    var button = document.getElementById('upload');
    var download = document.createElement('a');
    download.id = "dButton";
    download.href = "javascript:download()";
    download.innerHTML = "Save Image";
    document.getElementById('content').replaceChild(download, button);
}

function download() {
    var polaroid = document.getElementById('polaroid-frame');
    polaroid.style.width = "720px";
    polaroid.style.height = "800px";
    document.getElementById('hashtag').style.fontSize = "60pt";
    html2canvas(polaroid, {
        onrendered: function (canvas) {
            var link = document.createElement('a');
            link.setAttribute('download', 'polaroid.png');
            link.setAttribute('href', 'data:' + canvas);
            link.click();
            window.location.reload();
        }
    });
}