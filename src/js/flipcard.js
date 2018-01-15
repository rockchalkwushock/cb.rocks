import '../css/styles.css'

$(document).ready(() => {
  const list = document.getElementById('cards').children
  // Base options for jQuery.flip()
  const base = {
    axis: 'y',
    reverse: true,
    speed: 800,
    trigger: null
  }
  let id = []
  for (const el in list) {
    id.push(list[el].id)
  }
  let options
  if ($.isTouchCapable()) {
    // apply event trigger for mobile
    // REVIEW: 'click' will evaluate to 'touch/tap' via the library internals.
    options = { ...base, trigger: 'click' }
    for (const el in id) {
      $(`#${id[el]}`).flip(options)
    }
  } else {
    // hover event for non-touch screens
    options = { ...base, trigger: 'hover' }
    for (const el in id) {
      $(`#${id[el]}`).flip(options)
    }
  }
})
