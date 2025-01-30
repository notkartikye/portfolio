class YBCard {
    constructor(id, title, description, image, href) {
    this.idCard = id
    this.titre = title
    this.description = description
    this.image = image
    this.href = href
    }

    initCard() {
    this.updateDom();
    this.activateListeners();
    }

    updateDom() {
    var cardDom = document.getElementById(this.idCard)
    if(cardDom.hasChildNodes()){
        var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
        cardDomImage.src = this.image;

        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        cardDomTitle.innerHTML = this.titre;

        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        cardDomDesc.innerHTML = this.description;
        
    }
    }

    activateListeners() {
    var cardDom = document.getElementById(this.idCard)
    cardDom.addEventListener("mouseover", function( event ) {
        var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
        var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
        cardDomMiddle.style.height = cardMiddleHeight + 15 + "px";
    }, false);

    cardDom.addEventListener("mouseout", function( event ) {
        var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
        cardDomMiddle.style.height = 50 + "px";
    }, false);
    }
}

var card1 = new YBCard("card1", "Educado", "Collaborated with a team from Stanford University to design the website for “Uducado”, an AI-powered education platform that identifies learning gaps in a student's understanding and improves upon them. Created the website design from scratch, incorporating intuitive and creative solutions to address the platform's unique problem statements for the best user experience.<br><br/><br><br/>", "./images/educado.png", "https://www.figma.com/proto/Bn4nflptd1h3FpXYbTTSZ0/Untitled?page-id=0%3A1&node-id=2-9&viewport=770%2C79%2C0.28&scaling=min-zoom&starting-point-node-id=17%3A802")
card1.initCard();

var card2 = new YBCard("card2", "Green Apron", "Led a team in designing the logo and user interface for \"Green Apron,\" a vegetarian alternative recommendation app for the course \"Visual Design & Communication.\" Applied HCI/UI/UX skills to create an intuitive and user-friendly design that includes personalized recommendations, shopping lists, and a step-by-step recipe guide, as well as statistics on the user's impact on the world and climate through their dietary choices.<br><br/><br><br/>", "./images/greenapron.png", "https://example.com");
card2.initCard();

var card3 = new YBCard("card3", "Foody", "Led a team in designing a personalized food ordering app’s UI/UX using Figma, for the course \"Introduction to Human-Computer Interaction,\" applying HCI principles to enhance user experience and satisfaction.<br><br/><br><br/>", "./images/foody.png", "https://example.com");
card3.initCard();




// SMOOTH SCROLL
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
        });
    }
    }
});
gsap.registerPlugin(ScrollTrigger);

gsap.to("#kartikye", {
  x: 800,
  duration: 20,
  scrollTrigger: {
    trigger: "#back",
    start: "50% 50%",
    end: "150% 150%",
    scrub: 3,
    // markers: true
  }
});

gsap.from("#navi", {
    scrollTrigger:{
        trigger: "#back",
        start: "50% 50%",
        end: "150% 150%",
        scrub: 2,
        // markers: true
    },
    y:20,
    opacity: 0,
    duration: 1

})


gsap.from("#helpingbrand h1", {
    scrollTrigger:{
        trigger: "#one",
        start: "20% 80%",
        end: "50% 70%",
        scrub: 2,
        // markers: true
    },
    y: 20,
    opacity: 0,
    duration: 1
})


gsap.from("#lets_create", {
    scrollTrigger:{
        trigger: "#four",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    x: -150,
    duration: 1
})

gsap.from("#the_future", {
    scrollTrigger:{
        trigger: "#four",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    x: -150,
    duration: 1
})


///////add Event Listner/////------

$(document).ready(function() {

	$(window).resize(function() {

		var browserWidth = $(window).innerWidth();

		function resizeSlider(numColumns) {

			//Translate number of bootstrap columns
			if (numColumns == 4) {
				var bsColumn = "col-xs-3";
			} else if (numColumns == 3) {
				var bsColumn = "col-xs-4";
			} else if (numColumns == 2) {
				var bsColumn = "col-xs-6";
			} else if (numColumns == 1) {
				var bsColumn = "col-xs-12";
			}

			//Upwrap the slide images from their containing divs
			$(".slide-link").unwrap().unwrap();

			//Wrap every card in the appropriate bootstrap column
			$(".slide-link").wrap("<div class='" + bsColumn + " slide-wrapper'></div>");

			var slideWrappers = $(".slide-wrapper");

			//Wrap every 3 cards in an item class, forming 1 whole slide
			for (var i = 0; i < slideWrappers.length; i += numColumns) {
				if (i == 0) {
					var activeItem = ' active';
				} else {
					var activeItem = '';
				}

				slideWrappers.slice(i, i + numColumns).wrapAll("<div class='item" + activeItem + "'></div>");
			}

			//Empty the control indicators and rebuild them based on new number of slides
			$(".carousel-indicators").html("");

			var newNumberOfSlides = $("#myCarousel .item").length;

			for (var s = 0; s < newNumberOfSlides; s++) {
				if (s == 0) {
					var activeClass = "class='active'";
				} else {
					var activeClass = "";
				}

				$(".carousel-indicators").append("<li data-target='#carousel' data-slide-to='" + s + "'" + activeClass + "></li>");
			}
		}

		//if we're on a large desktop, organize the slides in 3 columns
		if (browserWidth > 991) {
			resizeSlider(3);
			//Large Tablet - 3 columns
		} else if (browserWidth > 767) {
			resizeSlider(2);
			//Small Tablet - 2 column
		} else {
			resizeSlider(1);
		}
	}).resize();

});




gsap.from("#line-1", { // changed the target to #line
    scrollTrigger: {
      trigger: "#one", // changed the trigger to #one
      start: "0% 50%",
      end: "100% 100%",
      scrub: 2,
      // markers: true
    },
    x: -150,
    duration: 1,
    opacity: 1 // added opacity property to show the element during animation
  });

gsap.from("#aboutme", { // changed the target to #line
    scrollTrigger: {
      trigger: "#one", // changed the trigger to #one
      start: "0% 50%",
      end: "100% 100%",
      scrub: 2,
      // markers: true
    },
    x: -150,
    duration: 1,
    opacity: 1 // added opacity property to show the element during animation
  });

  gsap.from("#line-2", { // changed the target to #line
    scrollTrigger: {
      trigger: "#one", // changed the trigger to #one
      start: "0% 50%",
      end: "100% 100%",
      scrub: 2,
      // markers: true
    },
    x: -150,
    duration: 1,
    opacity: 1 // added opacity property to show the element during animation
  });
  
gsap.from("#recentprojects", { // changed the target to #line
    scrollTrigger: {
      trigger: "#one", // changed the trigger to #one
      start: "0% 50%",
      end: "100% 100%",
      scrub: 2,
      // markers: true
    },
    x: -150,
    duration: 1,
    opacity: 1 // added opacity property to show the element during animation
  });
  

  // select the image and set its initial position
const img = document.querySelector("#back img");
gsap.set(img, { y: "100%" });

// animate the image to slide up
gsap.to(img, {
  duration: 1,
  y: "0%",
  ease: "power2.out",
});
