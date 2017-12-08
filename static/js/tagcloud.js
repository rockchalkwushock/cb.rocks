$.fn.tagcloud.defaults = {
  size: {start: 10, end: 16, unit: 'pt'},
  color: {start: '#bbb', end: '#82a0d3'}
};
$(function () {
  $('#tags a').tagcloud();
});

