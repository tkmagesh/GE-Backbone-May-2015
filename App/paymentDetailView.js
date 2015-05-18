var PaymentDetailView = Backbone.View.extend({
    initialize : function(){
        this.template = Handlebars.compile($("#paymentViewTemplate").html());
        this.listenTo(this.model,'change:Imbalance',this.updateImbalance);
    },
    updateImbalance : function(){
        this.$("#imbalance").html(this.model.get("Imbalance"));
    },
    render : function(){
        this.$el.append(this.template(this.model.toJSON()));
    }
});