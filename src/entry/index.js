import '../assets/style/index.css'
import Icon from '../assets/images/luffy.jpg'
import { log } from './log'

let imgElement = new Image()
imgElement.src = Icon

let divElement = document.createElement('div')
divElement.classList.add('hello')
divElement.innerHTML = 'Hello, webpack!'

document.getElementById('app').appendChild(imgElement)
document.getElementById('app').appendChild(divElement)

log('hi, entry')