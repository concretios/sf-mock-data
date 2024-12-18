export default TextFields {

    "first name": {
        values: ["Divy", "Rahul", "Akshat", "Karan"],
        generate: () => {parseInt((Math.random() * 2000) + 1)}
    },

    "last name": {
        values: []
    },

    "default":{
        //provide 3k values with random words.
        values: []
        generate: () => { parseInt((Math.random() * 3000) + 1) }
    }
};


