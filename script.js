document.addEventListener("mousemove", (e) => {
    const scratcher = document.createElement("span");
    scratcher.style.left = e.clientX - 40 + "px";
    scratcher.style.top = e.clientY - 40 + "px";
    document.body.appendChild(scratcher);
    setTimeout(() => scratcher.remove(), 100);
});