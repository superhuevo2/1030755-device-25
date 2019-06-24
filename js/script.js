var mapButton = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map");
var mapButtonClose = document.querySelector(".modal-close-map");
var writeUsButton = document.querySelector(".button-writeus");
var modalFeedback = document.querySelector(".modal-feedback");
var feedbackButtonClose = document.querySelector(".modal-close-feedback");
var feedbackSend = document.querySelector(".button-feedback-send");
var feedbackInputName = modalFeedback.querySelector("[name=name]");
var feedbackInputEmail = modalFeedback.querySelector("[name=email]");
var feedbackInputMessage = modalFeedback.querySelector("[name=message]");

mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-map-show");
});

mapButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-map-show");
  modalFeedback.classList.remove("modal-error");
});

writeUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-feedback-show");
});

feedbackButtonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-feedback-show");
  modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains('modal-map-show')) {
      modalMap.classList.remove('modal-map-show');
      modalFeedback.classList.remove("modal-error");
    }
  }
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalFeedback.classList.contains("modal-feedback-show")) {
      modalFeedback.classList.remove("modal-feedback-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
})

feedbackSend.addEventListener("click", function(evt) {
  if (!feedbackInputName.value || !feedbackInputEmail.value || !feedbackInputMessage.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  }
})