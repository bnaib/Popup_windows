<html>
	<head>
		<style>
			.class0_on {}
			.class1_on {}
			.class2_on {}
			.class0_off { display: none; }
			.class1_off { display: none; }
			.class2_off { display: none; }
		</style>
	</head>
	<body bgcolor='#aaaaaa'>
		<a href="url куда ссылается, если javascript отключен или выдал ошибку" onclick="return false;" id="id_button0">button 0</a>
		<a href="url куда ссылается, если javascript отключен или выдал ошибку" onclick="return false;" id="id_button1">button 1</a>
		<a href="url куда ссылается, если javascript отключен или выдал ошибку" onclick="return false;" id="id_button2">button 2</a>
		<div class='class0_off' id='id_window0'><p>window0</p></div>
		<div class='class1_off' id='id_window1'><p>window1</p></div>
		<div class='class2_off' id='id_window2'><p>window2</p></div>
		<p>test body</p>
	</body>
	<script type="text/javascript">
		var $mjsl_popup_windows = new Array(
			new Array(0, 'class0_on', 'class0_off', 'id_button0', 'id_window0'),
			new Array(0, 'class1_on', 'class1_off', 'id_button1', 'id_window1'),
			new Array(0, 'class2_on', 'class2_off', 'id_button2', 'id_window2')
		)
	</script><script type="text/javascript" src="mjsl_popup_winds.js"></script>
</html>