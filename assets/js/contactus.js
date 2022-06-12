const contactUsNameInput = document.querySelector('#contactus #name')
const contactUsEmailInput = document.querySelector('#contactus #email')
const contactUsMessageInput = document.querySelector('#contactus #message')
const contactUsSubmitButton = document.querySelector('#contactus button#submit')
const contactUsSendButton = document.querySelector('#contactus button#send')

const validateInput = () => {
	if (
		!contactUsNameInput.validity.valid ||
		!contactUsEmailInput.validity.valid ||
		!contactUsMessageInput.validity.valid
	) {
		contactUsSubmitButton.disabled = true
		contactUsSendButton.disabled = true

		return
	}

	contactUsSubmitButton.disabled = false
	contactUsSendButton.disabled = false
}

contactUsNameInput.addEventListener('input', validateInput)
contactUsEmailInput.addEventListener('input', validateInput)
contactUsMessageInput.addEventListener('input', validateInput)

contactUsSubmitButton.addEventListener(
	'mouseover',
	() => {
		contactUsSendButton.style.opacity = 1
		contactUsSendButton.style.visibility = 'visible'
	},
	false
)

contactUsSubmitButton.addEventListener(
	'mouseout',
	() => {
		contactUsSendButton.style.opacity = 0
		contactUsSendButton.style.visibility = 'hidden'
	},
	false
)

contactUsSendButton.addEventListener(
	'mouseover',
	() => {
		contactUsSendButton.style.opacity = 1
		contactUsSendButton.style.visibility = 'visible'
	},
	false
)

contactUsSendButton.addEventListener(
	'mouseout',
	() => {
		contactUsSendButton.style.opacity = 0
		contactUsSendButton.style.visibility = 'hidden'
	},
	false
)
