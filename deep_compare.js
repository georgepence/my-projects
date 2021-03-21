function deepEqual(value1, value2, idx = 0) {

    if((value1 === null && value2 === null) ||
        (value1 === undefined && value2 === undefined)) {
        return true
    }
    
    else if (typeof value1 === "object" && typeof value2 === "object") {
        let keys1 = Object.keys(value1), keys2 = Object.keys(value2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        if (deepEqual(keys1[idx], keys2[idx]) &&
            deepEqual(value1[keys1[idx]], value2[keys2[idx]])) {
            if (idx === keys1.length - 1) {return true}
            else {return deepEqual(value1, value2, idx + 1)}
        }
        return false;
    }
    
    else if (typeof value1 === "function" && typeof value2 === "function") {
        if (value1.toString() === value2.toString()) {
            return true;
        }
    }
    
    else if (value1 === value2) {
        return true;
    }
    
    return false;
    
}
