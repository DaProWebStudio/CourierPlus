document.addEventListener('DOMContentLoaded', ev => {
    const userType = document.querySelector('#id_user_type');
    const groupBlock = document.querySelector('.group-block');
    const groups = groupBlock.querySelector('#id_groups');

    function choiceUserType() {
        trackerGroup(userType.value)
        userType.addEventListener('change', event => {
            trackerGroup(userType.value)
        })
    }

    function trackerGroup(value) {
        if (value === 'teacher') {
            groupBlock.classList.add('d-none');
            groups.setAttribute('disabled', 'disabled')
            groups.removeAttribute('required')
        } else {
            groupBlock.classList.remove('d-none')
            groups.removeAttribute('disabled')
            groups.setAttribute('required', 'required')
        }
    }
    (() => {choiceUserType();})()
})