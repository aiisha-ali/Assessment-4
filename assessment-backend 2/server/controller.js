module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A small donation is call for. It’s the right thing to do!", "An inch of time is an inch of gold!", "Because you demand more from yourself, others respect you deeply!", "If a true sense of value is to be yours it must come through service.", "It is honorable to stand up for what is right, however unpopular it seems."];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);

    },
    getAffirmations: (req, res) => {
            const affirmations = ["I am grateful for everything I have in my life.", "I must remember the incredible power I possess within me to achieve anything I desire.", "I belong in this world; there are people that care about me and my worth.", "Happiness is a choice, and today I choose to be happy."," I finish what matters and let go of what does not."];
            let randomIndex = Math.floor(Math.random() * affirmations.length);
            let randomAffirmations = affirmations[randomIndex];
          
            res.status(200).send(randomAffirmations); 
    },
    getReassurance: (req, res) => {
        const reassurance = ["Every positive attempt was as a result of encouragement, every encouragement leads to success.", "Correction does much, but encouragement does more.", "It doesn't have to make sense to anyone else.","Never lose hope. Storms make people stronger and never last forever.", "Just because something isn't happening for you right now, doesn't mean that it will never happen." ];
        let randomIndex = Math.floor(Math.random() * reassurance.length);
        let randomReassurance = reassurance[randomIndex];
      
        res.status(200).send(randomReassurance);



    },

    getPrayer: (req, res) => {
       const prayer = ["O Lord, increase my knowledge.", "I seek forgiveness from God for all my sins and turn to Him.", "Peace be on you and the mercy and blessings of God.", "In the protection of God", "May God reward you the best." ];
       let randomIndex = Math.floor(Math.random() * prayer.length);
       let randomPrayer = prayer[randomIndex];
  
       res.status(200).send(randomPrayer);

    }