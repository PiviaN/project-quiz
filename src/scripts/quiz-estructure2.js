class Quiz2 {
    structures = [
        {
            page1: {
            jorginho: "empresta a doze",
        },
        page2: {
            robervaldo: "careca",
        }
    }
    ]

    getEveryElement() {
        for (const prop of this.structures) {
            return prop;
        }
    }
}