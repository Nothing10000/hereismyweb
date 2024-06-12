const list1234 = [
    {
        word: "army", meaning: "군대",
        영영풀이: "a large organized group of people trained to fight in a war"
    },
    {
        word: "attack", meaning: "공격하다",
        영영풀이: "to use violence to hurt a person or damage a place"
    },
    {
        word: "cause", meaning: "야기하다",
        영영풀이: "to make something happen"
    },
    {
        word: "cell", meaning: "세포",
        영영풀이: "the smallest part of a living thing that can exist on its own"
    },
    {
        word: "creature", meaning: "생명체",
        영영풀이: "anything that is living such as an animal, fish, or insect"
    },
    {
        word: "defend", meaning: "방어하다",
        영영풀이: "to do something to keep someone or something safe"
    },
    {
        word: "digest", meaning: "소화하다",
        영영풀이: "to break down food that you eat"
    },
    {
        word: "germ", meaning: "세균",
        영영풀이: "a very small living thing that makes people sick"
    },
    {
        word: "impossible", meaning: "불가능한",
        영영풀이: "cannot happen or be done"
    },
    {
        word: "invade", meaning: "침입하다",
        영영풀이: "to enter a place using force to take control of it"
    },
    {
        word: "major", meaning: "주요한",
        영영풀이: "very large or important"
    },
    {
        word: "multiply", meaning: "곱하다",
        영영풀이: "to increase"
    },
    {
        word: "necessary", meaning: "필요한",
        영영풀이: "needed in order to achieve a particular result"
    },
    {
        word: "protect", meaning: "보호하다",
        영영풀이: "to keep someone or something safe from harm, damage, or illness"
    },
    {
        word: "several", meaning: "몇몇의",
        영영풀이: "more than two but now very many"
    },
    {
        word: "shot", meaning: "주사",
        영영풀이: "a small amount of a drug that is put into your body"
    },
    {
        word: "trick", meaning: "속임수",
        영영풀이: "something that you do to deceive someone; to deceive"
    },
    {
        word: "victim", meaning: "희생자",
        영영풀이: "someone who has been attacked"
    },
    {
        word:"artificial",meaning:"인공의",
        영영풀이:"made or produced by human beings"
    },
    {
        word:"create",meaning:"창조하다",
        영영풀이:"to make something out of nothing"
    },
    {
        word:"disturb",meaning:"방해하다",
        영영풀이:"to keep someone from doing something"
    },
    {
        word:"effect",meaning:"영향",
        영영풀이:"a result which is caused by something"
    },
    {
        word:"harmful",meaning:"해로운",
        영영풀이:"causing them"
    },
    {
        word:"leftovers",meaning:"남은 음식",
        영영풀이:"food that has not been eaten at the end of a meal"
        
    },
    {
        word:"migrate",meaning:"이주하다",
        영영풀이:"to move from one place to another"
    },
    {
        word:"ocean",meaning:"대양",
        영영풀이:"one of the very large areas of sea on the earth's suface"
    },
    {
        word:"pollution",meaning:"오염",
        영영풀이:"the process of making the environment unclean"
    },
    {
        word:"population",meaning:"인구",
        영영풀이:"all the people who live in a particular area"
    },
    {
        word:"recent",meaning:"최근의",
        영영풀이:"happening a short time ago"
    },
    {
        word:"serious",meaning:"심각한",
        영영풀이:"bad or worrying"
    },
    {
        word:"starry",meaning:"별이 많은",
        영영풀이:"having many stars"
    },
    {
        word:"suffer",meaning:"고통 받다",
        영영풀이:"to experience a difficulty or pain"
    },
    {
        word:"threaten",meaning:"위협하다",
        영영풀이:"to speak or act in a scary way"
    },
    {
        word:"wander",meaning:"헤매다",
        영영풀이:"to walk around slowly without a purpose"
    },
    {
        word:"wildlife",meaning:"야생 생물",
        영영풀이:"animals and plants that live in natural conditions"
    },
];
let click123 = 0;
function selectNewWord() {
    const randomIndex = Math.floor(Math.random() * list1234.length);
    return list1234[randomIndex];
}

function initGame() {
    const selectedPair = selectNewWord();
    document.getElementById("result").textContent = "";
    document.getElementById("answerInput").value = "";
    if (click123 === 0) {
        document.getElementById("answerInput").placeholder = "영어단어를 입력하세요";
        document.getElementById("word").textContent = selectedPair.meaning;
        return selectedPair.word;
    } else {
        document.getElementById("answerInput").placeholder = "영영풀이를 입력하세요";
        document.getElementById("word").textContent = selectedPair.word;
        return selectedPair.영영풀이;
    }
}

let currentWord = initGame();

function checkAnswer() {
    const answer = document.getElementById("answerInput").value.toLowerCase();
    const resultDisplay = document.getElementById("result");

    if (answer === currentWord) {
        currentWord = initGame();
    } else {
        resultDisplay.textContent = "틀렸습니다. 다시 입력하시오.";
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        checkAnswer();
    }
}
function 눌렀다() {
    click123 = 1 - click123
    currentWord = initGame()
}
