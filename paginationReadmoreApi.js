setTimeout(function(){
    $('.read-more-api').click();
});

function sentDataApiTo(self,html){
    var itemObject= $($(self).attr('data-group')).find($(self).attr('data-To'));
    $(html).prependTo(itemObject);
}
function paginationReadmoreItemApi(object) {
    var readmore= $(object.classGroupItem).find('.read-more-api');
    $(readmore).attr({"data-group":object.classGroupItem,"showNextPageItem":object.showNextPageItem,"data-To":object.dataTo,"data-index":1});
}

$('.read-more-api').click(function(){
    var self=this;
    var groupObject= $(self).attr('data-group');
    var itemObject= $(groupObject).find( $(self).attr('data-item'));
    var newFunction= eval($(self).attr('data-function'));
    var showNextPageItem=$(self).attr("showNextPageItem");
    $.ajax({
        url:$(self).attr("action"),
        method:$(self).attr("method"),
        data:{index:$(self).attr("data-index"),showNextPageItem:$(self).attr('showNextPageItem')},
        success:function(data){
            var data = JSON.parse(data);
            newFunction(self,data);
            if(showNextPageItem){
                $(self).attr({"data-index":parseInt($(self).attr("data-index"))+parseInt(showNextPageItem)});
            }else{
                $(self).attr({"data-index":data.nextItem});
            }
        }
    });
});
