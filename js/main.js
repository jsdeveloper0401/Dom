$(document).ready(function () {
    $(".password-toggle").click(function () {
        const passwordInput = $("#password");
        const icon = $("#eye-icon");
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            icon.addClass("fa-eye-slash");
            icon.removeClass("fa-eye");
        } else {
            passwordInput.attr("type", "password");
            icon.addClass("fa-eye");
            icon.removeClass("fa-eye-slash");
        }
    });
});
