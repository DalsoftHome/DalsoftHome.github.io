var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	            lat: 37.481600,
				lng: 126.885000,
			  });
			   var marker = map.addMarker({
		            lat: 37.481600,
					lng: 126.885000,
		            title: 'dalsoft, corp.',
		            infoWindow: {
		                content: "<b>dalsoft, corp.</b><br>서울특별시 금천구 <br> 디지털로9길 99(가산동, 스타밸리)1303A호"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();