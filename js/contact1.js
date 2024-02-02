$("#contactForm").on("submit", function (event) {    
    if (event.isDefaultPrevented()) {        
        formError();
        submitContactMSG(false, "Please fill in the form properly!");
    } else {
        
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        
        if (filter.test($("#phone").val())) {            
            event.preventDefault();
            submitcontactForm();
        }	
        else {	
           submitContactMSG(false, "Please enter valid phone");
           return false;
            
        }
        
    }
});

function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

function submitcontactForm(){

    var formData = $("#contactForm").serializeArray();
    var formSubmit = objectifyForm(formData);
    
      
    var postAPI = "https://5ykwv7tuxe.execute-api.us-east-1.amazonaws.com/v1/contact";
    axios({
        method: 'post',
        url: postAPI,
        data: formSubmit
    })
    .then(function (response) {
        console.log(response);
        contactFormSuccess();
    })
    .catch(function (error) {
        console.error(error);
        formError();
        submitContactMSG(false,text);
    })
}

function contactFormSuccess(){
    $("#contactForm")[0].reset();
    submitContactMSG(true, "Your Message Submitted Successfully!")
}

function formError(){
    $(".help-block.with-errors").removeClass('hidden');
}

function submitContactMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgContactSubmit").removeClass().addClass(msgClasses).text(msg);
    $('html,body').animate({
        scrollTop: $("#msgContactSubmit").offset().top - 80},
    'slow');
}