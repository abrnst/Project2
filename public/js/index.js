// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/events",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/events",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/events/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
<<<<<<< HEAD
        .text(example.text)
        .attr("href", "/example/" + example.id);
=======
        .text(example.name)
        .attr("href", "events/" + example.id);
>>>>>>> c68a575ddd822ae6660c986b7fc604baa982dd79

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
<<<<<<< HEAD
=======

>>>>>>> c68a575ddd822ae6660c986b7fc604baa982dd79
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

<<<<<<< HEAD
  $.get("/api/user_data").then(function(data) {
    alert(data.username);
    var example = {
      name: $exampleText.val().trim(),
      description: $exampleDescription.val().trim(),
      user: data.username
    };
    if (!(example.name && example.description)) {
      alert("You must enter an example text and description!");
      return;
    }
  
    API.saveExample(example).then(function() {
      refreshExamples();
    });
  
    $exampleText.val("");
    $exampleDescription.val("");
  });
=======
  var example = {
    name: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };
  console.log(example);

  if (!(example.name && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
>>>>>>> c68a575ddd822ae6660c986b7fc604baa982dd79
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
