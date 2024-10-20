function composite(BackGround, ForeGround, ForeGroundOpacity, ForeGroundPosition) {

    var BackGroundData = BackGround.data; 
    var ForeGroundData = ForeGround.data; 
    var width = BackGround.width; 
    var height = BackGround.height; 


    for (var y = 0; y < ForeGround.height; y++) {
        for (var x = 0; x < ForeGround.width; x++) {
            var bgX = x + ForeGroundPosition.x;
            var bgY = y + ForeGroundPosition.y;

            
            if (bgX >= 0 && bgX < width && bgY >= 0 && bgY < height) {
                var fgIndex = (y * ForeGround.width + x) * 4; 
                var bgIndex = (bgY * width + bgX) * 4; 

                
                var alpha = ForeGroundData[fgIndex + 3] * (ForeGroundOpacity / 255);
                var invAlpha = 1 - alpha;

                for (var i = 0; i < 3; i++) {
                    BackGroundData[bgIndex + i] = Math.round(
                        ForeGroundData[fgIndex + i] * alpha +
                        BackGroundData[bgIndex + i] * invAlpha
                    );
                }
				
                BackGroundData[bgIndex + 3] = 255; 
            }
        }
    }
}

    function applyFilter() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    var filter = document.getElementById('filterSelect').value;

    for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        if (filter === 'grayscale') {
            
            var gray = 0.3 * r + 0.59 * g + 0.11 * b;
            data[i] = data[i + 1] = data[i + 2] = gray;
        } else if (filter === 'brightness') {
            // Increase brightness
            data[i] = Math.min(r + 20, 255);
            data[i + 1] = Math.min(g + 20, 255);
            data[i + 2] = Math.min(b + 20, 255);
        } else if (filter === 'invert') {
            // Invert colors
            data[i] = 255 - r;  
            data[i + 1] = 255 - g;  
            data[i + 2] = 255 - b;  
		
		} else if (filter === 'contrast') {
            //contrast
            var factor = 1.2; 
            data[i] = Math.min(((r - 128) * factor + 128), 255);  
            data[i + 1] = Math.min(((g - 128) * factor + 128), 255);  
            data[i + 2] = Math.min(((b - 128) * factor + 128), 255);  
        } else if (filter === 'red-tint') {
            //red tint
            data[i] = Math.min(r + 50, 255);  
            data[i + 1] = g;  
            data[i + 2] = b;  
        }
    }

    context.putImageData(imgData, 0, 0); 
}