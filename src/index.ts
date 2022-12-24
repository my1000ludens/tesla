import { LightLeft, LightRight } from "./Light"

const Icon = document.createElement('div') as HTMLDivElement
Icon.className = 'image-tesla' as string
document.body.appendChild(Icon)

Icon.appendChild(LightLeft)
Icon.appendChild(LightRight)