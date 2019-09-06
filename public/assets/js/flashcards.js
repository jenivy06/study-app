// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-english").on("click", function(event) {
    var id = $(this).data("id");
    var newEnglish = $(this).data("newenglish");

    var newEnglishState = {
      english: newEnglish
    };

    // Send the PUT request.
    $.ajax("/api/flashcards/" + id, {
      type: "PUT",
      data: newEnglishState
    }).then(
      function() {
        console.log("changed subject to", newEnglish);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".change-history").on("click", function(event) {
    var id = $(this).data("id");
    var newHistory = $(this).data("newHistory");

    var newHistoryState = {
      history: newHistory
    };

    // Send the PUT request.
    $.ajax("/api/flashcards/" + id, {
      type: "PUT",
      data: newHistoryState
    }).then(
      function() {
        console.log("changed subject to", newHistory);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-math").on("click", function(event) {
    var id = $(this).data("id");
    var newMath = $(this).data("newMath");

    var newMathState = {
      math: newMath
    };

    // Send the PUT request.
    $.ajax("/api/flashcards/" + id, {
      type: "PUT",
      data: newMathState
    }).then(
      function() {
        console.log("changed subject to", newMath);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-science").on("click", function(event) {
    var id = $(this).data("id");
    var newScience= $(this).data("newScience");

    var newScienceState = {
      science: newScience
    };

    // Send the PUT request.
    $.ajax("/api/flashcards/" + id, {
      type: "PUT",
      data: newScienceState
    }).then(
      function() {
        console.log("changed subject to", newScience);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFlashcard = {
      question: $("#question").val().trim(),
      answer: $("#answer").val().trim(),
      english: $("[name=english]:checked").val(),
      history: $("[name=history]:checked").val(),
      math: $("[name=math]:checked").val(),
      science: $("[name=science]:checked").val(),
    };

    // Send the POST request.
    $.ajax("/api/flashcards", {
      type: "POST",
      data: newFlashcard
    }).then(
      function() {
        console.log("created new flashcard");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-flashcard").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/flashcards/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted flashcard", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});