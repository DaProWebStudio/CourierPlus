"use strict";
$(function() {
	const e = $(".sticky-element");
	window.Helpers.initCustomOptionCheck(), t = Helpers.isNavbarFixed() ? $(".layout-navbar").height() + 7 : 0, e.length && e.sticky({
		topSpacing: t,
		zIndex: 9
	});
	var t = $(".select2");
	t.length && t.each(function() {
		var e = $(this);
		e.wrap('<div class="position-relative"></div>').select2({
			placeholder: "Select value",
			dropdownParent: e.parent()
		})
	})
});