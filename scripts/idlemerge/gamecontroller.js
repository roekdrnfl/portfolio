window.onload = function() {
    const jungle = document.querySelector("#jungle"),
        gen = document.querySelector("#generator"),
        remaining = document.querySelector("#remaining"),
        inventory = document.querySelector("#inventory"), 
        monkeyCount = document.querySelector("#monkey_count div:last-child"),
        financeDiv = document.querySelector("#finance div:last-child");
    
    const max = 10, sizeOfBanana = 40, sizeOfMonkey = sizeOfBanana * 1.5, sizeOfBranch = 25, income = 3;

    let remain = 10, finance = 0;

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
                    randomY + sizeOfMonkey > window.innerHeight ?
                    window.innerHeight - sizeOfMonkey : randomY
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
            const monkey = banana;
            monkey.src = "./images/monkey_lv1.png";
            monkey.style.height = `${sizeOfMonkey}px`;
            
            const incomeInfo = document.createElement("div");
            incomeInfo.style.position = "absolute";
            incomeInfo.style.zIndex = 0;
            incomeInfo.style.top = `${adjustedY - sizeOfBranch}px`;
            incomeInfo.style.left = `${adjustedX}px`;
            incomeInfo.style.display = "flex";
            incomeInfo.style.alignItems = "center";
            incomeInfo.style.color = "white";
            incomeInfo.style.fontWeight = "bold";

            const branch = document.createElement("img");
            branch.src = "./images/branch.png";
            branch.style.height = `${sizeOfBranch}px`;
            branch.style.zIndex = 0;

            jungle.appendChild(incomeInfo);

            setInterval(() => {
                if(!!incomeInfo.innerHTML){
                    incomeInfo.innerHTML = null;
                }
                else{
                    incomeInfo.append(branch, ` +${income}`);
                    
                    finance += income;

                    financeDiv.innerText = finance;
                    monkeyCount.innerText = `${document.querySelectorAll(`[src^="./images/monkey_lv"]:not(:first-child)`).length} / 10`;                    
                }
            }, 800);
            
        }, 1500);
    });
}