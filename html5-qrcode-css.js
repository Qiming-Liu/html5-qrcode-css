/**
 * jquery.inputFileText
 * Github: https://github.com/datchung/jquery.inputFileText
 **/

!function (t) {
    t.fn.inputFileText = function (e) {
        let n = t.fn.inputFileText, i = n.getOptions(e);
        if (n.shouldRemoveInputFileText(this, i.remove)) return n.removeInputFileText(this);
        if (n.hasInputFileText(this)) return this;
        this.attr(n.DISPLAY_ATTRIBUTE, this.css("display")), this.css({display: "none"});
        let u = t('<input type="button" value="' + i.text + '" class="' + i.buttonClass + '" />').insertAfter(this),
            s = t('<span style="margin-left: 5px" class="' + i.textClass + '"></span>').insertAfter(u), l = this;
        return u.click(function () {
            l.click()
        }), this.change(function () {
            s.text(l.val().replace("C:\\fakepath\\", ""))
        }), this.attr(n.MARKER_ATTRIBUTE, "true")
    }, t.fn.inputFileText.MARKER_ATTRIBUTE = "data-inputFileText", t.fn.inputFileText.DISPLAY_ATTRIBUTE = "data-inputFileText-display", t.fn.inputFileText.getOptions = function (e) {
        return t.extend({text: "Choose File", remove: !1, buttonClass: "", textClass: ""}, e)
    }, t.fn.inputFileText.hasInputFileText = function (e) {
        return "true" === e.attr(t.fn.inputFileText.MARKER_ATTRIBUTE)
    }, t.fn.inputFileText.shouldRemoveInputFileText = function (e, n) {
        return n && t.fn.inputFileText.hasInputFileText(e)
    }, t.fn.inputFileText.removeInputFileText = function (e) {
        let n = t.fn.inputFileText;
        return e.next("input[type=button]").remove(), e.next("span").remove(), e.attr(n.MARKER_ATTRIBUTE, null).css({display: e.attr(n.DISPLAY_ATTRIBUTE)}).attr(n.DISPLAY_ATTRIBUTE, null)
    }
}(jQuery);

/**
 * html5-qrcode-css
 * Github: https://github.com/Qiming-Liu/html5-qrcode-css
 **/

$('#reader__dashboard_section_csr button:first')
    .click(function () {
        let t = setInterval(function () {
            let span = $('#reader__dashboard_section_csr span:first');
            if (span.length) {
                span.html(span.html().slice(span.html().indexOf('<select ')));
                clearInterval(t);
            }
        }, 50);
    });
$('#reader__filescan_input').inputFileText({text: 'Select Image'});