$(".btn-menu").click(function() { 
    $(".box-popup").fadeIn("slow"); 
});

$(".btn-cerrar").click(function() { 
    $(".box-popup").fadeOut("slow"); 
});

$(".todos").click(function() { 
    $(".box-item").fadeIn("slow"); 
    $(".todos").fadeOut("slow"); 
});

$("#btn-politica").click(function() { 
    $(".box-item").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-nacional").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".nacional").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-economia").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".economia").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-cultura").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".cultura").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-deporte").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".deporte").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-salud").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".salud").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-trivias").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".trivia").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-infodraws").click(function() { 
    $(".box-item").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-unidad-de-investigacion").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".unidad").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $(".otros").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});

$("#btn-otros").click(function() { 
    $(".todos").fadeIn("slow"); 
    $(".otros").fadeIn("slow"); 
    $(".box-popup").fadeOut("slow"); 
    $(".nacional").fadeOut("slow"); 
    $(".unidad").fadeOut("slow"); 
    $(".ecdata").fadeOut("slow"); 
    $(".salud").fadeOut("slow"); 
    $(".cultura").fadeOut("slow"); 
    $(".trivia").fadeOut("slow"); 
    $(".deporte").fadeOut("slow"); 
    $(".luces").fadeOut("slow"); 
    $(".economia").fadeOut("slow"); 
    $("html, body").animate({ scrollTop: "+=600px" }, "slow");
});


// buscador

    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.box-item');
    let timer;

    searchInput.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const searchTerm = searchInput.value.toLowerCase();
            let isMatchFound = false;

            items.forEach(item => {
                if (searchTerm === '' || item.classList.contains(searchTerm)) {
                    item.style.display = 'inline-block';
                    isMatchFound = true;
                } else {
                    item.style.display = 'none';
                }
            });

            // Mostrar todos los divs si no se encuentra ninguna coincidencia
            if (!isMatchFound) {
                items.forEach(item => {
                    item.style.display = 'inline-block';
                });
            } else {
                // Hacer scroll al primer elemento visible
                const firstVisibleItem = document.querySelector('.box-item[style="display: inline-block;"]');
                if (firstVisibleItem) {
                    firstVisibleItem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 300); // Espera 300ms después de que el usuario termine de escribir
    });


$('#searchInput')
	.on('keyup', function(e) {
  	var input = $(this).val();
  	input.length ?
        $('#search-result-container').fadeOut() :
        $(".todos").fadeOut("slow")    
});