var tourlistTemplate ='<h2>Clockwork Angels Tour</h2><ul id="tourList" data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Find a concert">{{#concerts}}<li id="{{id}}"><a href="#ticketInfoPage"><img src="images/299-ticket.png" class="ui-li-thumb"><h3 class="ui-li-heading">{{tourDate}}</h3><p class="ui-li-desc">{{tourloc}} - {{tourVenue}}</p></a></li>{{/concerts}}</ul>';