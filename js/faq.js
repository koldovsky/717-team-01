(function(){

  const questionsList = [
      {
          header: "Does this tour require physical fitness?",
          answers: "This tour is suitable for untrained tourists. No cliff climbing, we promise."
      },
      {
          header: "Will I be able to see the Northern Lights?",
          answers: "We cannot promise you this. The Northern Lights only appear in winter under special circumstances. But we will hunt it in Tromsø."
      },
      {
          header: "Can I take my children with me on the tour?",
          answers: "Yes, we offer a 50% discount for children."
      },
      {
          header: "Can I join you not in Oslo, but in another city?",
          answers: "Depending on the weather conditions, our route may change, so we strongly recommend starting with other tourists from Oslo. We do not change the route to pick up tourists on the way."
      }
  ];

  function render(){
      const questions = document.querySelector('.questions__list');
      for (const question of questionsList){
          questions.innerHTML += `
              <div class="questions__item">
                  <button class="questions__header">${question.header}</button>
                  <span class="questions__answers">${question.answers}</span>
              </div>
          `; 
      }
      const questionHeaders = document.querySelectorAll('.questions__header');
      for (const questionHeader of questionHeaders){
          questionHeader.addEventListener('click', ({ target }) => {
              target.classList.toggle('active');
          });
      }
  }
  render();
})();