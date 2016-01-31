Template.update_item.helpers({
    get_date: function(date) {
        return date.toLocaleDateString();
    },
    get_time: function(date){
        return date.toLocaleTimeString();
    }
});
