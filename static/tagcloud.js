$.fn.tagcloud.defaults = {
  size: {start: 10, end: 16, unit: 'pt'},
  color: {start: '#bbb', end: '#2988bc'}
};
$(function () {
  $('#tags a').tagcloud();
});

