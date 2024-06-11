"use strict";
document.addEventListener("DOMContentLoaded", function(e) {
	{
		for (let t of document.querySelector(".numeral-mask-wrapper").children) t.onkeyup = function(e) {
			t.nextElementSibling && this.value.length === parseInt(this.attributes.maxlength.value) && t.nextElementSibling.focus(), !t.previousElementSibling || 8 !== e.keyCode && 46 !== e.keyCode || t.previousElementSibling.focus()
		};
		const n = document.querySelector("#twoStepsForm");
		if (n) {
			FormValidation.formValidation(n, {
				fields: {
					activated_code: {
						validators: {
							notEmpty: {
								message: "Пожалуйста, введите код проверки правильно!"
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger,
					bootstrap5: new FormValidation.plugins.Bootstrap5({
						eleValidClass: "",
						rowSelector: ".mb-3"
					}),
					submitButton: new FormValidation.plugins.SubmitButton,
					defaultSubmit: new FormValidation.plugins.DefaultSubmit,
					autoFocus: new FormValidation.plugins.AutoFocus
				}
			});
			const i = n.querySelectorAll(".numeral-mask"),
				t = function() {
					let t = !0,
						o = "";
					i.forEach(e => {
						"" === e.value && (t = !1, n.querySelector('[name="activated_code"]').value = ""), o += e.value
					}), t && (n.querySelector('[name="activated_code"]').value = o)
				};
			i.forEach(e => {
				e.addEventListener("keyup", t)
			})
		}
	}
});