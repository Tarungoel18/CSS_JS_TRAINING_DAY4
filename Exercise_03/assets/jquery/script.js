$(document).ready(function () {
  $(".open-modal-btn").click(function () {
    const modalId = $(this).data("modal");
    $("#" + modalId).css("display", "flex");
    $(".modal-backdrop").fadeIn();
    $(".open-modal-btn").css("display", "none");
  });

  $(".modal-header i").click(function () {
    $(this).closest(".modal").fadeOut();
    $(".modal-backdrop").fadeOut();
    $(".open-modal-btn").css("display", "block");
  });

  $(".footer-btn-close").click(function () {
    $(this).closest(".modal").fadeOut();
    $(".modal-backdrop").fadeOut();
    $(".open-modal-btn").css("display", "block");
  });

  $(".modal-backdrop").click(function () {
    $(".modal").fadeOut();
    $(this).fadeOut();
    $(".open-modal-btn").css("display", "block");
  });
});
