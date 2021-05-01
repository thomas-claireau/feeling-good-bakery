document.addEventListener("DOMContentLoaded", () => {
  const handleModals = document.querySelectorAll(".handle-modal");
  const bg = document.querySelector("section.bg");

  // open selected modal
  handleModals.forEach((handleModal) => {
    handleModal.addEventListener("click", () => {
      const modal = document.querySelector(
        `.modal[data-id="${handleModal.dataset.id}"]`
      );

      if (!modal) return;

      const close = modal.querySelector(".close");

      document.body.classList.add("--modal-opened");
      modal.classList.add("open");

      close.addEventListener("click", closeModal);
    });
  });

  // click outside equal to click bg section
  bg.addEventListener("click", closeModal);

  function closeModal(e) {
    let modal = e.currentTarget.closest(".modal.open");

    if (e.currentTarget.classList.contains("bg"))
      modal = document.querySelector(".modal.open");

    if (!modal) return;

    document.body.classList.remove("--modal-opened");
    modal.classList.remove("open");
  }
});
