$.noConflict();
jQuery(document).ready(function ($) {
  setTimeout(() => {
    $(".html-container").html(
      `<button class="btn btn-primary" id="button" data-id="1">Show an alert on the click with my data-id</button>
       <button class="btn btn-primary" id="button" data-id="2">Show an alert on the click with my data-id</button>`,
    );
  }, 5000);

  $("body").on("click", "#button", function () {
    const id = $(this).data("id");
    alert(`Value: ${id}`);
  });
});
