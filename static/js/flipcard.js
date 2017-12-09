/**
 * JavaScript for executing the flipping of the project cards.
 *
 * REVIEW
 * FIXME
 * At the time of writing this code it seems that ... is not
 * fully supported in the browsers. I found that in Safari in
 * responsive mode the mobile code would fail but not in Chrome
 * or FireFox. However across Chrome, FireFox, Opera, & Safari
 * mobile browsers the code failed. The fix was to revert to using:
 *
 *      Object.assign({}, base, { trigger: 'option'})
 *
 * In the future I can check the status of this feature in mobile browsers
 * and update the code.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
 */

$(document).ready(function (){
  const list = document.getElementById('cards').children
  const base = {
    axis: 'y',
    reverse: true,
    speed: 800,
    trigger: null
  }
  let id = []
  for (let i = 0; i < list.length; i++) {
    id.push(list[i].id)
  }
  let options
  if ($.isTouchCapable()) {
      options = Object.assign({}, base, { trigger: 'click' })
      $(`#${id[0]}`).flip(options);
      $(`#${id[1]}`).flip(options);
      $(`#${id[2]}`).flip(options);
      $(`#${id[3]}`).flip(options);
      $(`#${id[4]}`).flip(options);
      $(`#${id[5]}`).flip(options);
      $(`#${id[6]}`).flip(options);
      $(`#${id[7]}`).flip(options);
      $(`#${id[8]}`).flip(options);
      $(`#${id[9]}`).flip(options);
    } else {
      options = Object.assign({}, base, { trigger: 'hover' })
      $(`#${id[0]}`).flip(options);
      $(`#${id[1]}`).flip(options);
      $(`#${id[2]}`).flip(options);
      $(`#${id[3]}`).flip(options);
      $(`#${id[4]}`).flip(options);
      $(`#${id[5]}`).flip(options);
      $(`#${id[6]}`).flip(options);
      $(`#${id[7]}`).flip(options);
      $(`#${id[8]}`).flip(options);
      $(`#${id[9]}`).flip(options);
    }
});