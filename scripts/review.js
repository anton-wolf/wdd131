const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const container = document.querySelector(".review");

const review_template = document.querySelector(".review_template");

const review_clone = review_template.content.cloneNode(true);


let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
    reviewCount = 0;
}

reviewCount = parseInt(reviewCount) + 1;
localStorage.setItem("reviewCount", reviewCount);


review_clone.querySelector(".rev_name").textContent = params.get("product");
review_clone.querySelector('.rev_rating').textContent = params.get("rating");
review_clone.querySelector('.rev_date').textContent = params.get("install_date");
review_clone.querySelector(".rev_setup").textContent = params.get("feature1");
review_clone.querySelector(".rev_dura").textContent = params.get("feature2");
review_clone.querySelector(".rev_perf").textContent = params.get("feature3");
review_clone.querySelector(".rev_design").textContent = params.get("feature4");
review_clone.querySelector(".rev_review").textContent = params.get("review");
review_clone.querySelector(".rev_reviewer").textContent = params.get("username");
review_clone.querySelector(".rev_count").textContent = localStorage.getItem("reviewCount");


/*document.addEventListener("DOMContentLoaded", () => {

});*/


container.append(review_clone);


// Optional: show it on the page
//const display = document.getElementById("reviewCountDisplay");

//display.textContent = `This product has ${reviewCount} review(s).`;

