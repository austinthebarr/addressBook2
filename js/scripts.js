//business logic
function Contact(first, last, address, city, state){
  this.firstName = first;
  this.lastName = last;
  this.streetAddress = address;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

//user interface logic
$(function(){
  $("form#new-contact").submit(function(event) {
    event.preventDefault();



    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#street").val();
    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#state").val();

    var newContact = new Contact(inputtedFirstName ,inputtedLastName, inputtedStreet, inputtedCity, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

//to clear the form
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.streetAddress);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);


    });
  });
});
