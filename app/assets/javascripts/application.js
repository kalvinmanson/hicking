// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require bootstrap-material-design
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	
	$.material.init()

	$('#ajax_country_id').on('change', function () {
	    $.ajax({
	        url: "/cities_country/1.json",
	    }).done(function (data) {
	        change_select(data);
	    });
	});

	function change_select(data) {

	    var json = jQuery.parseJSON('[{"1" : "string","2" : "strisadasdng"}]');
	    console.log(json);
	    var options = [];
	    $.each(json, function () {
                $("#user_city_id").append($("<option></option>").val(this['ITEMID']).html(this['ITEMDESC']));
            });
	    $("#user_city_id").replaceOptions(options);
	};
});

