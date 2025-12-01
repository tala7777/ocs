document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");

    document.getElementById("fontSelect").addEventListener("change", (e) => {
        editor.focus();
        document.execCommand("fontName", false, e.target.value);
    });

    document.getElementById("fontSizeSelect").addEventListener("change", (e) => {
        editor.focus();
         document.execCommand("fontSize", false, e.target.value);
    });

    document.getElementById("boldBtn").addEventListener("click", () => {
        document.execCommand("bold");
    });

    document.getElementById("italicBtn").addEventListener("click", () => {
        document.execCommand("italic");
    });

    document.getElementById("underlineBtn").addEventListener("click", () => {
        document.execCommand("underline");
    });
});
