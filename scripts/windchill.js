const windChillFactor = (temp, windKmh) => {
    //if (temp > 10 || windKmh <= 4.8) return null;

    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * temp * Math.pow(windKmh, 0.16)).toFixed(2);
};

const appendTo = document.querySelector("#wind_chill");

const child = document.createElement("span")

child.innerHTML = `${windChillFactor(9, 13)}<sup>○</sup>C`;

appendTo.append(child)