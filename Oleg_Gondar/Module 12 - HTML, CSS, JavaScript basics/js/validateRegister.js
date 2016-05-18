$(document).ready(function () {
    $("#register").click(function (e) {
        var allValid = true;

        function validateName(value) {
            if (value && value.length > 1) {
                return false;
            }

            return true;
        }

        function validateEmail(value) {
            var regexp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

            if (value && regexp.test(value)) {
                return false;
            }

            return true;
        }


        function validatePassword(value) {
            if (value && value.length > 5) {
                return false;
            }

            return true;
        }

        e.preventDefault();
        if (validateName($('#username').val())) {
            $("#errors").append("<p>Error in username, must be 3 characters at least</p>");
            allValid = false;
        }
        if (validatePassword($('#password').val())) {
            $("#errors").append("<p>Error in password, must be 6 characters at least</p>");
            allValid = false;
        }
        if (validateEmail($('#email').val())) {
            $("#errors").append("<p>Error in email, must be as address@some.domain</p>");
            allValid = false;
        }

        if (allValid) {
            // alert("All good!!");
            var win = window.open('cookiesTable.html', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Broswer has blocked it
                alert('Please allow popups for this site');
            }

        }

    });
});
