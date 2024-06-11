"use strict";

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function changeOrganization() {
    const form = document.querySelector('#form-change-organization');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const organization_id = form.querySelector('#select_organization').value;
        console.log(organization_id)
        fetch('/api/v1/users/change-organization/', {
            method: 'PUT',
            body: JSON.stringify({"organization": organization_id}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
        }).then(result => {
            window.location.reload()
        })
    })
}

changeOrganization()