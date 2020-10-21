/*
Скрипт появляющихся окон v1.2 miloserdov.com 02.03.2016
Программист: Николаев Сергей
*Скрипт, не считая стандартных браузеров, поддерживает IE8
==========================
==Изменения в версии 1.2==
==========================
- Добавлена функция закрытия всех всплывающих окон, для вставки в элементы окон(например крестик в правом верхнем углу окна)

==========================
==Изменения в версии 1.1==
==========================
- Добавлена проверка на наличие элемента окна при клике на кнопку
- При клике на кнопку теперь всплывающее окно не только открывается, но и закрывается

========================================================================================================
==Как должны выглядеть кнопки(не ссылки)(тэг может быть любым, но должен поддерживать событие onclick)==
========================================================================================================
<p id="id_button0">button 0</p>
<p id="id_button1">button 1</p>
<p id="id_button2">button 2</p>

=======================================
==Как должны выглядеть кнопки(ссылки)==
=======================================
<a href="url куда ссылается, если javascript отключен или выдал ошибку" onclick="return false;" id="id_button0">button 0</a>
<a href="url куда ссылается, если javascript отключен или выдал ошибку" onclick="return false;" id="id_button1">button 1</a>
<a href="url куда ссылается, если javascript отключен или выдал ошибку" onclick="return false;" id="id_button2">button 2</a>

===========================================================================================
==Как должны выглядеть окна(тэг может быть любым, но должен поддерживать событие onclick)==
===========================================================================================
<div class='class0_off' id='id_window0'><p>window0</p></div>
<div class='class1_off' id='id_window1'><p>window1</p></div>
<div class='class2_off' id='id_window2'><p>window2</p></div>

===========================
==Подключение и настройка==
===========================
	</body>
	<script type="text/javascript">
		var $mjsl_popup_windows = new Array(
			new Array(0, 'login_window', 'login_window_hidden', 'login_button', 'login_window'),
			new Array(0, 'class0_on', 'class0_off', 'id_button0', 'id_window0'),
			new Array(0, 'class1_on', 'class1_off', 'id_button1', 'id_window1'),
			new Array(0, 'class2_on', 'class2_off', 'id_button2', 'id_window2')
		)
	</script><script type="text/javascript" src="mjsl_popup_winds.js"></script>
</html>

=================================
==Пример CSS стилей для скрипта==
=================================
.class0_on {}
.class1_on {}
.class2_on {}
.class0_off { display: none; }
.class1_off { display: none; }
.class2_off { display: none; }

===========================================================
==Пример элемента для закрытия окон при клике по элементу==
===========================================================
<p onclick='mjsl_close_popup_winds();'>Закрыть все окна</p>
*/
function mjsl_close_popup_winds() {
		for ($i=0; $i<window.$mjsl_popup_windows.length; $i++) {
			if (!window.$mjsl_popup_windows[$i][0]) if ($Element = document.getElementById(window.$mjsl_popup_windows[$i][4])) $Element.className=window.$mjsl_popup_windows[$i][2];
			window.$mjsl_popup_windows[$i][0] = 0;
		}
}
if('addEventListener' in window) {
	document.body.addEventListener('click', function () {mjsl_close_popup_winds();});
	for ($i=0; $i<window.$mjsl_popup_windows.length; $i++) {
		if ($Element = document.getElementById(window.$mjsl_popup_windows[$i][3])) {
			$Element.$mjsl_popup_windows_id = $i;
			$Element.addEventListener('click', function() {
				if (($Element = document.getElementById(window.$mjsl_popup_windows[this.$mjsl_popup_windows_id][4]))
					&&($Element.className!=window.$mjsl_popup_windows[this.$mjsl_popup_windows_id][1])
				) {
						$Element.className=window.$mjsl_popup_windows[this.$mjsl_popup_windows_id][1];
						window.$mjsl_popup_windows[this.$mjsl_popup_windows_id][0] = 1;
				}
			});
		}
		if ($Element = document.getElementById(window.$mjsl_popup_windows[$i][4])) {
			$Element.$mjsl_popup_windows_id = $i;
			$Element.addEventListener('click', function() {
				window.$mjsl_popup_windows[this.$mjsl_popup_windows_id][0] = 1;
			});
		}
	}
} else if ('attachEvent' in window) {
	document.body.attachEvent('onclick', function () {mjsl_close_popup_winds();});
	for ($i=0; $i<window.$mjsl_popup_windows.length; $i++) {
		if ($Element = document.getElementById(window.$mjsl_popup_windows[$i][3])) {
			$Element.attachEvent('onclick', function() {
				$ie = -1;
				elem = window.event.srcElement;
				do for ($i=0; $i<window.$mjsl_popup_windows.length; $i++) if (window.$mjsl_popup_windows[$i][3]==elem.id) $ie = $i;
				while (elem = elem.parentNode);
				if ($ie>=0) {
					if (($Element = document.getElementById(window.$mjsl_popup_windows[$ie][4]))
						&&($Element.className!=window.$mjsl_popup_windows[$ie][1])
					) {
						$Element.className=window.$mjsl_popup_windows[$ie][1];
						window.$mjsl_popup_windows[$ie][0] = 1;
					}
				}
			});
		}
		if ($Element = document.getElementById(window.$mjsl_popup_windows[$i][4])) {
			$Element.attachEvent('onclick', function() {
				$ie = -1;
				elem = window.event.srcElement;
				do for ($i=0; $i<window.$mjsl_popup_windows.length; $i++) if (window.$mjsl_popup_windows[$i][4]==elem.id) $ie = $i;
				while (elem = elem.parentNode);
				if ($ie>=0) window.$mjsl_popup_windows[$ie][0] = 1;
			});
		}
	}
}