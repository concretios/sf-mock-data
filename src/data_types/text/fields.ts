export const TextFields: any = {

    "first name": {
        values: ["Divy", "Rahul", "Akshat", "Karan"],
        generate: () => { this.values[Math.round((Math.random() * 2000) + 1)] }
    },

    "last name": {
        values: [],
        generate: () => { this.values[Math.round((Math.random() * 2000) + 1)] }
    },

    "default":{
        //provide 3k values with random words.
        values: [],
        generate: () => { this.values[Math.round((Math.random() * 3000) + 1)] }
    }
};
