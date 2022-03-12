import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { url: String, refreshInterval: Number }

  // calls on page load, this will just reload the content from another html page anynchronously.
  // connect() {
  //   console.log(this.refreshIntervalValue)

  //   this.load()

  //   if (this.hasRefreshIntervalValue) {
  //     this.startRefreshing()
  //   }
  // }

  // called when page disconnected and it will clear the refresh Interval
  // disconnect() {
  //   this.stopRefreshing()
  // }

  // userdefined function which used fetch() to get another page content and populate on current page.
  // load() {
  //   fetch(this.urlValue)
  //   .then(response => response.text())
  //   // .then(html => document.getElementById("display_message_content").innerHTML = html)
  //   .then(html => this.element.innerHTML = html)
  // }

  // method accepts url defined under DOM `data-content-loader-url-param` on click event `data-action="content-loader#load"` triggered 
  load({ params: { url } }) {
    fetch(url)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }

  // startRefreshing() {
  //   this.refreshTimer = setInterval(() => {
  //     this.load()
  //   }, this.refreshIntervalValue)
  // }

  // stopRefreshing() {
  //   if (this.refreshTimer) {
  //     clearInterval(this.refreshTimer)
  //   }
  // }
}
