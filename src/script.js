const signupCta = document.getElementById('signupCta')
const signupHero = document.getElementById('signupHero')

const focusableElements = Array.from(document.querySelectorAll('button, a'))
const firstFocusableElement = focusableElements[0]
const lastFocusableElement = focusableElements[focusableElements.length - 1]

function focusTrap(event) {
    if (event.key !== 'Tab') return

    if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            event.preventDefault()
            lastFocusableElement?.focus()
        }
    } else {
        if (document.activeElement === lastFocusableElement) {
            event.preventDefault()
            firstFocusableElement?.focus()
        }
    }
}

function handleSignUp() {
    window.alert('Successfully signed up!')
}

document.addEventListener('keydown', focusTrap)

signupCta.addEventListener('click', handleSignUp)
signupHero.addEventListener('click', handleSignUp)
