import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  // when Stimulus loads your controller class, it looks for target name as strings in the static array called as targets.
  // For each target name in the array, Stimulus adds three new properties to your controller.
  // Here `source` target name becomes the following properties:
  // `this.sourceTarget` evaluates the first `source` target in your controller's scope. If there is no `source` target, accessing the property throws an error.
  // `this.sourceTargets` evaluates to an array of all `source` targets in the controller's scope.
  // `this.hasSourceTarget` evaluates to `true` if there is `source` target or `false` if not.
  static targets = ["source"]

  connect() {
    console.log("Namaste!")
  }

  // select the input field’s contents and call the clipboard API
  copy(event) {
    event.preventDefault()
    let el = navigator.clipboard.writeText(this.sourceTarget.value)
    console.log('copied', this.sourceTarget.value)
  }
}
