function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z0-9]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$('#submit').click(function() {
    let errorMsg = "";
    let infoMsg = "";
    let name = "";
    let email = $('#email').val();
    let phone = $('#phone').val();
    let passowrd = $('#password').val();
    let conPassowrd = $('#conPassword').val();
    
    
    if (isEmail(email)== false) {
        errorMsg += "Your email address is not valid!<br>";
        infoMsg += "E-Mail!<br>";
    } 
    
    if ($.isNumeric(phone) == false) {
        errorMsg += "Your phone number is not valid!<br>";
        infoMsg += "Phone number!<br>";
    }
    
    if ( passowrd == "") {
        errorMsg += "Your Password is not valid!<br>";
        infoMsg += "Password!<br>";
    }
    
    if (passowrd != conPassowrd) {
        errorMsg += "Your confirming password is not matched!<br>";
    }
    
    if (conPassowrd == "") {
        errorMsg += "Your confirming password is empty!<br>";
        infoMsg += "Confirm Password!<br>";
    }
    
    
    $("#container").hide();
    $("#msgContaint1").show();
    
    
    if (errorMsg == "" && infoMsg == "") {
        
        $("#errorMsg").hide();
        $("#secssesMsg").show();
        $("#secssesMsg").html("<p id='well'>Well Done! You Logged Up!</p><br>Your E-Mail Address is: "+email+"<br>Your Phone Number is: " +phone);
        
    } else {
        $("#errorMsg").show();
        $("#secssesMsg").hide();
        $("#errorMsg").html(errorMsg + "<br>No Matched The Following Elements:<br> " + infoMsg);
    }
   
      
    
});
   

$("#submit2").click(function() {
    $("#container").show();
    $("#msgContaint1").hide();
});
