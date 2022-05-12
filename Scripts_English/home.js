const viewer = document.querySelector('[data-viewer');


const harlem = "Constantly confronted with racism and homophobia, he was angry and disillusioned and yearned for a less restricted life. So, in 1948—fed up with American bigotry—he moved to Paris on a writing fellowship at the ripe age of 24. Ironically enough, Baldwin hoped that by leaving the States he could gain a clearer lens and perspective to write about American society. From France, he published his first novel,\"Go Tell it on the Mountain,\" in 1953. Set in Harlem, the book explores the Church as a source of both repression and hope."
const sonny = "The narrator in Sonny's Blues, the main protagonist in the story, isn't actually given a name. Instead the narrator is just Sonny's brother. The lack of a name creates some emtotional distance between the two brothers which further contributes to the themes of loneliness present in the book"
const prevcondition = " Peter points out to Jules, after he's kicked out of his apartment, that Jules can walk into any barand people won''t automatically know that he's Jewish. And by \"people,\" Peter means the gazeof white people."
const wilderness = "Unlike many of his other's books, the main character in Coming out the Wilderness is a woman from the South. This is in direct contrast to Baldwin who is a northerner through and through"

const topicInventory = [
    { name: "harlem", text: harlem },
    { name: "sonny", text: sonny },
    { name: "wilderness", text: wilderness },
    { name: "prevcondition", text: prevcondition }
]
eventHandler();
function eventHandler() {
    document.addEventListener("click", handleMouseClick);
}

function handleMouseClick(e) {
    if (e.target.matches('[data-fact]')) {
        openFact(e.target.dataset.fact)
        console.log(e.target.dataset.fact)
        return
    } else if (e.target.matches('[data-close]')) {
        closeFact()
        return
    }
}

function openFact(fact) {
    viewer.classList.add("active");
    const box = viewer.querySelector("[data-info]")
    topicInventory.forEach((topic) => {
        if (topic.name == fact) {
            box.textContent = `${topic.text}`;
            console.log(fact + 1)

        }
    });
}

function closeFact() {
    viewer.classList.remove("active");
}