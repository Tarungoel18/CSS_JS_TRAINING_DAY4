$(document).ready(function () {
  $(".btn-primary").click(function () {
    $(".dot-spinner").removeClass("d-none");
    setTimeout(() => {
      const parent = $(this).closest(".card-body");
      const name = parent.find(".title").text();
      const designation = parent.find(".designation").text();
      const year = parent.find(".joining-year").text();
      const id = parent[0].dataset.employeeId;
      $("[data-user-id]").text(id);
      $("[data-username]").text(name);
      $("[data-designation]").text(designation);
      $("[data-joining-year]").text(year);
      $(".dot-spinner").addClass("d-none");
    }, 2000);
  });
});
