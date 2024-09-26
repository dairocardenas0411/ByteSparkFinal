
/* Variable para almacenar los puntos */
let score = 0;

/* Función para actualizar el puntaje en la pantalla */
function updateScore() {
    document.querySelector(".score").innerText = `Score: ${score}`;
}

/* function to load current card contents */
currentCard = 0;
loadCard = function () {
    cards[0].querySelector(".front .contents").innerHTML = Cards[currentCard].front;
    cards[0].querySelector(".back .title").innerText = Cards[currentCard].title;
    cards[0].querySelector(".back .description").innerText = Cards[currentCard].description;
    cards[0].querySelector(".back .question").innerText = Cards[currentCard].question.title;
    questionAt = 0;
    questionsHTML = "";
    Cards[currentCard].question.questions.forEach((i) => {
        questionsHTML += `<label><input type="radio" name="card${0}" number="${questionAt}">${i}</label>`;
        questionAt++;
    });
    cards[0].querySelector(".questions").innerHTML = questionsHTML;
};

/* Lógica de las cartas */
Cards = [
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space?",
            questions: [
                "Yes, it's completely visible from the space.",
                "No, it's a myth, the island is not that big."

            ],
            answer: 1



        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    }, {
        title: "Climate Change",
        description: "Climate change is primarily driven by greenhouse gas emissions from human activities, such as burning fossil fuels and deforestation. This leads to rising global temperatures, melting ice caps, and more extreme weather events.",
        question: {
            title: " Which human activity is a major contributor to climate change? ?",
            questions: [
                "Recycling.",
                "Air Polution",
                "Deforestation."

            ],
            answer: 2
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/QG9ZcsL4lNc" title="How Climate Change Started - The Earth Story (Animation)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "Is the  Pollution a big deal ?",
        description: "Chemicals, plastics, and other pollutants are severely affecting marine ecosystems.Ocean pollution is causing mass die-offs of fish, coral reefs, and other marine life. ",
        question: {
            title: "What type of pollution is primarily responsible for damaging marine ecosystems? ?",
            questions: [
                "Soil pollution",
                "Noise pollution.",
                "Water pollution."
            ],
            answer: 2
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/JaSe85Mcwp0" title="Environmental Pollution Animation 2  YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "What is Deforestation  ?",
        description: "is the large-scale removal of forests, primarily for agricultural expansion,infrastructure development. Forests are vital to maintaining ecological balance, and their destruction has severe consequences for the environment.",
        question: {
            title: "What is the one of the main reasons for Deforestation ?",
            questions: [
                "Agricultural expansion.",
                "Help companyes to have more land.",
                "To help animals find new homes.",

            ],
            answer: 0,


        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/E_091pd_KHM" title="Environment Awareness Animation - The Effects of Deforestation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "Endangered Animals",
        description: "Some animals are called endangered because there aren’t many of them left in the world, and they could disappear forever.Every animal and plant is part of a food chain. Some animals eat plants, some animals eat other animals. If one species disappears, it can cause big problems for other animals in the food chain.",
        question: {
            title: "If an animal become extinct is that a problem  ?",
            questions: [
                "Yes, that might change the food chain and affect humans and animals",
                "No, we can replace the animals with new ones."
            ],
            answer: 0
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/O0yNztpei_g" title="Let’s Protect the Endangered Animals🦁🐼 | Save the Earth🌎 | Green Earth Songs for Kids | JunyTony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "Water Shortage and future problems",
        description: "A water shortage means that there isn’t enough clean water for people, animals, and plants to drink and use.",
        question: {
            title: "What can happen if we keep polluting the oceans with plastic ?",
            questions: [
                "Sea animals will have more food",
                "The oceans will become cleaner",
                "Sea animals might get hurt or die.",
                "The oceans will dry up"

            ],
            answer: 2
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/2BZslnorTEs" title="Best HD Animation for Water conflict/ Water Problems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "Habitat destruction",
        description: "Habitat destruction is when the places where animals and plants live are damaged or destroyed. A habitat is the natural home of an animal or plant, like forests, oceans, or grasslands. When people cut down trees, build cities, or pollute the environment, animals and plants lose their homes.",
        question: {
            title: "Animals can always find new homes when their habitats are destroyed. ?",
            questions: [
                "TRUE",
                "FALSE."
            ],
            answer: 1
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/p7LDk4D3Q3U" title="The Turning Point" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "Natural Resources Issues",
        description: "Natural resources are things that we get from the Earth that help us live. These include water, air, trees, plants, soil, and minerals. We also use natural resources like oil, coal, and gas to make energy for cars, homes. But if we use too much or waste them, these resources can run out, or get damaged.",
        question: {
            title: "We will never run out of water, no matter how much we use.",
            questions: [
                "TRUE",
                "FALSE"
            ],
            answer: 1
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/axCR3uIn3Vs" title="Renewable and Non-renewable Resources" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "Sea level rising",
        description: "Sea level rise is when the water in the oceans gets higher and covers more land. This happens because of two main reasons: melting ice from glaciers and ice sheets, and the water in the oceans expanding as it gets warmer.",
        question: {
            title: "What causes sea level rise ?",
            questions: [
                " More fish in the ocean",
                "More rain",
                "Melting ice and warmer water",
                "Stronger winds"
            ],
            answer: 2
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/msnOHuPep9I" title="NASA&#39;s Earth Minute: Sea Level Rise" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    },
    {
        title: "How Can we Help the Environment ?",
        description: "Every small step helps when it comes to taking care of the Earth! By doing simple things like recycling, saving energy, and planting trees, we can make a big difference in helping the planet stay clean and healthy for future generations. ",
        question: {
            title: "Are you ready for save the planer ?",
            questions: [
                "Yes, absolutely ready",

            ],
            answer: 0

        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/gUhxcdzRgLQ" title="What Can You Do RIGHT NOW To Save The Earth?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,

    }

];

cardsHTML = "";
for (i = 0; i < Cards.length; i++) {
    cardsHTML += ` <div class="card" number="10">
        <div class="face front">
            <div class="contents"></div>
            <i class="flip fa-solid fa-rotate"></i>
        </div>
        <div class="face back">
            <div class="wrong"></div>
            <h3 class="title"></h3>
            <p class="description"></p>
            <section>
                <h4 class="question"></h4>
                <br>
                <div class="questions"></div>
                <button class="next-card">SUBMIT</button>
            </section>
            <i class="flip fa-solid fa-rotate"></i>
        </div>
    </div>`;
}
document.querySelector(".cards").innerHTML = cardsHTML;

/* Agregar el puntaje en el HTML */
document.querySelector("body").insertAdjacentHTML("afterbegin", `<div class="score">Score: 0</div>`);

/* card flipper */
document.querySelectorAll(".front i.flip").forEach((i) => {
    i.addEventListener("mouseup", function () {
        this.closest(".card").classList.add("flipped");
    });
});

document.querySelectorAll(".back i.flip").forEach((i) => {
    i.addEventListener("mouseup", function () {
        this.closest(".card").classList.remove("flipped");
    });
});

/* deck stacking */
translate = {
    x: -17,
    y: -17
};
scale = 1.05;
opacity = 1.1;
cards = document.querySelectorAll(".card:not(.invisible)");
for (i = 0; i < cards.length; i++) {
    translate = {
        x: translate.x + 17,
        y: translate.y + 17,
    };
    scale -= 0.05;
    opacity -= 0.1;
    cards[i].style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
    cards[i].style.opacity = opacity;
    cards[i].style.zIndex = cards.length - i;
}

/* Cargar datos de la primera carta */
loadCard();

/* Agregar event listener a cada botón de submit */
document.querySelectorAll(".next-card").forEach((i) => {
    i.addEventListener("click", function (e) {
        card = this.closest(".card").getAttribute("number");

        answer = this.closest("section").querySelector("input:checked");
        console.log(answer);
        if (answer != null) {
            user_answer = answer.getAttribute("number");
            if (Cards[currentCard].question.answer == user_answer) {

                score++;
                updateScore();


                translate = {
                    x: -17,
                    y: -17
                };
                scale = 1.05;
                opacity = 1.1;
                cards = document.querySelectorAll(".card:not(.invisible)");
                cards[0].style.transform = "";
                cards[0].classList.add("invisible");
                cards = document.querySelectorAll(".card:not(.invisible)");

                for (i = 0; i < cards.length; i++) {
                    translate = {
                        x: translate.x + 17,
                        y: translate.y + 17,
                    };
                    scale -= 0.05;
                    opacity -= 0.1;
                    cards[i].style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
                    cards[i].style.opacity = opacity;
                    cards[i].style.zIndex = cards.length - i;
                }
                currentCard++;
                loadCard();
            } else {
                wrong = this.closest(".card").querySelector(".wrong");
                wrong.classList.add("active");
                setTimeout(function () {
                    wrong.classList.remove("active");
                }, 300);
            }
        } else {
            cards = document.querySelectorAll(".card:not(.invisible)");
            cards[0].querySelectorAll("input").forEach((i) => {
                i.classList.add("highlighted");
            });
            setTimeout(function () {
                cards[0].querySelectorAll("input").forEach((i) => {
                    i.classList.remove("highlighted");
                });
            }, 420);
        }
    });
});