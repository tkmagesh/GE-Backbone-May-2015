var Invoice = Backbone.Model.extend({
    initialize : function(){
        this.listenTo(this,'change',this.publishChange);
    },
    publishChange : function(){
        var data = this.toJson();
        radio('invoiceAllocated').broadcast(data);
    }
});