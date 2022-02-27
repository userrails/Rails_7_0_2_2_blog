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
  // add `data-clipboard-supported-class` attribute in this controller as static class which will
  // control the specific CSS class in HTML, and controller becomes more easily adaptable to different
  // CSS approaches. The specific class added like this can be accessed via `this.supportedClass`.
  static classes = [ "supported" ]

  // connect() method adds the class name to the controller's element when the user agent has permission
  // to write to the Clipboard.
  connect() {
    console.log("Namaste!")
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === 'granted') {
        this.element.classList.add(this.supportedClass);
      }
    });
  }

  // select the input field’s contents and call the clipboard API
  copy(event) {
    event.preventDefault()
    // Solution 1
    // let el = navigator.clipboard.writeText(this.sourceTarget.value)
    // console.log('copied', this.sourceTarget.value)

    // Solution 2
    this.sourceTarget.select()
    document.execCommand("copy")
  }
}

// Steps to test:
// Disable JS in browser, reload the page, and notice the Copy button is no longer visible.
// PIN field is enhanced: Copy button's baseline state is hidden, becoming visible only when
// our JavaScript detects support for the Clipboard API.