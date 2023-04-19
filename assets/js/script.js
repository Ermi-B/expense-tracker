var expenseForm = $('#expense-form');
var submitBtn = $('#submit-button');
var tableBody = $('#table-body');
var clearBtn = $('#clear-button');

var count = 0;

//submit button vent listener
submitBtn.on('click', function (e) {
    
    count++;
    var expenseName = $('#expense-name').val();
    var amount = $('#amount').val();
    var date = $('#datepicker').val();
    var color = $('#color-input').val();

   var expenseObject = {
    id: count,
    name : expenseName,    
    date : date,
    amount : amount,
   }
   var expenseArray = [];
   expenseArray.push(expenseObject)
   
   console.log(expenseArray)

   var tableRow = $("<tr>");
   tableRow.css({
    'background-color':color
   });

   for(var obj of expenseArray){
        for(var key in expenseObject){
            var tableData = $("<td>");
            tableData.text(expenseObject[key]);
            tableRow.append(tableData);
        }
            
   }
   
   tableBody.append(tableRow)
   
});

//clear button event listener
clearBtn.on('click',function(){
    if(confirm('Are you sure you want to clear the table?')){
        tableBody.empty();
    }
    
})