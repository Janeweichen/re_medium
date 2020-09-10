import { Controller } from "stimulus" 

//     export default class extends Controller {
//         static targets = ["name"]
//         greet() {
//             console.log(`hello, ${this.nameTarget.value}`)
//         }
// }

// export default class extends Controller {
//   static targets = [ "source" ]
//     copy() {
//       this.sourceTarget.select(event)
//       event.preventDefault()
//       document.execCommand("copy")
//     }
//     connect() {
//       if (document.queryCommandSupported("copy")) {
//         this.element.classList.add("clipboard--supported")
//       }
//     }
//   }

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showSlide(0)
  }

  next() {
    this.showSlide(this.index + 1)
  }

  previous() {
    this.showSlide(this.index - 1)
  }

  showSlide(index) {
    this.index = index
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", index == i)
    })
  }
}
