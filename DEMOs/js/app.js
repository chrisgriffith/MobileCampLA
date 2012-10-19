var tourID = 0;
var albumID = 0;
var currentTourData;
var currentAlbum;

$('#tourDatesPage').live('pagecreate', function(event) {
	var tourListHTML;
	
	tourListHTML = Mustache.to_html(tourlistTemplate, tourDates);

	$('#tourDates').html(tourListHTML);
});

$('#tourDatesPage').live('pageshow', function(event) {
		
	$('#tourList').delegate('li', 'vclick', function(event){
    	tourID = event.currentTarget.id;
		currentTourData =  getTourData(tourID);
		
		$('#ticketVenue').html(currentTourData.tourVenue+" - " + currentTourData.tourloc );
		$('#ticketDate').html(currentTourData.tourDate);
		
    	$('#tourList').undelegate('li', 'vclick');
    	$('#tourList').listview('refresh');
	});
    $('#tourList').listview('refresh');
	
});

$('#ticketPurchase').live('pagecreate', function(event) {
	//$('#ticketVenue').html(currentTourData.tourVenue+" - " + currentTourData.tourloc );
//	$('#ticketDate').html(currentTourData.tourDate);
});

$('#albumsPage').live('pagecreate', function(event) {
	var albumListHTML;
	
	albumListHTML = Mustache.to_html(albumlistTemplate, albumData);

	$('#albums').html(albumListHTML);
});


$('#albumsPage').live('pageshow', function(event) {
	$('#albumList').delegate('li', 'vclick', function(event){
    	albumID = event.currentTarget.id;
    	console.log("albumID"+albumID);
		currentAlbum =  getAlbumData(albumID);
		
    	$('#albumList').undelegate('li', 'vclick');
    	$('#albumList').listview('refresh');
	});
    $('#albumList').listview('refresh');
});

$('#albumDetailsPage').live('pagecreate', function(event) {
	var albumDetailsHTML;
	console.log("currentAlbum:"+currentAlbum);
	albumDetailsHTML = Mustache.to_html(albumDetailsTemplate, currentAlbum);
	console.log(albumDetailsHTML);
	$('#albumsDetails').html(albumDetailsHTML);
});


function getTourData(theID){
	var theTourInfo;
	var numOfConcerts = tourDates.concerts.length;
	for (var i = 0; i < numOfConcerts; i++){
		if (tourDates.concerts[i].id == theID ) {
			theTourInfo = tourDates.concerts[i];
			break;
		}
	}
	return theTourInfo;
}

function getAlbumData(theID){
	var theAlbumInfo;
	var numOfAlbums = albumData.albums.length;
	for (var i = 0; i < numOfAlbums; i++){
		if (albumData.albums[i].id == theID ) {
			theAlbumInfo = albumData.albums[i];
			break;
		}
	}
	return theAlbumInfo;
}
