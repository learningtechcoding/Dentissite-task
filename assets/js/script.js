$(document).ready(function () {
  $(".read-more").click(function (e) {
    e.preventDefault();
    $(this).prev(".hidden-content").slideToggle();
    $(this).text(function (_, text) {
      return text === "Read More" ? "Read Less" : "Read More";
    });
  });
});
