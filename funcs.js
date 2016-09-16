
    function loadimages(imgurls, done){

      function waitimages(){
        var loaded=false;
        for (var i = image.length - 1; i >= 0; i--) {
          loaded=loaded||image[i].complete
        }
        if(images[0].complete){


          finished(done);


          
        }else{
          window.setTimeout(waitimages, 100);
        }
     }
      images=[];
      var image;
      for (var i =0; i < imgurls.length ; i++) {
        image = new Image();
         image.src=imgurls[i];
         images.push(image);
      }

      waitimages();
    
    function finished(done){
      var imgdatacan = document.createElement("Canvas") 
      var imgdatacandat=imgdatacan.getContext("2d")   
      imgdatacan.width=images[0].width;
      imgdatacan.height=images[0].height;
      imgdatacandat.drawImage(images[0],0,0)
      document.body.appendChild(imgdatacan);
      console.log(imgdatacandat.getImageData(0,0,imgdatacan.width,imgdatacan.height))

      done();


    }
  }
    loadimages(["1.png"],loaded);
    function loaded(){
      var can=document.getElementById("gamecanvas");
      var canpad=can.getContext("2d")

      canpad.drawImage(images[0],0,0)
}
