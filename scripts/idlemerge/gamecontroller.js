window.onload = function() {
    const jungle = document.querySelector("#jungle"),
        gen = document.querySelector("#generator"),
        remaining = document.querySelector("#remaining");
    
    const max = 10, sizeOfBanana = 40, sizeOfBranch = 25;

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
            adjustedY = randomY - sizeOfBanana - sizeOfBranch < 0 ? sizeOfBranch :
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

        setTimeout(() => {
            const monkey = banana, sizeOfMonkey = sizeOfBanana * 1.5, income = 3;
            monkey.src = "./images/monkey_lv1.png";
            monkey.style.height = `${sizeOfMonkey}px`;
            
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.zIndex = 0;
            div.style.top = `${adjustedY - sizeOfBranch}px`;
            div.style.left = `${adjustedX}px`;
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.color = "white";
            div.style.fontWeight = "bold";

            const branch = document.createElement("img");
            branch.src = "./images/branch.png";
            branch.style.height = `${sizeOfBranch}px`;
            branch.style.zIndex = 0;

            setTimeout(() => {
                div.append(branch, ` +${income}`);
                jungle.appendChild(div);
            }, 800);

            
            setTimeout(() => {
                div.remove();
            }, 1600);
        }, 1500);
    });
}