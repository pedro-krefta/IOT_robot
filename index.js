const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add(
            "bg-slate-950/90",
            "shadow-2xl",
            "shadow-blue-900/20"
        );

    } else {

        header.classList.remove(
            "bg-slate-950/90",
            "shadow-2xl",
            "shadow-blue-900/20"
        );

    }

});

const elementos = document.querySelectorAll("section h2, section p, section a, .grid > div");

elementos.forEach((elemento, index) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all .8s ease";

    setTimeout(() => {

        elemento.style.opacity = "1";
        elemento.style.transform = "translateY(0px)";

    }, index * 120);

});

const numeros = document.querySelectorAll("h3");

function animarNumero(elemento, final) {

    let atual = 0;

    const incremento = Math.ceil(final / 70);

    const intervalo = setInterval(() => {

        atual += incremento;

        if (atual >= final) {

            atual = final;
            clearInterval(intervalo);

        }

        elemento.textContent = atual;

    }, 25);

}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            numeros.forEach(numero => {

                const texto = numero.textContent;

                if (texto.includes("%")) {

                    numero.textContent = "0%";

                    animarNumero(numero, 95);

                    setTimeout(() => {

                        numero.textContent += "%";

                    }, 1800);

                }

                else if (texto.includes("24")) {

                    numero.textContent = "0";

                    animarNumero(numero, 24);

                    setTimeout(() => {

                        numero.textContent += "h";

                    }, 1000);

                }

                else if (texto.includes("7")) {

                    numero.textContent = "0";

                    animarNumero(numero, 7);

                }

            });

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector("section:last-of-type"));

const robo = document.querySelector("img");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    robo.style.transform = `
        rotateY(${-x}deg)
        rotateX(${y}deg)
    `;

});

const botoes = document.querySelectorAll("a");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transition = ".3s";
        botao.style.transform = "scale(1.05)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "scale(1)";

    });

});