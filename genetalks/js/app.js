/*
 * Please see the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// See app.initEvents() in init-app.js for event initialization.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

document.addEventListener("intel.xdk.device.barcode.scan", barcodeScanned);
function barcodeScanned(evt) {
    if (evt.type == "intel.xdk.device.barcode.scan") {
        if (evt.success === true) {
            var url = evt.codedata;
            alert('url='+url);
            //intel.xdk.device.showRemoteSite(url, 264, 0,56, 48)
        } else {
             alert('scan cancelled');
          //scan cancelled
        }
    }
}


function QRscan() {
  intel.xdk.device.scanBarcode();
}

document.addEventListener("intel.xdk.camera.picture.add",onSuccess); 

function capturePhoto() {
  intel.xdk.camera.takePicture(50,false,"jpg");
}

function onSuccess(evt) {

  if (evt.success === true)
  {
    // create image 
    var image = document.createElement('img');
    image.src=intel.xdk.camera.getPictureURL(evt.filename);
    image.id=evt.filename;
    document.body.appendChild(image);
  }
  else
  {
    if (evt.message !== undefined)
    {
        alert(evt.message);
    }
    else
    {
        alert("error capturing picture");
    }
  }
}

//Get the image to upload

//function upload(){
//intel.xdk.file.uploadToServer(intel.xdk.camera.takePicture(50,false,"jpg"),"http://www.yourserver.com/uploadImage.php", "", "image/jpeg", "updateUploadProgress");
//}

//function updateUploadProgress(bytesSent,totalBytes)
//{
//   if(totalBytes>0)
//        currentProgress=(bytesSent/totalBytes)*100;
//   document.getElementById("progress").innerHTML=currentProgress+"%";
//}
//
//document.addEventListener("intel.xdk.file.upload.busy",uploadBusy);
//document.addEventListener("intel.xdk.file.upload",uploadComplete);
//document.addEventListener("intel.xdk.file.upload.cancel",uploadCancelled);
//
//function uploadBusy(evt)
//{
//   alert("Sorry, a file is already being uploaded");
//}
//
//function uploadComplete(evt)
//{
//   if(evt.success===true)
//   {
//      alert("File "+evt.localURL+" was uploaded");
//   }
//   else {
//      alert("Error uploading file "+evt.message);
//   }
//}
//
//function uploadCancelled(evt)
//{
//    alert("File upload was cancelled "+evt.localURL);
//}

    function search() {
        //alert('search!');
        $.ajax({
            type: "post",
            url: "http://www.aikuaidi.cn/query/",
            data: {
                "order": '718665293923',
                "id": 'zhongtong'
            },
            dataType: "json",
            success: function(obj) {
                alert('121212121');
                alert(obj.data[0].time+"-----");
            },
            beforeSend: function() {
                //alert('beforeSend');
            },
            error: function(err) {
               alert(err.getContent+'err');
            }
        });
    }