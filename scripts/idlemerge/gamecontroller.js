window.onload = function() {
    const jungle = document.querySelector("#jungle"),
        gen = document.querySelector("#generator"),
        remaining = document.querySelector("#remaining");
    
    const max = 10, sizeOfBanana = 40;

    let remain = 10;

    remaining.innerText = `(${remain} / ${max})`;

    gen.addEventListener("click", function() {
        if(remain === 0) return;

        remaining.innerText = `(${--remain} / ${max})`;

        const randomX = Math.random() * window.innerWidth,
            randomY = Math.random() * window.innerHeight;

        const adjustedX = randomX - sizeOfBanana < 0 ? 0 :
            (
                randomX + sizeOfBanana > window.innerWidth ?
                window.innerWidth - sizeOfBanana : randomX
            ),
            adjustedY = randomY - sizeOfBanana < 0 ? 0 :
                (
                    randomY + sizeOfBanana > window.innerHeight ?
                    window.innerHeight - sizeOfBanana : randomY
                );

        const banana = document.createElement("img");
        banana.src = "./images/banana.png";
        banana.style.position = "absolute";
        banana.style.height = `${sizeOfBanana}px`;
        banana.style.zIndex = 1;
        banana.style.top = `${adjustedY}px`;
        banana.style.left = `${adjustedX}px`;

        jungle.appendChild(banana);
    });
}