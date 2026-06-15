export function application() {
  const USER_NAME = 'gleydson.brito'

  const user = document.querySelector('.user')
  user.textContent = `Usuário: ${USER_NAME}`

  const reqBtn = document.querySelector('.request-btn')
  reqBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const protocolName = document.querySelector('.protocol-name')
    const reqText = document.querySelector('.text-input')

    if (reqText.value.includes('@')) {
      protocolName.textContent = 'SMTP/POP'
    } else if (reqText.value.includes('www')) {
      protocolName.textContent = 'HTTP/HTTPS'
    } else {
      protocolName.textContent = 'WEBSOCKET'
    }
    reqText.value = ''
  })

  const inputFile = document.querySelector('#arquivo')
  inputFile.addEventListener('change', () => {
    if (inputFile.files.length > 0) {
      const file = inputFile.files[0]
      alert(file.name)
    }
  })

  function encript(key, text) {
    const alphabet = [
      "a", "b", "c", "d", "e", "f", "g",
      "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u",
      "v", "w", "x", "y", "z"
    ];
    const textArray = text.split("")
    return textArray.map(char => {
      const index = alphabet.indexOf(char)
      const nIndex = index + key % alphabet.length
      const nChar = alphabet[nIndex]

      return nChar
    }).join('')
  }
  return encript(3, 'gleydson')
}

