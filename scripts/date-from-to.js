$(function() {
  $('#date-from, #date-to').datepicker({
      position: 'bottom left',
      clearButton: true,
      onSelect(formattedDate, date, inst) {
        inst.hide();
      },
    });

  });