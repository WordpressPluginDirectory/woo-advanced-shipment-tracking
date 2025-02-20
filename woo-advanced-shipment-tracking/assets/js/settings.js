jQuery(document).on("click", "#wc_ast_status_partial_shipped", function(){
	if(jQuery(this).prop("checked") == true){
        jQuery(this).closest('tr').removeClass('disable_row');
		var nonce = jQuery( '#wc_ast_settings_form_nonce' ).val();
		var ajax_data = {
			action: 'update_custom_order_status_email_display',		
			status: 'partial-shipped',
			security: nonce,	
		};
		jQuery.ajax({
			url: ajaxurl,		
			data: ajax_data,		
			type: 'POST',
			success: function(response) {
				jQuery('.partially_shipped_checkbox').show();	
				jQuery('.partially_shipped_checkbox input[type="checkbox"]').prop('checked', true);	
			},
			error: function(response) {				
			}
		});			
		
    } else{
		jQuery(this).closest('tr').addClass('disable_row');
		jQuery('.partially_shipped_checkbox').hide();
	}	
});

jQuery(document).on("click", "#wc_ast_status_updated_tracking", function(){
	if(jQuery(this).prop("checked") == true){
        
		jQuery(this).closest('tr').removeClass('disable_row');
		
		var ajax_data = {
			action: 'update_custom_order_status_email_display',		
			status: 'updated-tracking',		
		};
		jQuery.ajax({
			url: ajaxurl,		
			data: ajax_data,		
			type: 'POST',
			success: function(response) {
				jQuery('.updated_tracking_checkbox').show();
				jQuery('.updated_tracking_checkbox input[type="checkbox"]').prop('checked', true);	
			},
			error: function(response) {				
			}
		});				
		
    } else{
		jQuery(this).closest('tr').addClass('disable_row');
		jQuery('.updated_tracking_checkbox').hide();
	}	
});

jQuery( document ).ready(function() {	
	
	jQuery( '.tipTip' ).tipTip( {
		'attribute': 'data-tip'		
	} );
	
	if(jQuery('#wc_ast_status_partial_shipped').prop("checked") == true){
		jQuery('.partial_shipped_status_label_color_th').show();
		jQuery('.partially_shipped_checkbox').show();		
	} else{
		jQuery('.partial_shipped_status_label_color_th').hide();
		jQuery('.partially_shipped_checkbox').hide();		
	}	
	
	if(jQuery('#wc_ast_status_updated_tracking').prop("checked") == true){
		jQuery('.updated_tracking_checkbox').show();		
	} else{
		jQuery('.updated_tracking_checkbox').hide();		
	}		
		
	jQuery('.color_field input').wpColorPicker();		
});

jQuery(document).on("change", "#wc_ast_status_partial_shipped_label_font_color", function(){
	var font_color = jQuery(this).val();
	jQuery('.order-status-table .order-label.wc-partially-shipped').css('color',font_color);
});

/* activity-panel custom popup create start */
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const popupMenu = document.querySelector('.popup-menu');

    // Toggle menu visibility on button click
    menuButton.addEventListener('click', () => {
        popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !popupMenu.contains(e.target)) {
            popupMenu.style.display = 'none';
        }
    });
});
/* activity-panel custom popup create end */
