"use strict";
$(function() {
	const e = $(".selectpicker"),
		t = $(".select2"),
		c = $(".select2-icons");
	function i(e) {
		return e.id ? "<i class='bx bxl-" + $(e.element).data("icon") + " me-2'></i>" + e.text : e.text
	}
	e.length && e.selectpicker(), t.length && t.each(function() {
		var e = $(this);
		e.wrap('<div class="position-relative flex-grow-1"></div>').select2( {
			placeholder: "-----------------",
			dropdownParent: e.parent()
		});
	}), c.length && c.wrap('<div class="position-relative flex-grow-1"></div>').select2({
		templateResult: i,
		templateSelection: i,
		escapeMarkup: function(e) {
			return e
		}
	})

});
