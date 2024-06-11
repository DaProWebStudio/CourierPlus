"use strict";
const formAuthentication = document.querySelector("#formAuthentication");

document.addEventListener("DOMContentLoaded", function(e) {

	formAuthentication && FormValidation.formValidation(formAuthentication, {
		fields: {
			last_name: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, введите фамилию"
					},
					stringLength: {
						min: 4,
						message: "Имя пользователя должно содержать более 4 символов"
					}
				}
			},
			first_name: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, введите имю"
					},
					stringLength: {
						min: 3,
						message: "Имя пользователя должно содержать более 3 символов"
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, введите свой адрес электронной почты"
					},
					emailAddress: {
						message: "Пожалуйста, введите действительный адрес электронной почты"
					}
				}
			},
			"email-username": {
				validators: {
					notEmpty: {
						message: "Пожалуйста, введите адрес электронной почты / имя пользователя"
					},
					stringLength: {
						min: 6,
						message: "Имя пользователя должно содержать более 6 символов"
					}
				}
			},
			password1: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, введите свой пароль"
					},
					stringLength: {
						min: 8,
						message: "Пароль должен содержать более 8 символов"
					}
				}
			},
			password2: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, подтвердите пароль"
					},
					identical: {
						compare: function() {
							return formAuthentication.querySelector('[name="password1"]').value
						},
						message: "Пароль и его подтверждение не совпадают"
					},
					stringLength: {
						min: 8,
						message: "Пароль должен содержать более 8 символов"
					}
				}
			},
			new_password1: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, введите свой пароль"
					},
					stringLength: {
						min: 8,
						message: "Пароль должен содержать более 8 символов"
					}
				}
			},
			new_password2: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, подтвердите пароль"
					},
					identical: {
						compare: function() {
							return formAuthentication.querySelector('[name="new_password1"]').value
						},
						message: "Пароль и его подтверждение не совпадают"
					},
					stringLength: {
						min: 8,
						message: "Пароль должен содержать более 8 символов"
					}
				}
			},
			terms: {
				validators: {
					notEmpty: {
						message: "Пожалуйста, согласитесь с правилами и условиями"
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
		},
		init: e => {
			e.on("plugins.message.placed", function(e) {
				e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement)
			})
		}
	});
	const t = document.querySelectorAll(".numeral-mask");
	return void(t.length && t.forEach(e => {
		new Cleave(e, {
			numeral: !0
		})
	}));

});

