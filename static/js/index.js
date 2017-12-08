// $.fn.tagcloud.defaults = {
//   size: {start: 10, end: 16, unit: 'pt'},
//   color: {start: '#bbb', end: '#82a0d3'}
// };
// $(function () {
//   $('#tags a').tagcloud();
// });

$(document).ready(function (){
  const list = document.getElementById('cards').children
  const opts = {
    axis: 'y',
    reverse: true,
    speed: 800,
    trigger: null
  }
  let id = []
  for (let i = 0; i < list.length; i++) {
    id.push(list[i].id)
  }
  if ($.isTouchCapable()) {
      $(`#${id[0]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[1]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[2]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[3]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[4]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[5]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[6]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[7]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[8]}`).flip({ ...opts, trigger: 'click' });
      $(`#${id[9]}`).flip({ ...opts, trigger: 'click' });
    } else {
      $(`#${id[0]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[1]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[2]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[3]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[4]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[5]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[6]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[7]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[8]}`).flip({ ...opts, trigger: 'hover' });
      $(`#${id[9]}`).flip({ ...opts, trigger: 'hover' });
    }
});