const text = document.querySelector(".description")
const clock = dayjs().hour();

$(document).ready(function () {
  const mainTimer = document.querySelector("#currentDay")

  mainTimer.innerHTML = dayjs().format("dddd, MMMM D, YYYY")

  $(".saveBtn").on("click", function () {
    let textBox = $(this).siblings(".description").val();
    let x = $(this).parent().attr("id")
    localStorage.setItem(x, textBox)
  });
})

$(".time-block").each(function () {
  let y = parseInt($(this).attr("id").split("-")[1]);
  let q = $(this).attr("id");
  let t = localStorage.getItem(q)
  
  $(this).children(".description").val(t);

  if (clock > y) {
    $(this).removeClass('present')
    $(this).removeClass('future')
    $(this).addClass('past')
  } else if (clock === y) {
    $(this).removeClass('future')
    $(this).removeClass('past')
    $(this).addClass('present')
  } else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
  };
});
