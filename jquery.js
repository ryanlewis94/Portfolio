$(function() {
	var name = $('#name');
	var email = $('#email');
	var message = $('#message');

	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');
	var newMsg = $('#new-msg');

	$(name).blur(function() {
		var input = $(name).val();
		if ($.trim(input).length > 2 && $.trim(input).length < 21) {
			$(name).css('border-bottom', '1px solid rgb(21, 182, 21)');
		} else {
			$(name).css('border-bottom', '3px solid red');
			if ($.trim(input).length > 20) {
				alert('Please make sure your name is 20 characters or less!');
			}
		}
	});

	$(email).blur(function() {
		var input = $(email).val();
		if ($.trim(input).length > 5 && $.trim(input).length < 255) {
			$(email).css('border-bottom', '1px solid rgb(21, 182, 21)');
		} else {
			$(email).css('border-bottom', '3px solid red');
			if ($.trim(input).length > 254) {
				alert('Please make sure your email is less than 255 characters!');
			}
		}
	});

	$(message).blur(function() {
		var input = $(message).val();
		if ($.trim(input).length > 10 && $.trim(input).length < 1000) {
			$(message).css('border-bottom', '1px solid rgb(21, 182, 21)');
		} else {
			$(message).css('border-bottom', '3px solid red');
			if ($.trim(input).length > 999) {
				alert('Please make sure your message is less than 1000 characters!');
			}
		}
	});

	$(newMsg).click(function() {
		$(form).css('display', 'inline');
		$(newMsg).css('display', 'none');
		$(formMessages).removeClass('success');
		$(formMessages).text('');
		$(name).css('border-bottom', '1px solid black');
		$(email).css('border-bottom', '1px solid black');
		$(message).css('border-bottom', '1px solid black');
	});

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		var nameLen = $(name).val();
		var emailLen = $(email).val();
		var messageLen = $(message).val();

		if (
			($.trim(nameLen).length > 2 && $.trim(nameLen).length < 21) ||
			($.trim(emailLen).length > 5 && $.trim(emailLen).length < 255) ||
			($.trim(messageLen).length > 10 && $.trim(messageLen).length < 1000)
		) {
			// Serialize the form data.
			var formData = $(form).serialize();

			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
				.done(function(response) {
					var respCheck = 'Thanks';
					if (String(response).indexOf(respCheck) != -1) {
						// Make sure that the formMessages div has the 'success' class.
						$(formMessages).removeClass('error');
						$(formMessages).addClass('success');

						// Set the message text.
						$(formMessages).text(response);

						// hide the form.
						$(form).css('display', 'none');
						$(newMsg).css('display', 'inline');
						$(name).val('');
						$(email).val('');
						$(message).val('');
					} else {
						// Make sure that the formMessages div has the 'error' class.
						$(formMessages).removeClass('success');
						$(formMessages).addClass('error');

						// Set the message text.
						$(formMessages).text(response);

						$(name).val('');
						$(email).val('');
						$(message).val('');
						$(name).css('border-bottom', '1px solid black');
						$(email).css('border-bottom', '1px solid black');
						$(message).css('border-bottom', '1px solid black');
					}
				})
				.fail(function(data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							'Oops! An unknown error has occured and your message could not be sent, Please try again.'
						);
						$(name).val('');
						$(email).val('');
						$(message).val('');
						$(name).css('border-bottom', '1px solid black');
						$(email).css('border-bottom', '1px solid black');
						$(message).css('border-bottom', '1px solid black');
					}
				});
		} else {
			alert('Please make sure all fields have been entered and are correct!');
		}
	});
});
