import { Utils } from '@/classes/utils.class'
import { Directive } from 'vue'

const MenuPlacement: Directive<HTMLElement, 'bottom' | 'top'> = {
  mounted (el, binding) {
    switch (binding.value) {
      case 'bottom':
        el.classList.add(`show-${Utils.breakpoint}`)
        break
      case 'top':
        el.classList.add(`hide-${Utils.breakpoint}`)
        break
    }
  }
}

export default MenuPlacement
