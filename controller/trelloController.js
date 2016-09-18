
function ListController(model, view) {
    this._model = model;
    this._view = view;

    var _this = this;


    this._view.saveListClicked.attach(function () {
        _this.saveList();
    });

    this._view.addCardClicked.attach(function (sender, args) {
        _this.addCard(args);
    });

    this._view.togglerClicked.attach(function () {
        _this.togglerClicked();
    });

    this._view.saveTaskClicked.attach(function () {
        _this.addTask();
    });
}

ListController.prototype = {

  init: function(){
     $('ul.sublist').sortable({
        connectWith: 'ul.sublist'
    });

       $('div.mainlist').sortable({
        connectWith: '#div.list1',
        
    });
  },

   saveList : function(){
    if($("#listName").val().trim().length>0)
        $('#list1 div.sublist:last').after('<div class="sublist"><ul class="sublist well"><strong>'+$("#listName").val()+'</strong></ul><button class="well saveTask">Add Task</button></div>');
        this.init();
     // });

   },

   addCard : function(that){
    // console.log(that);
    var elements= $("div.newCardDiv").find("input");
      if(elements.length==0)
      $(that).append('<div class="newCardDiv"><input type= "text" class ="newCard" size="10"><button class="addTask">Save</button></div>')
 

   },

   togglerClicked : function(){
      $('.toggler').live('click',function(){
      $(this).parent().children().toggle();  //swaps the display:none between the two spans
      $(this).parent().parent().find('.toggled_content').slideToggle();  //swap the display of the main content with slide action

  }); 
},
  addTask : function(){
    console.log("Add Task");
  } 
   
}; 