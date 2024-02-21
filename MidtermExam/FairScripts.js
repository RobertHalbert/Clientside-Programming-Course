$(document).ready(function() {
	
	$('#dialog').hide();
	
    // Make tickets draggable
    $('.ticket').draggable({
        helper: 'clone'
    });

    // Make cart droppable
    $('#cart').droppable({
        accept: '.ticket',
        drop: function(event, ui) {
            const draggedTicket = ui.helper.clone();
            $(this).append(draggedTicket);
            showDialog(draggedTicket.data('ticket'), draggedTicket.data('price'));
        }
    });

    // Show jQuery UI Dialog
    function showDialog(ticket, price) {
        $('#dialog-message').html(`Added ${ticket} to the cart! Cost: $${price}`);
		
        $('#dialog').dialog({
            show: {
                effect: 'shake',
                duration: 500
            },
            hide: {
                effect: 'slideUp',
                duration: 500
            }
        });
    }
});
