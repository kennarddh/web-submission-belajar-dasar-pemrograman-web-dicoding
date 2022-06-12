const contactUsNameInput = document.querySelector('#contactus #name')
const contactUsEmailInput = document.querySelector('#contactus #email')
const contactUsMessageInput = document.querySelector('#contactus #message')
const contactUsSubmitButton = document.querySelector('#contactus button')

const validateInput = () => {
	if (
		!contactUsNameInput.validity.valid ||
		!contactUsEmailInput.validity.valid ||
		!contactUsMessageInput.validity.valid
	) {
		contactUsSubmitButton.disabled = true

		return
	}

	contactUsSubmitButton.disabled = false
}

contactUsNameInput.addEventListener('input', validateInput)
contactUsEmailInput.addEventListener('input', validateInput)
contactUsMessageInput.addEventListener('input', validateInput)
