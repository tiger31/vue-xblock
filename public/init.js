function TestXBlock(runtime, element) {
	const handlerUrl = runtime.handlerUrl(element, 'increment_count');
	$(element).children().attr("url", handlerUrl)
}