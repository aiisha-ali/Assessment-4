const { default: axios } = require("axios");


///////////////////////////////////////////////////////////////

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)



const reassuranceBtn = document.getElementById("reassuranceButton")

const getReassurance = () => {
    axios.get("http://localhost:4000/api/reassurance/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

reassuranceBtn.addEventListener('click', getReassurance)





const affirmationsBtn = document.getElementById("affirmationsButton")

const getAffirmations = () => {
    axios.get("http://localhost:4000/api/affirmations/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

affirmationsBtn.addEventListener('click', getAffirmations)




const prayerBtn = document.getElementById("prayerButton")

const getPrayer = () => {
    axios.get("http://localhost:4000/api/prayer/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

prayerBtn.addEventListener('click', getPrayer)

