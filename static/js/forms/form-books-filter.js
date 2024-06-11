"use strict";

function getParamValue(param) {
    const url = window.location.href;
    const searchParams = new URLSearchParams(new URL(url).search);
    return searchParams.get(param);
}

function renderSubjectFromAPI(specialty_id) {
    const url = `/api/v1/subjects/${specialty_id}/`
    fetch(url).then(response => response.json()).then(result => {
        renderSelect2Subject(result)
    })
}

function renderSelect2Subject(subjects) {
    let options = '';
    const subjectParam = getParamValue('subject');
    subjects.result.forEach(subject => {
        if (subjectParam && subjectParam === String(subject.id)) {
            options += `<option value="${subject.id}" selected>${subject.title}</option>`
        } else {
            options += `<option value="${subject.id}">${subject.title}</option>`
        }
    })
    document.querySelector('#subjectSelect').innerHTML = `<select id="subject" class="form-select select2 select2-hidden-accessible" name="subject"><option value="All" selected>Все</option>${options}</select>`
    $('#subject').select2()
}

const specialtyParam = getParamValue('specialty')

if (specialtyParam && specialtyParam !== 'None') {
    renderSubjectFromAPI(specialtyParam)
}

$('#specialty').on('select2:select',  (e) => renderSubjectFromAPI(e.params.data.id));
