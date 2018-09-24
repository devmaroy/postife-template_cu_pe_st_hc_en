(function($) {
 	
	$('.nav-toggle').on('click', function() {
		$('.hamburger-icon').toggleClass('is-open');
		$('.site-navigation').toggleClass('is-open');
		$('.site-header').toggleClass('is-open');
		$('.site-header-content').toggleClass('is-open');
	});


	// FAQ Accordion
	var faqList = $( '.faq-list' ),
	    faqListDt = faqList.find('dt');

	// Hide FAQ Answer
	faqList.find( 'dd' ).slideUp();

	// FAQ List
	faqListDt.on('click', function() {
		var dt = $( this ),
			dd = dt.next( 'dd' );

		// Find panel icon for this dt
		var panelIcon = dt.find( '.panel-icon' );

		// Expand or collapse panel
		dd.stop().slideToggle();

		// Toggle '+' and '-'
		panelIcon.toggleClass( 'fa-plus' )
			.toggleClass( 'fa-minus' );
	});

	FastClick.attach(document.body);

	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();



	var quill = new Quill('#editor-container', {
	  modules: {
	    toolbar: [
	   	  [{ header: [1, 2, false] }],
	      ['bold', 'italic'],
	      ['link', 'blockquote', 'code-block', 'image'],
	      [{ list: 'ordered' }, { list: 'bullet' }]
	    ]
	  },
	  placeholder: 'Compose an epic...',
	  theme: 'snow'
	});
	
})(jQuery)