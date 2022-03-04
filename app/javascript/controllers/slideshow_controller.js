// src/controllers/slideshow_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.index = 0
    this.showCurrentSlide()
  }

  next() {
    this.index++
    this.showCurrentSlide()
  }

  previous() {
    this.index--
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => { // loop through all targets and compare if their indexing postion is same as assigned index var
      element.hidden = (index != this.index)
    })
  }
}

// Stimulus Lifecycle
// initialize() - Once, when the controller is first instantiated
// connect() - Anytime the controller is connected to the DOM
// disconnect() - Anytime the controller is disconnected from the DOM