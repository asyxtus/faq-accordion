const accordionItemHeaders = document.querySelectorAll(".block_faq");

accordionItemHeaders.forEach(block_faq => {
    block_faq.addEventListener("click", () => {
       
        if (block_faq.classList.contains("active")) {
            block_faq.classList.toggle("active")
        }
        else {
            accordionItemHeaders.forEach(block_faq => block_faq.classList.remove("active"))
            block_faq.classList.add("active");
        }
    });
});