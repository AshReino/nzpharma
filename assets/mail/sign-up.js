$(function() {
    $(
        "#contactForm input,#contactForm select,#contactForm button"
    ).jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#email").val();
            var password = $("input#password").val();
            var passwordConfirmation = $("input#passwordConfirmation").val();
            var tradingName = $("input#tradingName").val();
            var registeredName = $("input#registeredName").val();
            var title = $("input#title").val();
            var firstName = $("input#firstName").val();
            var lastName = $("input#lastName").val();
            var position = $("input#position").val();
            var phone = $("input#phone").val();
            var mobile = $("input#mobile").val();
            var fax = $("input#fax").val();
            var attentionTo = $("input#attentionTo").val();
            var street1 = $("input#street1").val();
            var street2 = $("input#street2").val();
            var suburb = $("input#suburb").val();
            var postcode = $("input#postcode").val();
            var country = $("select#country").val();
            var state = $("input#state").val();
            var billAddressCheckbox = $("input#billAddressCheckbox").val();
            var attentionToBill = $("input#attentionToBill").val();
            var street1Bill = $("input#street1Bill").val();
            var street2Bill = $("input#street2Bill").val();
            var suburbBill = $("input#suburbBill").val();
            var postcodeBill = $("input#postcodeBill").val();
            var countryBill = $("select#countryBill").val();
            var stateBill = $("input#stateBill").val();
            var mailingListCheckbox = $("input#mailingListCheckbox").val();
            var foundUs = $("select#foundUs").val();
            // var firstName = name; // For Success/Failure Message
            // // Check for white space in name for Success/Fail message
            // if (firstName.indexOf(" ") >= 0) {
            //     firstName = name.split(" ").slice(0, -1).join(" ");
            // }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "/assets/mail/sign-up.php",
                type: "POST",
                data: {
                    email: email,
                    password: password,
                    passwordConfirmation: passwordConfirmation,
                    tradingName: tradingName,
                    registeredName: registeredName,
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    position: position,
                    phone: phone,
                    mobile: mobile,
                    fax: fax,
                    attentionTo: attentionTo,
                    street1: street1,
                    street2: street2,
                    suburb: suburb,
                    postcode: postcode,
                    country: country,
                    state: state,
                    billAddressCheckbox: billAddressCheckbox,
                    attentionToBill: attentionToBill,
                    street1Bill: street1Bill,
                    street2Bill: street2Bill,
                    suburbBill: suburbBill,
                    postcodeBill: postcodeBill,
                    countryBill: countryBill,
                    stateBill: stateBill,
                    mailingListCheckbox: mailingListCheckbox,
                    foundUs: foundUs,
                },
                cache: false,
                success: function() {
                    // Success message
                    $("#success").html("<div class='alert alert-success'>");
                    $("#success > .alert-success")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-success").append(
                        "<strong>Your sign up form has been sent. </strong>"
                    );
                    $("#success > .alert-success").append("</div>");
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                error: function() {
                    // Fail message
                    $("#success").html("<div class='alert alert-danger'>");
                    $("#success > .alert-danger")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong>").text(
                            "Sorry " +
                            firstName +
                            ", it seems that my mail server is not responding. Please try again later!"
                        )
                    );
                    $("#success > .alert-danger").append("</div>");
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$("#firstName").focus(function() {
    $("#success").html("");
});

// /*When clicking on Full hide fail/success boxes */
// $("#name").focus(function() {
// $("#success").html("");
// });