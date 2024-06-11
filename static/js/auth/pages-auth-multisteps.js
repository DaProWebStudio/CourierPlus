
document.addEventListener("DOMContentLoaded", function(e) {
    const n = document.querySelector("#multiStepsValidation");
    if (null !== n) {
        var a = n.querySelector("#multiStepsForm");
        const c = a.querySelector("#accountDetailsValidation");
        var i = a.querySelector("#personalInfoValidation")
          , s = a.querySelector("#billingLinksValidation")
          , r = [].slice.call(a.querySelectorAll(".btn-next"))
          , a = [].slice.call(a.querySelectorAll(".btn-prev"))
          , o = document.querySelector(".multi-steps-exp-date")
          , l = document.querySelector(".multi-steps-cvv")
          , m = document.querySelector(".multi-steps-mobile")
          , u = document.querySelector(".multi-steps-pincode")
          , d = document.querySelector(".multi-steps-card");
        o && new Cleave(o,{
            date: !0,
            delimiter: "/",
            datePattern: ["m", "y"]
        }),
        l && new Cleave(l,{
            numeral: !0,
            numeralPositiveOnly: !0
        }),
        m && new Cleave(m,{
            phone: !0,
            phoneRegionCode: "US"
        }),
        u && new Cleave(u,{
            delimiter: "",
            numeral: !0
        }),
        d && new Cleave(d,{
            creditCard: !0,
            onCreditCardTypeChanged: function(e) {
                document.querySelector(".card-type").innerHTML = "" != e && "unknown" != e ? '<img src="' + assetsPath + "img/icons/payments/" + e + '-cc.png" height="28"/>' : ""
            }
        });
        let t = new Stepper(n,{
            linear: !0
        });
        const p = FormValidation.formValidation(c, {
            fields: {
                multiStepsEmail: {
                    validators: {
                        notEmpty: {
                            message: "Пожалуйста, введите адрес электронной почты"
                        },
                        emailAddress: {
                            message: "Это значение не является действительным адресом электронной почты"
                        },
                        remote: {
                            message: 'The username is already taken',
                            method: 'GET',
                            url: '/path/to/your/back-end/',
                            data: function() {
                                // Return an object
                                return {
                                    key: value,
                                    otherKey: otherValue,
                                };
                            }
                        },
                    }
                },
                multiStepsPass: {
                    validators: {
                        notEmpty: {
                            message: "Пожалуйста, введите пароль"
                        }
                    }
                },
                multiStepsConfirmPass: {
                    validators: {
                        notEmpty: {
                            message: "Требуется подтвердить пароль"
                        },
                        identical: {
                            compare: function() {
                                return c.querySelector('[name="multiStepsPass"]').value
                            },
                            message: "Пароль и его подтверждение - это не одно и то же"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: ".col-sm-6"
                }),
                autoFocus: new FormValidation.plugins.AutoFocus,
                submitButton: new FormValidation.plugins.SubmitButton
            },
            init: e=>{
                e.on("plugins.message.placed", function(e) {
                    e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement)
                })
            }
        }).on("core.form.valid", function() {
            t.next()
        })
          , g = FormValidation.formValidation(i, {
            fields: {
                multiStepsFirstName: {
                    validators: {
                        notEmpty: {
                            message: "Пожалуйста, введите имя"
                        }
                    }
                },
                multiStepsAddress: {
                    validators: {
                        notEmpty: {
                            message: "Пожалуйста, введите свой адрес"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: function(e, t) {
                        switch (e) {
                        case "multiStepsFirstName":
                            return ".col-sm-6";
                        case "multiStepsAddress":
                            return ".col-md-12";
                        default:
                            return ".row"
                        }
                    }
                }),
                autoFocus: new FormValidation.plugins.AutoFocus,
                submitButton: new FormValidation.plugins.SubmitButton
            }
        }).on("core.form.valid", function() {
            t.next()
        })
          , v = FormValidation.formValidation(s, {
            fields: {
                multiStepsCard: {
                    validators: {
                        notEmpty: {
                            message: "Please enter card number"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: function(e, t) {
                        return "multiStepsCard" !== e ? ".col-dm-6" : ".col-md-12"
                    }
                }),
                autoFocus: new FormValidation.plugins.AutoFocus,
                submitButton: new FormValidation.plugins.SubmitButton
            },
            init: e=>{
                e.on("plugins.message.placed", function(e) {
                    e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement)
                })
            }
        }).on("core.form.valid", function() {
            alert("Submitted..!!")
        });
        r.forEach(e=>{
            e.addEventListener("click", e=>{
                switch (t._currentIndex) {
                case 0:
                    p.validate();
                    break;
                case 1:
                    g.validate();
                    break;
                case 2:
                    v.validate()
                }
            }
            )
        }
        ),
        a.forEach(e=>{
            e.addEventListener("click", e=>{
                switch (t._currentIndex) {
                case 2:
                case 1:
                    t.previous()
                }
            }
            )
        }
        )
    }
});
