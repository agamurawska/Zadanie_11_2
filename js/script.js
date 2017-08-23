
    function Button(text) {
    this.text = text || "Hallo";
}

    Button.prototype = {
        create: function() {
            this.$element =$('<button>');
            this.$element.text(this.text);
            this.$element.click(function(){
                alert(self.text)};
            this.$element.appendTo($('body'));
        }
        };
    
    var btn1 = new Button('Hallo');
    btn1.create();
