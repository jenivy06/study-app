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
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFlashcard = {
        question: $("#question").val().trim(),
        english: $("[question=english]:checked").val()
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
  