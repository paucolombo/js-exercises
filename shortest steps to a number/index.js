function shortestStepsToNum(num) {
    var steps = 0;
    if (num === 1) {
        return 0;
    } else if (num % 2 == 0) {
        while (num % 2 == 0 && num > 1) {
            num = num / 2;
            steps++;
            while (num > 1 && num % 2 != 0) {
                num--;
                steps++;
            }
        }
        return steps;
    } else if (num % 2 != 0) {
        while (num > 1 && num % 2 != 0) {
            num--;
            steps++;
            while (num % 2 == 0 && num > 1) {
                num = num / 2;
                steps++;
            }
        }
        return steps;
    }
}
shortestStepsToNum(17)