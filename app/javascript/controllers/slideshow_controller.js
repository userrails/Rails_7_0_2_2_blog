// src/controllers/slideshow_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  // static values = { index: Number } // `static values = { index: Number }` is Typed value controller properties, this is static property called as values.
  // Syntax: `data-{controller-name}-{define-valPropertyYouLike}-name` and is called as `this.valPropertyYouLikeValue`


  static values = { index: { type: Number, default: 2 } } // we can also set default value so that if index data attribute is missed in controller element, it will take from default value.

  // static values = { index: Number, effect: { type: String, default: "kenburns" } }

  // initialize() {
  //   // this.index = Number(this.element.dataset.index) // since we had data-index="1" in DOM
  //   // ^ To get rid with manual type converstion, let's use controller property associated with attribute so that type conversion will be automated.
  //   // In addition, Stimulus will create `this.indexValue` controller property associated with a `data-slideshow-index-value` attribute and it handles numeric conversion for us.
  //   // console.log(this.indexValue) // 1
  //   // console.log(typeof this.indexValue) // number

  //   // this.indexValue
  //   this.showCurrentSlide()
  // }

  // `this.showCurrentSlide()` we event don't need because Stimulus have method `indexValueChanged()` to initialize and in response to any change in the `data-slideshow-index-value` data value attribute.
  next() {
    this.indexValue++
    // this.showCurrentSlide()
  }

  previous() {
    this.indexValue--
    // this.showCurrentSlide()
  }

  indexValueChanged() { // inbuilt method
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => { // loop through all targets and compare if their indexing postion is same as assigned index var
      element.hidden = (index != this.indexValue)
    })
  }
}

// Stimulus Lifecycle
// initialize() - Once, when the controller is first instantiated
// connect() - Anytime the controller is connected to the DOM
// disconnect() - Anytime the controller is disconnected from the DOM