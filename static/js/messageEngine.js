"use strict";

const mEngine = document.getElementById('messageEngine');

if (mEngine) {
    const mTag = document.getElementById('message_tag').value,
    mText = document.getElementById('message_text').value;
    Swal.fire({
        position: "top-start",
        icon: mTag,
        title: mText,
        showConfirmButton: !1,
        timer: 2500,
        customClass: {
            confirmButton: "btn btn-primary"
        },
        buttonsStyling: !1
    })
}

