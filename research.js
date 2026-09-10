const controls = document.querySelector(".research-controls");
const topics = [...document.querySelectorAll(".research-topic")];
const count = document.querySelector("#research-count");

if (controls && topics.length && count) {
  controls.hidden = false;
  const filters = [...controls.querySelectorAll('input[name="research-topic"]')];

  function filterTopics(value) {
    topics.forEach((topic) => {
      topic.hidden = value !== "all" && topic.dataset.topic !== value;
    });
    const visible = topics.filter((topic) => !topic.hidden).length;
    count.textContent = visible + (visible === 1 ? " topic" : " topics");
  }

  function showLinkedTopic() {
    const linkedTopic = topics.find((topic) => "#" + topic.id === location.hash);
    if (linkedTopic) {
      filters.find((input) => input.value === "all").checked = true;
      filterTopics("all");
      linkedTopic.scrollIntoView();
    }
  }

  controls.addEventListener("change", (event) => {
    if (event.target.matches('input[name="research-topic"]')) {
      filterTopics(event.target.value);
    }
  });
  window.addEventListener("hashchange", showLinkedTopic);
  window.addEventListener("pageshow", () => {
    filterTopics(filters.find((input) => input.checked).value);
    showLinkedTopic();
  });
  filterTopics(filters.find((input) => input.checked).value);
}
