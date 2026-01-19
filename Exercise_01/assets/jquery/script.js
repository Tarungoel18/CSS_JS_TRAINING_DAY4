$.noConflict();
jQuery(document).ready(function ($) {
  $("[data-tab-btn]").click(function () {
    const parent = $(this).closest("[data-tab]");
    const num = $(this).data("tab-btn");

    parent.find("[data-tab-btn] , [data-tab-content]").removeClass("active");
    $(this).addClass("active");

    parent.find(`[data-tab-content="${num}"]`).addClass("active");
  });
});
