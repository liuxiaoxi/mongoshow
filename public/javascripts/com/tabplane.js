(function($){
	jQuery(document).ready(function($) {
		$('#mongdbshow').tabs({
			onAdd:function(title,index){
				var tab = $('#mongdbshow').tabs('getTab',index);

				$(tab.get(0)).attr('contenteditable', true);
			}
		});
		$('#appendTabs').on('click',function(event) {
			event.preventDefault();

			$('#mongdbshow').tabs('add',{
				title: 'Tab',
				bodyCls:'test_box',
				closable: true
			})
		});
	});
})(jQuery)